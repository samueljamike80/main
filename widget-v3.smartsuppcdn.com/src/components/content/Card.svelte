<script lang="ts">
import type { Card } from '@smartsupp/smartsupp-message'
import { GroupType } from '@smartsupp/smartsupp-message'
import { getContext } from 'svelte'
import { fade } from 'svelte/transition'
import Image from 'virtual:icons/lucide/image'

import IconCardInfo from '@/components/icons/IconCardInfo.svelte'
import { testIds } from '@/constants'
import { isDraging } from '@/modules/carousel/store'
import { isTouchDevice } from '@/modules/device'
import { cardOpenedGA } from '@/modules/googleAnalytics'
import { getCardUrl, sendLinkOpenedEvent } from '@/modules/linkPreview'
import { contentListItemKey, type WritableMessageContext } from '@/modules/messages'
import { t } from '@/modules/translations'
import { getHostWindow } from '@/utils/window'

import Button from '../core/Button.svelte'

type Props = {
	card: Card
	isCompact?: boolean
	fullWidth?: boolean
}

let context = $derived(getContext<WritableMessageContext>(contentListItemKey))
let { message } = $derived($context)
let { card, isCompact = false, fullWidth = false }: Props = $props()

let timer: NodeJS.Timeout
const url = getCardUrl(card.actions)

let displayUrl = $state(false)

const onMouseOver = () => {
	if (isTouchDevice()) return
	displayUrl = true
}

const onMouseLeave = () => {
	displayUrl = false
}

const onClickInfo = (e: MouseEvent) => {
	e.stopPropagation()
	e.preventDefault()
	if (!isTouchDevice()) return
	if (timer) clearTimeout(timer)
	displayUrl = true
	timer = setTimeout(() => (displayUrl = false), 5000)
}

const onClick = async () => {
	if ($isDraging) return
	const hostname = getHostWindow().location.hostname
	const target = hostname.length > 0 && url.includes(hostname) ? '_parent' : '_blank'
	cardOpenedGA(url)
	window.open(url, target)
	message.trigger?.groupType === GroupType.ai && (await sendLinkOpenedEvent(url))
}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events  -->
<div
	class={`flex flex-col ${
		fullWidth ? 'w-full' : 'w-56'
	} rounded-6 border-slate-200 border-1 bg-slate-100 self-stretch ${isTouchDevice() ? '' : 'cursor-pointer'}`}
	style="box-shadow: rgba(0, 0, 0, 0.05) 2px -2px 16px;"
	data-testid={testIds.productCard}
	onclick={onClick}
	onpointerdown={(e) => e.stopPropagation()}
>
	<div
		class={`flex relative text-slate-500 ${isCompact ? 'h-30' : 'h-40'} w-full rounded-t-6	bg-white ${
			card.image ? '' : 'flex-col text-sm font-light items-center justify-center'
		}`}
		data-testid={testIds.productCardImage}
	>
		{#if card.image}
			<img src={card.image} class="object-cover rounded-t-6 w-full h-full" alt={card.title} />
		{:else}
			<Image width="2rem" height="2rem" class="text-primary-button mb-2" />
			{$t('card.noPreviewTitle')}
		{/if}
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<div
			class="absolute w-7 h-7 bottom-3 right-3"
			style={`transition: scale 200ms; ${!isTouchDevice() && displayUrl ? 'scale: 1.2' : 'scale: 1.0'};`}
			onmouseover={onMouseOver}
			onmouseleave={onMouseLeave}
			onclick={onClickInfo}
			data-testid={testIds.productCardInfo}
		>
			<IconCardInfo />
		</div>
		{#if displayUrl}
			<div
				class={`absolute ${
					isCompact ? 'top-30' : 'top-40'
				} rounded-2 right-2 w-52 text-xs p-1 text-white bg-slate-400 z-100 break-words overflow-hidden line-clamp-5`}
				in:fade|global={{ delay: 500, duration: 250 }}
				out:fade|global={{ duration: 250 }}
			>
				{url}
			</div>
		{/if}
	</div>
	<div class={'font-200 mx-3 mt-3 grow'}>
		<p
			class={[
				'text-sm font-500 mb-2',
				isCompact ? 'line-clamp-1' : 'line-clamp-2',
				'break-words',
				isCompact && 'overflow-hidden text-ellipsis',
			]}
			data-testid={testIds.productCardTitle}
		>
			{card.title || url}
		</p>
		{#if !isCompact}
			<p class={'text-xs line-clamp-3'} data-testid={testIds.productCardDescription}>{card.description}</p>
		{/if}
	</div>
	{#if !isCompact}
		<div class={`m-3 mt-2`}>
			{#each card.actions as action}
				<Button variant="primary" size="sm" isBlock testId={testIds.productCardButton}>{$t(action.title)}</Button>
			{/each}
		</div>
	{/if}
</div>
