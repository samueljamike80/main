import { MessageSubType } from '@smartsupp/smartsupp-message'
import { type BotIdentity, ChatStatus } from '@smartsupp/websocket-client-visitor'
import { derived, type Readable } from 'svelte/store'

import { lastItemOfArray } from '@/utils/arrays'

import { chatStatus } from '../chat'
import { sortedMessages } from '../messages'
import { botIdentities } from './store'

export const messageWithBotIdentity: Readable<BotIdentity | null> = derived(
	[sortedMessages, botIdentities, chatStatus],
	([$sortedMessages, $botIdentities, $chatStatus], set) => {
		const lastMessage = lastItemOfArray($sortedMessages)
		const identityId = lastMessage?.trigger?.identityId
		if ($chatStatus === ChatStatus.Served) {
			set(null)
		} else if (lastMessage?.subType === MessageSubType.Bot && identityId && $botIdentities[identityId]) {
			set($botIdentities[identityId])
		}
	},
)

export const getIdentityById = (botIdentity: string) =>
	derived([botIdentities], ([$botIdentities]): BotIdentity | null => {
		return $botIdentities[botIdentity] ?? null
	})
