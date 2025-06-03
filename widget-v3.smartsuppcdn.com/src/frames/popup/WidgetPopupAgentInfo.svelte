<script lang="ts">
import IdentityAvatar from '@/components/avatars/IdentityAvatar.svelte'
import { getAgentById } from '@/modules/agents'
import { getIdentityById } from '@/modules/botIdentities'

type Props = {
	agentId: string | null
	identityId?: string
}

let { agentId, identityId }: Props = $props()

let agent = $derived(getAgentById(agentId ?? ''))
let identity = $derived(getIdentityById(identityId || ''))
</script>

{#if $agent || $identity}
	<div class="flex-center flex-shrink-0">
		<IdentityAvatar avatar={$identity?.avatarUrl || $agent?.avatar} isBot={!!identityId} />
	</div>
	<div class="ml-3 mr-10 font-bold truncate color-slate-800">{$identity?.name || $agent?.fullname}</div>
{/if}
