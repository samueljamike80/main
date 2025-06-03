import type { BotIdentity } from '@smartsupp/websocket-client-visitor'
import { writable } from 'svelte/store'

import type { Dictionary } from '@/types'
import { normalize } from '@/utils/normalize'

const createIdentitiesStore = () => {
	const identities = writable<Dictionary<BotIdentity>>({})
	const { update, subscribe, set } = identities

	const setIdentities = (agents: BotIdentity[]) => {
		set(normalize('id', agents))
	}

	const addIdentity = (agent: BotIdentity) => {
		update((state) => ({ ...state, [agent.id]: agent }))
	}

	const updateIdentity = (id: BotIdentity['id'], changes: Partial<Omit<BotIdentity, 'id'>>) => {
		update((state) => {
			if (!state[id]) return state
			return { ...state, [id]: { ...state[id], ...changes } }
		})
	}

	return {
		subscribe,
		setIdentities,
		addIdentity,
		updateIdentity,
	}
}

export const botIdentities = createIdentitiesStore()
