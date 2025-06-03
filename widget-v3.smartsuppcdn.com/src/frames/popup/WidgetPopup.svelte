<script lang="ts">
import type { Message } from '@smartsupp/smartsupp-message'
import { onDestroy, onMount, tick } from 'svelte'
import IconClose from 'virtual:icons/lucide/x'

import AvatarGroup from '@/components/avatars/AvatarGroup.svelte'
import Button from '@/components/core/Button.svelte'
import IconButton from '@/components/core/IconButton.svelte'
import FlashMessageContainer from '@/components/flashMessage/FlashMessageContainer.svelte'
import IconSend from '@/components/icons/IconSend.svelte'
import { testIds } from '@/constants'
import WidgetPopupContent from '@/frames/popup/WidgetPopupContent.svelte'
import WidgetPopupInput from '@/frames/popup/WidgetPopupInput.svelte'
import { closePopupFrame, openMessengerFrame } from '@/modules/app'
import { readChat } from '@/modules/chat'
import { hasPopupFrameHover, popupFrameHeight } from '@/modules/frames'
import { hasContactMessage, hasQuickReplies, lastUnreadMessage, popupMessage } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'
import { t } from '@/modules/translations'
import { getHostWindow } from '@/utils/window'

import WidgetPopupAgentInfo from './WidgetPopupAgentInfo.svelte'

let ref: HTMLDivElement | undefined = $state()

let setPopupHeight = () => ref && popupFrameHeight.set(ref.getBoundingClientRect().height)
onMount(() => {
	// Set correct height of popup frame => depends on height of content which is dynamic
	setPopupHeight()
	getHostWindow().addEventListener('visibilitychange', setPopupHeight)
})

onDestroy(() => {
	getHostWindow().removeEventListener('visibilitychange', setPopupHeight)
})

const handlePopupClick = () => {
	openMessengerFrame()
	readChat()
}

const handlePopupClose = () => {
	closePopupFrame(true)
}

const handlePopupMouseEnter = () => {
	hasPopupFrameHover.set(true)
}

const handlePopupMouseLeave = () => {
	hasPopupFrameHover.set(false)
}

const onLastUnreadMessage = async () => {
	await tick()
	setPopupHeight()
}

const { popupTextareaEnabled } = widgetOptions.getOptions()

$effect(() => {
	$lastUnreadMessage && void onLastUnreadMessage()
})
let buttonText = $derived($hasContactMessage ? 'trigger.replyButton' : 'trigger.openChatButton')
let shouldShowTextarea = $derived(
	popupTextareaEnabled && $popupMessage && !hasQuickReplies($popupMessage as Message.Message.Bot),
)
</script>

<!-- If block must be wrapped by extra div, otherwise it throws error in console: https://github.com/sveltejs/svelte/issues/6037#issuecomment-1161861663 -->
<div data-testid={testIds.popup}>
	{#if $popupMessage}
		<FlashMessageContainer />
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<div
			bind:this={ref}
			class="relative p-4 bg-white rounded-lg cursor-pointer"
			onclick={handlePopupClick}
			onmouseenter={handlePopupMouseEnter}
			onmouseleave={handlePopupMouseLeave}
		>
			<div class="flex items-center mb-2">
				{#if $popupMessage.agentId || $popupMessage?.trigger?.identityId}
					<WidgetPopupAgentInfo agentId={$popupMessage.agentId} identityId={$popupMessage?.trigger?.identityId} />
				{:else}
					<AvatarGroup />
				{/if}
			</div>
			<WidgetPopupContent />
			<div class="mt-4">
				{#if shouldShowTextarea}
					<WidgetPopupInput />
				{:else}
					<Button icon={IconSend} isBlock testId={testIds.popupButton}>{$t(buttonText)}</Button>
				{/if}
			</div>
			<div class="absolute top-2 right-2 text-gray-500">
				<IconButton
					icon={IconClose}
					iconDescription="Close"
					onClick={handlePopupClose}
					testId={testIds.popupButtonClose}
				/>
			</div>
		</div>
	{/if}
</div>
