<script lang="ts">
import { onDestroy, onMount } from 'svelte'

import { sendLinkOpenedEvent } from '@/modules/linkPreview'
import { widgetOptions } from '@/modules/options'
import { t } from '@/modules/translations'
import { escape } from '@/utils/escapeHtml'
import { linkify } from '@/utils/linkify'

import { GDPR_PLACEHOLDER_URL } from '../constants'
import PrivacyNotice from './content/PrivacyNotice.svelte'

type Props = {
	text: string
	replaceText?: string
	clamp?: boolean
	shouldSendLinkOpenedEvent?: boolean
}

let {
	text,
	replaceText = '',
	clamp = widgetOptions.getOptions().urlCardsEnabled,
	shouldSendLinkOpenedEvent = false,
}: Props = $props()
const isGdprNoticeText = text.match(GDPR_PLACEHOLDER_URL)

let contentDiv: HTMLDivElement

const handleClick = async (event: MouseEvent) => {
	const target = (event.target as HTMLElement).closest('a')
	if (target && contentDiv.contains(target) && shouldSendLinkOpenedEvent) {
		await sendLinkOpenedEvent(target.href)
	}
}
onMount(() => {
	if (contentDiv) {
		contentDiv.addEventListener('click', (event) => void handleClick(event))
		contentDiv.addEventListener('auxclick', (event) => {
			event.button !== 2 && void handleClick(event)
		})
		contentDiv.addEventListener('contextmenu', (event) => void handleClick(event))
	}
})

onDestroy(() => {
	if (contentDiv) {
		contentDiv.removeEventListener('click', (event) => void handleClick(event))
		contentDiv.removeEventListener('auxclick', (event) => void handleClick(event))
		contentDiv.removeEventListener('contextmenu', (event) => void handleClick(event))
	}
})
</script>

<div bind:this={contentDiv}>
	{#if isGdprNoticeText}
		{@html escape(text.replace(GDPR_PLACEHOLDER_URL, ''))}
		<div class="flex items-left -mt-3 pb-1">
			<PrivacyNotice label={$t('topBar.gdprTitle')} />
		</div>
	{:else}
		{@html linkify(text, { replaceText, clamp })}
	{/if}
</div>
