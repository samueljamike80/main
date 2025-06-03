<script lang="ts">
import type { Component, Snippet } from 'svelte'
import type { HTMLButtonAttributes } from 'svelte/elements'

import { isMobileDevice, isTouchDevice } from '@/modules/device'
import type { Icon as IconType } from '@/types'

import Spinner from './Spinner.svelte'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonHTMLProps = Omit<HTMLButtonAttributes, 'size'>

type Props = {
	variant?: ButtonVariant
	size?: ButtonSize
	icon?: IconType
	iconDescription?: string
	disabled?: boolean
	isBlock?: boolean
	isLoading?: boolean
	testId?: string
	onClick?: () => void
	children?: Snippet
} & ButtonHTMLProps

let {
	variant = 'primary',
	size = 'md',
	icon,
	iconDescription,
	disabled,
	isBlock,
	isLoading,
	testId,
	onClick,
	children,
	...rest
}: Props = $props()

let iconComponent: IconType | Component | undefined = $derived(isLoading ? Spinner : icon)
let iconProps = $derived(isLoading ? { color: 'primaryContent' } : {})
let isDisabled = $derived(!!disabled || !!isLoading)
</script>

<button
	type="button"
	tabindex="0"
	{...rest}
	class={[
		`btn btn-${variant} btn-${size} text-base`,
		!$isMobileDevice && 'text-sm',
		isDisabled && 'btn-disabled',
		!!isBlock && 'w-full',
		isTouchDevice() ? 'cursor-auto' : 'cursor-pointer',
	]}
	disabled={isDisabled}
	data-testid={testId}
	onclick={onClick}
>
	{#if iconComponent}
		{@const SvelteComponent = iconComponent}
		<span class="mr-2"><SvelteComponent aria-hidden="true" aria-label={iconDescription} {...iconProps} /></span>
	{/if}
	{#if !isLoading}
		{@render children?.()}
	{/if}
</button>

<style lang="postcss">
.btn {
	@apply inline-flex items-center justify-center px-4 rounded-3xl transition-all;
}

.btn-primary {
	@apply bg-primary-button text-primary-button-content hover-bg-primary-button-hover;
}

.btn-outline {
	@apply bg-white border border-primary-button text-black hover-bg-primary-button hover-text-primary-button-content;
}

.btn-sm {
	@apply h-8;
}

.btn-md {
	@apply h-10;
}

.btn-lg {
	@apply h-12;
}

.btn-disabled {
	@apply opacity-20 cursor-not-allowed;
}
</style>
