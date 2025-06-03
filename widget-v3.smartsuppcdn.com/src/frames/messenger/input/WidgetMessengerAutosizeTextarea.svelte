<script lang="ts">
import { testIds } from '@/constants'
import { isMessengerFrameOpen } from '@/modules/app'
import { isWidgetOnline } from '@/modules/chat'
import { isDesktop, isTouchDevice } from '@/modules/device'
import { checkAndAddFiles } from '@/modules/fileUpload/store'
import { warningMessage } from '@/modules/flashMessages'
import {
	Key,
	messengerInputValue,
	setMessengerInputValue,
	startVisitorTyping,
	stopVisitorTyping,
	TEXTAREA_MAX_LENGTH,
	textareaHeight,
} from '@/modules/textarea'
import { t } from '@/modules/translations'
import { debounce } from '@/utils/debounce'

type Props = {
	textareaRef?: HTMLTextAreaElement | null
	resizable?: boolean
	onKeyEnter: () => void
}

let { textareaRef = $bindable(null), resizable = true, onKeyEnter }: Props = $props()

const getTextareaParentElement = (): HTMLDivElement | null => {
	if (!textareaRef) return null
	return textareaRef.parentNode as HTMLDivElement | null
}

const updateTextareaValueDataset = (value: string) => {
	const parent = getTextareaParentElement()
	if (!parent) return
	parent.dataset.textareaValue = value
}

// Store textarea height to change scroll position of list when textarea height changes
const storeTextareaHeight = () => {
	const parent = getTextareaParentElement()
	if (!parent) return
	textareaHeight.set(parent.clientHeight)
}

const handleInput = (event: Event) => {
	const target = event.target as HTMLTextAreaElement

	// Disallows typing longer texts than 'maxlength' on Android
	target.value = target.value.substring(0, TEXTAREA_MAX_LENGTH)

	setMessengerInputValue(target.value)
	updateTextareaValueDataset(target.value)
	storeTextareaHeight()
	refreshTyping()
	if (target.value.length === TEXTAREA_MAX_LENGTH) {
		warningMessage($t('warningBar.maxLength'))
	}
}

const handlePaste = (event: ClipboardEvent) => {
	const files = event.clipboardData?.files
	if (!files || files.length === 0 || !$isMessengerFrameOpen) return // Disallow pasting files in Popup
	event.preventDefault()
	checkAndAddFiles([...files])
}

const stopTyping = debounce(() => {
	stopVisitorTyping()
}, 3000)

const refreshTyping = () => {
	startVisitorTyping()
	stopTyping()
}

const handleKeyDown = (event: KeyboardEvent) => {
	const { key } = event

	if (key === Key.Enter) {
		// Don't use enter key to send message on touch devices
		if (!event.shiftKey && !isTouchDevice()) {
			event.preventDefault()
			onKeyEnter()
		}
	}
}

// Focus only on desktop
$effect(() => {
	textareaRef && $isDesktop && textareaRef.focus()
})

$effect(() => {
	textareaRef && updateTextareaValueDataset($messengerInputValue)
})
</script>

<div
	class={['textarea-container text-base-input', $isDesktop && 'text-sm', resizable && 'textarea-container-resizable']}
>
	<textarea
		bind:this={textareaRef}
		class={['bg-transparent resize-none overflow-hidden focus:outline-none', !resizable && 'truncate whitespace-pre']}
		placeholder={$t('chatInput.placeholder')}
		disabled={!isWidgetOnline}
		value={$messengerInputValue}
		rows="1"
		maxlength={TEXTAREA_MAX_LENGTH}
		oninput={handleInput}
		onkeydown={handleKeyDown}
		onpaste={handlePaste}
		data-testid={testIds.textarea}
	></textarea>
</div>

<style lang="postcss">
.textarea-container {
	@apply grid flex-1 mb-3 overflow-x-hidden overflow-y-auto overscroll-contain max-h-[32px];
	scrollbar-width: none;
}

.textarea-container::-webkit-scrollbar {
	display: none;
}

.textarea-container-resizable {
	@apply max-h-[125px];
}

.textarea-container::after {
	/* Space needed to prevent jumpy behavior */
	content: attr(data-textarea-value) ' ';
	white-space: pre-wrap;
	visibility: hidden;
	overflow-wrap: break-word;
	word-break: break-word;
}

.textarea-container::after,
textarea {
	@apply pt-3 ml-4 mr-3;
	grid-area: 1 / 1 / 2 / 2;
	font-size: inherit;
}

textarea::placeholder {
	@apply overflow-hidden break-all;
}
</style>
