<script lang="ts">
import mail from 'virtual:icons/lucide/mail'

import IconChatbot from '@/components/icons/IconChatbot.svelte'
import { testIds } from '@/constants'
import { getAgentAvatarUrl } from '@/modules/agents'
import type { AvatarSize } from '@/types'

type Props = {
	avatar?: string | null
	size?: AvatarSize
	isEmailType?: boolean
	isBot?: boolean
}

let { avatar, size = 'md', isEmailType = false, isBot = false }: Props = $props()

let avatarUrl: string = $derived(getAgentAvatarUrl(avatar))
</script>

<div>
	{#if !avatar && isBot}
		<div
			class={[
				'flex-center bg-slate-300 text-white rounded-full',
				size === 'sm' && 'w-6 h-6 text-sm',
				size === 'md' && 'w-8 h-8 text-lg',
				size === 'lg' && 'w-11 h-11 text-2xl',
			]}
		>
			<IconChatbot />
		</div>
	{:else}
		<img
			src={avatarUrl}
			alt="Agent avatar"
			data-testid={testIds.avatarAgent}
			class={['rounded-full', size === 'sm' && 'w-6 h-6', size === 'md' && 'w-8 h-8', size === 'lg' && 'w-11 h-11']}
		/>
		{#if isEmailType}
			{@const SvelteComponent = mail}
			<div class="absolute top-3.7 left-3.7 inline-block p-0.8 rounded-full bg-slate-100 text-primary">
				<SvelteComponent class="w-2.5 h-2.5 text-primary" />
			</div>
		{/if}
	{/if}
</div>
