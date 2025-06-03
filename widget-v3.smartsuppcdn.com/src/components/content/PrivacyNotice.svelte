<script lang="ts">
import { DrawerId, openDrawer } from '@/modules/drawers'
import { widgetOptions } from '@/modules/options'
import { getHostWindow } from '@/utils/window'

type Props = {
	label: string
	isTicketForm?: boolean
}

let { label, isTicketForm }: Props = $props()

const handlePrivacyNoticeClick = () => {
	const { privacyNoticeUrl } = widgetOptions.getOptions()
	if (privacyNoticeUrl && !isTicketForm) {
		getHostWindow().open(privacyNoticeUrl, '_blank')
		return
	}

	openDrawer(DrawerId.GdprAndPrivacy, { useStack: true })
}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	role="link"
	tabindex="0"
	onclick={handlePrivacyNoticeClick}
	class="inline-flex text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer transition-colors"
>
	{label}
</div>
