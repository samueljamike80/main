<script lang="ts">
import type { EmojiData, PickerLocale, PickerPreviewPosition, PickerSearchPosition } from 'emoji-mart'
import { onMount } from 'svelte'

import { isMobileDevice } from '@/modules/device'
import {
	DEFAULT_LOCALE,
	getLocale,
	LOCALE_AR,
	LOCALE_CS,
	LOCALE_DE,
	LOCALE_EN,
	LOCALE_ES,
	LOCALE_FA,
	LOCALE_FR,
	LOCALE_IT,
	LOCALE_JA,
	LOCALE_NL,
	LOCALE_PL,
	LOCALE_PT,
	LOCALE_RU,
	LOCALE_UK,
} from '@/modules/translations'

import Skeleton from './core/Skeleton.svelte'
import SkeletonCircle from './core/SkeletonCircle.svelte'

type Props = {
	onEmojiClick: (emoji: string) => void
}

let { onEmojiClick }: Props = $props()

let ref: HTMLDivElement | undefined = $state()
let isLoading = $state(true)
let emojiPerLine = $isMobileDevice ? 7 : 9
let previewPosition: PickerPreviewPosition = $isMobileDevice ? 'none' : 'bottom'
let searchPosition: PickerSearchPosition = $isMobileDevice ? 'none' : 'sticky'

const supportedLocales: PickerLocale[] = [
	LOCALE_EN,
	LOCALE_CS,
	LOCALE_AR,
	LOCALE_DE,
	LOCALE_ES,
	LOCALE_FA,
	LOCALE_FR,
	LOCALE_IT,
	LOCALE_JA,
	LOCALE_NL,
	LOCALE_PL,
	LOCALE_PT,
	LOCALE_RU,
	LOCALE_UK,
]

const getEmojiPickerLocale = (): PickerLocale => {
	const locale = getLocale() as PickerLocale
	return supportedLocales.includes(locale) ? locale : DEFAULT_LOCALE
}

onMount(async () => {
	const { Picker } = await import('emoji-mart')
	const pickerData = async (): Promise<EmojiData> => {
		const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data')

		return response.json() as Promise<EmojiData>
	}

	const data = await pickerData()

	const onEmojiSelect = (emoji: EmojiData) => {
		onEmojiClick(emoji.native)
	}

	const picker = new Picker({
		data,
		onEmojiSelect,
		previewPosition,
		searchPosition,
		navPosition: 'bottom',
		perLine: emojiPerLine,
		theme: 'light',
		locale: getEmojiPickerLocale(),
	}) as HTMLElement
	picker.setAttribute('data-testid', 'emojiWrapper')
	ref?.appendChild(picker)
	isLoading = false
})
</script>

<div class="h-full bg-white rounded-xl" style="box-shadow: rgb(0 0 0 / 12%) 0px 1px 15px 1px;">
	{#if isLoading}
		<div class="flex flex-col space-y-4 p-4">
			<Skeleton height={30} />
			<div class="space-y-2">
				<Skeleton colorScheme="darkGray" width="40%" />
				<Skeleton height={30} />
				<Skeleton height={30} />
			</div>
			<div class="space-y-2">
				<Skeleton colorScheme="darkGray" width="40%" />
				<Skeleton height={30} />
				<Skeleton height={30} />
				<Skeleton height={30} />
			</div>
			<div class="flex space-x-2">
				<div class="flex-shrink-0">
					<SkeletonCircle size={40} />
				</div>
				<Skeleton height={40} />
			</div>
		</div>
	{/if}
	<div class={{ hidden: isLoading }} bind:this={ref}></div>
</div>

<style global>
em-emoji-picker {
	height: 400px;
	max-height: 80vh;
	width: 100%;
	--border-radius: 12px;
	--shadow: none;
}
</style>
