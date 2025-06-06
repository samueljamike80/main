import { GroupType, type IMessage, type Message, MessageSubType } from '@smartsupp/smartsupp-message'
import { AccountStatus } from '@smartsupp/websocket-client-visitor'
import { get } from 'svelte/store'

import { initQueue } from '@/utils/initQueue'

import { eventEmitter } from '../events'
import {
	filterTriggers,
	lastOpenedConversationMessages,
	sortedMessages,
	type TriggerList,
	unreadMessages,
} from '../messages'
import {
	agentServedConversationGA,
	aiChatbotInteractionGA,
	aiChatbotVisitorReactionGA,
	autoMessageOpenedGA,
	autoMessageSentGA,
	autoMessageVisitorReactionGA,
	chatbotInteractionGA,
	chatbotOpenedGA,
	chatbotSentGA,
	chatbotVisitorReactionGA,
	contactAcquiredGA,
	feedbackSentGA,
	triggerMessageOpenedGA,
	triggerSentMessageGA,
	triggerVisitorReactionGA,
	visitorSentOfflineMessage,
	visitorStartedConversationGA,
} from './googleAnalyticsEvents'

let visitorResponded = false
let triggerList: TriggerList = {}

const resetGAFlags = () => {
	visitorResponded = false
}

const setTriggerList = () => {
	const storedMessages = get(sortedMessages)
	triggerList = filterTriggers(storedMessages)
}

const visitorSentFirstMessage = (messages: Message[], messageSubType: MessageSubType) => {
	if (visitorResponded) return false
	if (lastOpenedConversationMessages(messages).length === 1 && messageSubType === MessageSubType.Contact) {
		visitorResponded = true
		return true
	}
	return false
}

const visitorRespondedToTriggerMessage = (previousMessage: Message, receivedMessage: IMessage) => {
	const triggerId = previousMessage.trigger?.id || ''
	if (
		receivedMessage.subType === MessageSubType.Contact &&
		previousMessage.subType === MessageSubType.Trigger &&
		!triggerList[triggerId]?.visitorResponded
	) {
		triggerList[triggerId].visitorResponded = true
		return true
	}
	return false
}

const visitorRespondedToBotMessage = (previousMessage: Message, receivedMessage: IMessage) => {
	const triggerId = previousMessage.trigger?.id || ''
	if (
		receivedMessage.subType === MessageSubType.Contact &&
		// TODO need to add attr for simple recognition chatbot interaction message and use it here
		// eslint-disable-next-line
		// @ts-ignore
		!(receivedMessage.content.quickReplies || receivedMessage.content.quickReply) &&
		previousMessage.subType === MessageSubType.Bot &&
		!triggerList[triggerId]?.visitorResponded
	) {
		if (triggerId) {
			triggerList[triggerId].visitorResponded = true
			return true
		}
	}
	return false
}

const chatbotStartedReaction = (previousMessage: Message, receivedMessage: IMessage) => {
	const triggerId = previousMessage.trigger?.id || ''
	if (
		receivedMessage.subType === MessageSubType.Contact &&
		previousMessage.trigger?.groupType === GroupType.chatbot &&
		!triggerList[triggerId]?.reacted
	) {
		triggerList[triggerId].reacted = true
		return true
	}
	return false
}

const aiChatbotReaction = (receivedMessage: IMessage) => {
	const triggerId = receivedMessage.trigger?.id || ''
	if (receivedMessage.trigger?.groupType === GroupType.ai && !triggerList[triggerId]?.reacted) {
		triggerList[triggerId].reacted = true
		return true
	}
	return false
}

const getTriggerName = (messages: Message[], receivedMessage: IMessage, useReceivedMessage = false) => {
	if (messages.length > 0 && !useReceivedMessage) {
		const lastTriggerMessages = messages.slice(-2).filter((message) => message.trigger)
		return lastTriggerMessages ? lastTriggerMessages[lastTriggerMessages.length - 1].trigger?.name : ''
	} else {
		return receivedMessage.trigger ? receivedMessage.trigger.name : ''
	}
}

const onMessageReceived = (message: Message) => {
	const storedMessages = get(sortedMessages)
	botReceivedGALogger(storedMessages, message)
	triggerReceivedGaLogger(storedMessages, message)

	if (visitorSentFirstMessage(storedMessages, message.subType)) {
		visitorStartedConversationGA()
	}
}

