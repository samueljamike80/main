<script lang="ts">
import { onMount, type Snippet } from 'svelte'
import ArrowLeft from 'virtual:icons/lucide/chevron-left'
import ArrowRight from 'virtual:icons/lucide/chevron-right'

import { testIds } from '@/constants'
import { Carousel } from '@/modules/carousel'

import IconButton from '../core/IconButton.svelte'

type Props = {
	perPage?: number
	easing?: string
	startIndex?: number
	draggable?: boolean
	multipleDrag?: boolean
	controls?: boolean
	threshold?: number
	rtl?: boolean
	maxHeight?: string
	controlsTop?: string
	children?: Snippet
	onChange?: (e: { currentSlide: number; slideCount: number }) => void
}

let {
	perPage = 1,
	easing = 'ease-out',
	startIndex = 0,
	draggable = true,
	multipleDrag = true,
	controls = true,
	threshold = 20,
	rtl = false,
	maxHeight = 'max-h-86',
	controlsTop = '9rem',
	children,
	onChange,
}: Props = $props()

let sel: HTMLElement
let controller: Carousel | undefined = $state()
let disableRightControl = $state(false)
let disableLeftControl = $state(true)

let pips = $derived(controller ? controller.innerElements : [])

onMount(() => {
	controller = new Carousel({
		selector: sel,
		perPage: typeof perPage === 'object' ? perPage : Number(perPage),
		easing,
		startIndex,
		draggable,
		multipleDrag,
		threshold,
		rtl,
		onChange: handleChange,
	})

	return () => {
		controller?.destroy()
	}
})

const left = () => {
	controller?.prev()
}

const right = () => {
	controller?.next()
}

const handleChange = () => {
	if (controller) {
		onChange && onChange({ currentSlide: controller.currentSlide, slideCount: controller.innerElements.length })
	}
	disableRightControl = controller ? controller.currentSlide === pips.length - perPage : false
	disableLeftControl = pips && controller ? controller.currentSlide === 0 : false
}
</script>

<div class="carousel">
	<div class={`slides ${maxHeight} `} bind:this={sel}>
		{@render children?.()}
	</div>
	{#if controls && pips.length > perPage}
		{#if !disableRightControl}
			<div class="button right" style={`top: ${controlsTop}`} data-testId={testIds.productCardArrowRight}>
				<IconButton icon={ArrowRight} iconDescription="right" variant={'primary'} onClick={right} size={'md'} />
			</div>
		{/if}
		{#if !disableLeftControl}
			<div class="button left" style={`top: ${controlsTop}`} data-testId={testIds.productCardArrowLeft}>
				<IconButton icon={ArrowLeft} iconDescription="left" variant={'primary'} onClick={left} size={'md'} />
			</div>
		{/if}
	{/if}
</div>

<style lang="postcss">
.carousel {
	width: 100%;
	justify-content: start;
	align-items: start;
}
.carousel:hover > .button {
	opacity: 1;
}

.button {
	position: absolute;
	opacity: 0;
	z-index: 50;
	border: none;
	background-color: transparent;
	transition: opacity 400ms;
}

.left {
	left: -1em;
}

.right {
	right: -1em;
}
</style>
