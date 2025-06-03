<script lang="ts">
import type { SmartsuppWidgetOptions } from '@smartsupp/widget-loader-types'

import { isTouchDevice } from '@/modules/device'
import type { Icon } from '@/types'

type IconButtonVariant = 'primary' | 'ghost' | 'success'
type IconButtonSize = 'md' | 'lg' | 'xl'

type Props = {
	icon: Icon
	iconDescription: string
	iconOrientation?: SmartsuppWidgetOptions['orientation']
	iconAnimation?: 'none' | 'spin'
	onClick?: (e: MouseEvent) => void
	size?: IconButtonSize
	variant?: IconButtonVariant
	disabled?: boolean
	testId?: string
}

let {
	icon,
	iconDescription,
	iconOrientation = 'right',
	iconAnimation = 'none',
	size = 'md',
	variant = 'ghost',
	disabled,
	testId,
	onClick,
}: Props = $props()

const iconScaleX = iconOrientation === 'right' ? 1 : -1
let scale = $derived(size === 'xl' ? 1.5 : 1.2)
const SvelteComponent = $derived(icon)

const handleClick = (e: MouseEvent) => {
	e.stopPropagation()
	onClick && onClick(e)
}
</script>

<button
	type="button"
	tabindex="0"
	aria-label={iconDescription}
	class={[
		`btn btn-${variant} btn-${size}`,
		!!disabled && 'btn-disabled',
		isTouchDevice() ? 'cursor-auto' : 'cursor-pointer',
	]}
	{disabled}
	onclick={handleClick}
	data-testid={testId}
>
	<div class={['w-full h-full flex items-center justify-center', iconAnimation === 'spin' && 'animate-spin']}>
		<SvelteComponent width="1em" height="1em" style={`transform: scale(${scale}) scaleX(${iconScaleX});`} />
	</div>
</button>

<style lang="postcss">
.btn {
	@apply inline-flex items-center justify-center p-1 text-lg rounded-full transition-colors;
}

.btn-primary {
	@apply bg-primary-button text-primary-button-content hover-bg-primary-button-hover;
}

.btn-ghost {
	@apply hover-bg-black hover-bg-opacity-10;
}

.btn-success {
	@apply bg-emerald-500 text-white hover-bg-emerald-600;
}

.btn-md {
	@apply h-8 w-8;
}

.btn-lg {
	@apply h-10 w-10;
}

.btn-xl {
	@apply h-12 w-12;
}

.btn-disabled {
	@apply opacity-20 cursor-not-allowed;
}

.btn-disabled:hover {
	@apply hover-bg-transparent;
}
</style>
