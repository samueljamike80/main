<script lang="ts">
import { scale } from 'svelte/transition'
import IconSuccess from 'virtual:icons/lucide/check'
import IconLoader from 'virtual:icons/lucide/loader-2'
import IconPaperclip from 'virtual:icons/lucide/paperclip'

import IconButton from '@/components/core/IconButton.svelte'
import IconSend from '@/components/icons/IconSend.svelte'
import Tooltip from '@/components/Tooltip.svelte'
import { testIds } from '@/constants'
import { closePopupFrame, isMessengerFrameOpen, openMessengerFrame } from '@/modules/app'
import { isDisconnected } from '@/modules/app/connectionStatus'
import { isAttachmentsDisabled } from '@/modules/chat'
import { files, FILES_UPLOADED_CONFIRMATION_DURATION } from '@/modules/fileUpload'
import { fileUploadInProgress, isFileUploadDisabled } from '@/modules/fileUpload/store'
import { cardsInProgress } from '@/modules/linkPreview'
import {
	isMessengerInputEmpty,
	MESSAGE_SENT_CONFIRMATION_DURATION,
	sendMessageWithAuthCheck,
	showSendSuccess,
} from '@/modules/textarea'
import { t } from '@/modules/translations'

import FileUpload from './WidgetMessengerFileUpload.svelte'

const scaleOptions = { duration: 250 }

let size = 'lg' as 'md' | 'lg' | 'xl'
let shouldRender: 'send' | 'file-upload' | 'loader' | 'success' = $state('send')
let fileInputRef: HTMLInputElement | null = $state(null)
let fileUploadPrevState = $state(false)
let successTimeout: number | null = $state(null)

const openFileUploadDialog = () => {
	fileInputRef && (fileInputRef as HTMLInputElement).click()
}

const handleSendButtonClick = () => {
	if ($isMessengerInputEmpty && !$isMessengerFrameOpen) {
		openMessengerFrame()
	} else sendMessageWithAuthCheck()
}

let hasPendingFiles = $derived($files && files.count() > 0)
let fileUploadDisabled = $derived(isFileUploadDisabled() && $isAttachmentsDisabled)

$effect(() => {
	fileUploadDisabled
	if ((!$isMessengerInputEmpty || hasPendingFiles || fileUploadDisabled) && !$fileUploadInProgress) {
		shouldRender = 'send'
	} else if (!fileUploadDisabled && $isMessengerFrameOpen) {
		shouldRender = 'file-upload'
	}
	if ($fileUploadInProgress || ($cardsInProgress && $isMessengerFrameOpen)) shouldRender = 'loader'
	if (!$fileUploadInProgress && fileUploadPrevState && !successTimeout) {
		shouldRender = 'success'
		successTimeout = window.setTimeout(() => {
			successTimeout = null
		}, FILES_UPLOADED_CONFIRMATION_DURATION)
	}
	if ($showSendSuccess && !$isMessengerFrameOpen) {
		shouldRender = 'success'
		window.setTimeout(() => {
			showSendSuccess.set(false)
			closePopupFrame()
		}, MESSAGE_SENT_CONFIRMATION_DURATION)
	}
	fileUploadPrevState = $fileUploadInProgress
})

const { buttonSend, buttonAttachment } = testIds
</script>

<div class="absolute bottom-0.5 right-0.5 text-slate-500">
	{#if shouldRender === 'send'}
		<div in:scale|global={scaleOptions}>
			<Tooltip content={$t('tooltip.send')} placement="bottom" delay={1000}>
				<IconButton
					{size}
					icon={IconSend}
					variant={'primary'}
					disabled={$isDisconnected}
					iconDescription="Send message"
					onClick={handleSendButtonClick}
					testId={buttonSend}
				/>
			</Tooltip>
		</div>
	{:else if shouldRender === 'file-upload'}
		<div in:scale|global={scaleOptions}>
			<Tooltip content={$t('tooltip.attachment')} placement="bottom" delay={1000}>
				<IconButton
					{size}
					icon={IconPaperclip}
					iconDescription="Upload file"
					disabled={$isDisconnected}
					onClick={openFileUploadDialog}
					testId={buttonAttachment}
				/>
				<FileUpload bind:inputRef={fileInputRef as HTMLInputElement} />
			</Tooltip>
		</div>
	{:else if shouldRender === 'loader'}
		<div in:scale|global={scaleOptions}>
			<IconButton
				{size}
				icon={IconLoader}
				iconAnimation="spin"
				variant="ghost"
				iconDescription="Uploading..."
				disabled={true}
			/>
		</div>
	{:else if shouldRender === 'success'}
		<div in:scale|global={scaleOptions}>
			<IconButton {size} icon={IconSuccess} variant="success" iconDescription="Success" />
		</div>
	{/if}
</div>
