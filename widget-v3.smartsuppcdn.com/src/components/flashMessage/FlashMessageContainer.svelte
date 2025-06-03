<script lang="ts">
import { flashMessagesList } from '@/modules/flashMessages'

import FlashMessage from './FlashMessage.svelte'
</script>

<div class="absolute flex flex-col items-center w-full z-10 px-3">
	{#each $flashMessagesList as fm (fm.id)}
		<FlashMessage data={fm} />
	{/each}
</div>