const onContactAcquired = (acquiredBy: string): void => {
	let chatbotName: string = acquiredBy

	const storedMessages = get(sortedMessages)
	const triggerMessages = storedMessages.filter((message) => message.trigger)

	// acquiredBy property is used as a fallback in case the chatbot name is not available
	if (triggerMessages && triggerMessages.length > 0) {
		chatbotName = triggerMessages[triggerMessages.length - 1].trigger?.name ?? acquiredBy
	}

	contactAcquiredGA(chatbotName)
}

const botReceivedGALogger = (messages: Message[], receivedMessage: IMessage): void => {
	const triggerId = receivedMessage.trigger?.id || ''
	if (receivedMessage.subType === MessageSubType.Bot && !triggerList[triggerId]?.sent) {
		if (receivedMessage.trigger?.groupType === GroupType.chatbot) {
			chatbotSentGA(getTriggerName(messages, receivedMessage, true))
			triggerList[triggerId] = { sent: true }
		}
		if (receivedMessage.trigger?.groupType === GroupType.message) {
			autoMessageSentGA(getTriggerName(messages, receivedMessage, true))
			triggerList[triggerId] = { sent: true }
		}
		if (receivedMessage.trigger?.groupType === GroupType.ai) {
			triggerList[triggerId] = { sent: true }
		}
	}

	const previousMessage = messages.length > 1 ? messages[messages.length - 2] : undefined
	if (!previousMessage) return

	if (visitorRespondedToBotMessage(previousMessage, receivedMessage)) {
		if (previousMessage.trigger?.groupType === GroupType.chatbot) {
			chatbotVisitorReactionGA(getTriggerName(messages, receivedMessage))
		}
		if (previousMessage.trigger?.groupType === GroupType.message) {
			autoMessageVisitorReactionGA(getTriggerName(messages, receivedMessage))
		}
		if (previousMessage.trigger?.groupType === GroupType.ai) {
			aiChatbotVisitorReactionGA(getTriggerName(messages, receivedMessage))
		}
	} else if (chatbotStartedReaction(previousMessage, receivedMessage)) {
		chatbotInteractionGA(getTriggerName(messages, receivedMessage))
	} else if (aiChatbotReaction(receivedMessage)) {
		aiChatbotInteractionGA(getTriggerName(messages, receivedMessage))
	}
}

const triggerReceivedGaLogger = (messages: Message[], receivedMessage: IMessage): void => {
	if (receivedMessage.subType === MessageSubType.Trigger) {
		triggerSentMessageGA(receivedMessage?.trigger?.name)
		triggerList[receivedMessage.trigger?.id || ''] = { sent: true }
	}

	const previousMessage = messages.length > 1 ? messages[messages.length - 2] : undefined
	if (!previousMessage) return

	if (visitorRespondedToTriggerMessage(previousMessage, receivedMessage)) {
		triggerVisitorReactionGA(getTriggerName(messages, receivedMessage))
	}
}

export const messageOpenedGaLogger = (): void => {
	const lastUnreadTrigger = get(unreadMessages).filter((message: Message) => message.trigger)
	const lastTrigger = lastUnreadTrigger[lastUnreadTrigger.length - 1]
	if (lastTrigger && lastTrigger.trigger) {
		if (lastTrigger.subType === MessageSubType.Bot && lastTrigger.content.quickReplies) {
			chatbotOpenedGA(lastTrigger.trigger.name)
		} else if (lastTrigger.subType === MessageSubType.Bot) {
			autoMessageOpenedGA(lastTrigger.trigger.name)
		} else if (lastTrigger.subType === MessageSubType.Trigger) {
			triggerMessageOpenedGA(lastTrigger.trigger.name)
		}
	}
}

export const offlineMessageSentGaLogger = (status: AccountStatus): void => {
	if (status !== AccountStatus.Offline) return
	visitorSentOfflineMessage()
}

eventEmitter.on('messageReceived', onMessageReceived)

eventEmitter.on('agentJoined', (agent) => {
	agentServedConversationGA(agent.fullname)
})

eventEmitter.on('chatRated', (rating) => {
	feedbackSentGA(rating.value, rating.text)
})

eventEmitter.on('chatClosed', () => {
	resetGAFlags()
})

eventEmitter.on('chatVisitorClosed', () => {
	resetGAFlags()
})

eventEmitter.on('contactAcquired', ({ acquiredBy }) => {
	onContactAcquired(acquiredBy)
})

initQueue.push(setTriggerList)
