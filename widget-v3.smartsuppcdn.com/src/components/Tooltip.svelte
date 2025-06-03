<script lang="ts">
import type { Placement } from '@popperjs/core'
import { onDestroy, onMount, type Snippet } from 'svelte'
import { scale } from 'svelte/transition'
import { createPopperActions } from 'svelte-popperjs'

import { isTouchDevice } from '@/modules/device'
import { clickOutside } from '@/utils/clickOutside'
import { getHostWindow } from '@/utils/window'

type Props = {
	content: string
	children: Snippet
	variant?: 'dark' | 'light'
	placement?: Placement
	delay?: number
	isDisabledForTouchDevices?: boolean
}

let {
	content,
	variant = 'dark',
	placement = 'auto',
	delay = 500,
	isDisabledForTouchDevices = true,
	children,
}: Props = $props()

let ref = $state(null) as HTMLElement | null
let timeout: number | undefined
let isTooltipVisible = $state(false)

const [popperRef, popperContent] = createPopperActions({ placement })
const popperOptions = {
	modifiers: [
		{ name: 'offset', options: { offset: [0, 8] } },
		{ name: 'flip', options: { altBoundary: true } },
		{
			name: 'preventOverflow',
			options: {
				altAxis: true,
				padding: { right: 4, left: 4 },
			},
		},
	],
}

const handlePointerDown = () => {
	isTooltipVisible = !isTooltipVisible
}

const handleMouseEnter = () => {
	timeout = getHostWindow().setTimeout(() => {
		isTooltipVisible = true
	}, delay)
}

const handleMouseLeave = () => {
	if (timeout) {
		getHostWindow().clearTimeout(timeout)
		timeout = undefined
	}

	if (isTooltipVisible) {
		isTooltipVisible = false
	}
}

onMount(() => {
	if (isTouchDevice() && isDisabledForTouchDevices) return
	if (!ref) return

	if (isTouchDevice()) {
		ref.addEventListener('pointerdown', handlePointerDown)
	} else {
		ref.addEventListener('mouseenter', handleMouseEnter)
		ref.addEventListener('mouseleave', handleMouseLeave)
	}

	return () => {
		if (ref) {
			ref.removeEventListener('pointerdown', handlePointerDown)
			ref.removeEventListener('mouseenter', handleMouseEnter)
			ref.removeEventListener('mouseleave', handleMouseLeave)
		}
	}
})

onDestroy(() => {
	timeout && getHostWindow().clearTimeout(timeout)
})
</script>

<span bind:this={ref} use:popperRef>
	{@render children()}
</span>
{#if isTooltipVisible}
	<div id="tooltip" use:popperContent={popperOptions} role="tooltip" class="z-10">
		<div
			use:clickOutside={() => (isTooltipVisible = false)}
			transition:scale={{ duration: 250, start: 0.85 }}
			class={['text-white text-xs rounded-md whitespace-nowrap', `${variant}`]}
		>
			{content}
		</div>
	</div>
{/if}

<style lang="postcss">
.dark {
	@apply bg-gray-600/[.95] py-2 px-3;
}
.light {
	@apply bg-gray-400/[.95] py-1 px-2;
}
</style>
