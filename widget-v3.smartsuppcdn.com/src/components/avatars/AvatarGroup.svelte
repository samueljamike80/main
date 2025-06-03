<script lang="ts">
import { fly } from 'svelte/transition'

import IdentityAvatar from '@/components/avatars/IdentityAvatar.svelte'
import { testIds } from '@/constants'
import { groupedAgents } from '@/modules/agents/groupedAgents'
import { messageWithBotIdentity } from '@/modules/botIdentities'
import { isTouchDevice } from '@/modules/device'
import type { AvatarSize } from '@/types'

type Props = {
	size?: AvatarSize
}

let { size = 'md' }: Props = $props()

const MAX_AVATARS = 3

const agents = $derived($groupedAgents.length > 0 ? $groupedAgents.slice(0, MAX_AVATARS) : [])
</script>

<div class="group flex-center flex-shrink-0" data-testid={testIds.avatarGroup}>
	{#if $messageWithBotIdentity}
		<div in:fly|global={{ duration: 300, x: -10 }} class={`avatar-group-item avatar-${size} transition-padding-400`}>
			<IdentityAvatar avatar={$messageWithBotIdentity.avatarUrl} {size} isBot />
		</div>
	{:else}
		{#each agents as { id, avatar }, i (id)}
			<div
				in:fly|global={{ duration: i * 300, x: -10 }}
				class={[
					'avatar-group-item',
					`avatar-${size}`,
					'transition-padding-400',
					!isTouchDevice() && 'group-hover:not-first:pl-4',
				]}
			>
				<IdentityAvatar {avatar} {size} />
			</div>
		{/each}
	{/if}
</div>

<style>
.avatar-group-item:nth-of-type(1) {
	z-index: 3;
}

.avatar-group-item:nth-of-type(2) {
	z-index: 2;
}

.avatar-group-item:nth-of-type(3) {
	z-index: 1;
}

.avatar-sm:not(:first-child) {
	margin-left: -12px;
}

.avatar-md:not(:first-child) {
	margin-left: -16px;
}

.avatar-lg:not(:first-child) {
	margin-left: -22px;
}
</style>
