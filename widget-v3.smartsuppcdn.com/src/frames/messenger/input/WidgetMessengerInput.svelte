<script lang="ts">
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'

import { isMessengerFrameOpen } from '@/modules/app'
import { hasContactOrAgentMessage, isMessengerInputDisabled } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'
import { setToStorage, StorageItem } from '@/modules/storage'
import { isMessengerInputEmpty, messengerInputValue, sendMessageWithAuthCheck } from '@/modules/textarea'
import { debounce } from '@/utils/debounce'
import { getHostWindow } from '@/utils/window'

import Attachments from './WidgetMessengerAttachments.svelte'
import AutosizeTextarea from './WidgetMessengerAutosizeTextarea.svelte'
import WidgetMessengerEmojiButton from './WidgetMessengerEmojiButton.svelte'
import WidgetMessengerPrimaryButton from './WidgetMessengerPrimaryButton.svelte'

let textareaRef: HTMLTextAreaElement | null = $state(null)

const { widgetBlockingOptions } = widgetOptions.getOptions()

onMount(() => {
	const handleWindowUnload = () => {
		setToStorage({ name: StorageItem.Message, value: $messengerInputValue })
	}

	getHostWindow().addEventListener('pagehide', handleWindowUnload)
	return () => getHostWindow().removeEventListener('pagehide', handleWindowUnload)
})

// Handles the case of saving the message to storage when back/forward cache flag is enabled
const debouncedSaveToStore = debounce((text: string) => setToStorage({ name: StorageItem.Message, value: text }), 500)
$effect(() => {
	if (getHostWindow().SMARTSUPP_BFCACHE === true) {
		debouncedSaveToStore($messengerInputValue)
	}
})

let isMessengerInput = $derived($isMessengerFrameOpen)

let shouldRenderPrimaryButton = $derived.by(() => {
	if (isMessengerInput) {
		return $hasContactOrAgentMessage || !$isMessengerInputEmpty
	} else {
		return true
	}
})
</script>

{#if !$isMessengerInputDisabled && !widgetBlockingOptions?.disableTextarea}
	<div class="relative flex items-end">
		<div
			transition:fly={{ y: 15, duration: 500 }}
			class="flex flex-col bg-slate-100 rounded-3xl transition-all duration-250"
			style:width={shouldRenderPrimaryButton ? 'calc(100% - 48px)' : '100%'}
		>
			{#if isMessengerInput}
				<Attachments />
			{/if}
			<div class="flex w-full">
				<AutosizeTextarea bind:textareaRef onKeyEnter={sendMessageWithAuthCheck} resizable={isMessengerInput} />
				{#if isMessengerInput}
					<div class="flex-shrink flex items-end py-1.5 pr-1.5 text-lg text-slate-500">
						<WidgetMessengerEmojiButton {textareaRef} />
					</div>
				{/if}
			</div>
		</div>
		{#if shouldRenderPrimaryButton}
			<WidgetMessengerPrimaryButton />
		{/if}
	</div>
{/if}
