<script lang="ts">
import { testIds } from '@/constants'
import type { FlashMessage } from '@/modules/flashMessages'
import { fly } from '@/utils/transitions'

import FlashMessageIcon from './FlashMessageIcon.svelte'

type Props = {
	data: FlashMessage
}

let { data }: Props = $props()
</script>

<div
	data-testid={testIds.flashMessage}
	transition:fly={{ y: '-100%' }}
	class="flex-center py-2 pl-2 pr-4 bg-black/80 text-white text-sm rounded-full shadow-sm first-of-type:mt-2 not-last-of-type:mb-1"
>
	<FlashMessageIcon type={data.type} />
	{#if data.recurrence > 1}({data.recurrence}){/if}
	{data.text}
</div>
