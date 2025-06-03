<script lang="ts">
import type { Attachment } from '@smartsupp/smartsupp-message'
import { AttachmentType } from '@smartsupp/smartsupp-message'

import Carousel from '@/components/carousel/Carousel.svelte'
import Card from '@/components/content/Card.svelte'
import MessageText from '@/components/content/MessageText.svelte'
import Linkifier from '@/components/Linkifier.svelte'
import { testIds } from '@/constants'
import { isTouchDevice } from '@/modules/device'
import { popupMessage } from '@/modules/messages'

const findCards = (attachments: Attachment[]): Attachment.Cards | null => {
	const cards = attachments.find((a) => a.type === AttachmentType.Cards) as Attachment.Cards
	if (!cards) return null
	return cards
}

let cards = $derived($popupMessage && findCards($popupMessage.attachments))
let singleCard: boolean = $derived(cards ? cards.items.length === 1 : false)
</script>

{#if $popupMessage?.content.text}
	<div class="text-sm leading-[22px] line-clamp-5 color-slate-800" data-testid={testIds.popupMessage}>
		<MessageText>
			<Linkifier text={$popupMessage.content.text} />
		</MessageText>
	</div>
{/if}
{#if cards}
	<!--Needs to be wrapped with `key` block to handle rendering of Carousel when the cards array changes-->
	{#key cards.items.length}
		<div class="w-full flex-center pt-2">
			<div class={['relative w-56', singleCard && 'w-full']}>
				<Carousel controlsTop="4rem" controls={!isTouchDevice()}>
					{#each cards.items as item}
						<Card card={item} isCompact fullWidth={singleCard} />
					{/each}
				</Carousel>
			</div>
		</div>
	{/key}
{/if}
