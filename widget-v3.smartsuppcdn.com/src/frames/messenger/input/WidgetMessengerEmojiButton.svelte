<script lang="ts">
import { tick } from 'svelte'
import { fly } from 'svelte/transition'
import { createPopperActions } from 'svelte-popperjs'
import IconEmoji from 'virtual:icons/lucide/smile'

import IconButton from '@/components/core/IconButton.svelte'
import EmojiPicker from '@/components/EmojiPicker.svelte'
import Tooltip from '@/components/Tooltip.svelte'
import { testIds } from '@/constants'
import { isDesktop, isIOsDevice, isMobileDevice } from '@/modules/device'
import { insertTextIntoMessengerInput } from '@/modules/textarea'
import { t } from '@/modules/translations'
import { clickOutside } from '@/utils/clickOutside'

type Props = {
	textareaRef: HTMLTextAreaElement | null
}

let { textareaRef }: Props = $props()

let isEmojiPickerOpen = $state(false)
let lastCursorPosition = 0

const [popperRef, popperContent] = createPopperActions({ placement: 'top-start' })
const popperOptions = {
	modifiers: [
		{ name: 'offset', options: { offset: [0, 12] } },
		{
			name: 'preventOverflow',
			options: {
				padding: { right: 4, left: 4 },
			},
		},
	],
}

const openEmojiPicker = () => {
	isEmojiPickerOpen = true
	lastCursorPosition = textareaRef?.selectionStart ?? 0
}

const closeEmojiPicker = () => {
	if (!isEmojiPickerOpen) return
	isEmojiPickerOpen = false
}

const handleEmojiButtonClick = (e: MouseEvent) => {
	e.stopPropagation()
	isEmojiPickerOpen ? closeEmojiPicker() : openEmojiPicker()
}

const handleEmojiClick = async (emoji: string) => {
	insertTextIntoMessengerInput(emoji, lastCursorPosition)
	lastCursorPosition = lastCursorPosition + emoji.length

	await tick()

	// Safari on iOS devices focuses input after 'setSelectionRange' which is not intended behavior
	if (!isIOsDevice()) {
		textareaRef?.setSelectionRange(lastCursorPosition, lastCursorPosition)
	}

	if ($isDesktop) {
		closeEmojiPicker()
		textareaRef?.focus()
	}
}
</script>

<div use:clickOutside={closeEmojiPicker}>
	<div use:popperRef>
		<Tooltip content={$t('tooltip.emoji')} placement="bottom" delay={1000}>
			<IconButton
				icon={IconEmoji}
				iconDescription="Emoji picker"
				onClick={handleEmojiButtonClick}
				testId={testIds.buttonEmoji}
			/>
		</Tooltip>
	</div>

	{#if isEmojiPickerOpen}
		<div id="tooltip" use:popperContent={popperOptions} role="tooltip" class="z-10">
			<div
				transition:fly={{ duration: 250, y: 10 }}
				class={['h-400px max-h-80vh', $isMobileDevice ? 'w-280px' : 'w-355px']}
			>
				<EmojiPicker onEmojiClick={handleEmojiClick} />
			</div>
		</div>
	{/if}
</div>
