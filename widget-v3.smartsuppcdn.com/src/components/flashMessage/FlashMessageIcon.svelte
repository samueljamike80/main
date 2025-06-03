<script lang="ts">
import type { Component } from 'svelte'
import IconCheck from 'virtual:icons/lucide/check'
import IconClose from 'virtual:icons/lucide/x'

import IconExclamationMark from '@/components/icons/IconExclamationMark.svelte'
import IconInfo from '@/components/icons/IconInfo.svelte'
import type { FlashMessage } from '@/modules/flashMessages/types'

type Props = {
	type: FlashMessage['type']
}

let { type }: Props = $props()

const iconComponentMap: Record<FlashMessage['type'], Component> = {
	success: IconCheck as Component,
	error: IconClose as Component,
	warning: IconExclamationMark,
	info: IconInfo,
}

let iconComponent = $derived(iconComponentMap[type])

const SvelteComponent = $derived(iconComponent)
</script>

<div
	class={[
		'flex-center flex-none w-6 h-6 mr-2 rounded-full',
		type === 'success' && 'bg-green-500',
		type === 'error' && 'bg-red-500',
		type === 'warning' && 'bg-orange-500',
		type === 'info' && 'bg-slate-500',
	]}
>
	<SvelteComponent />
</div>
