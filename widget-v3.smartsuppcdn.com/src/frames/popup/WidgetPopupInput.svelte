<script lang="ts">
import WidgetMessengerInput from '../messenger/input/WidgetMessengerInput.svelte'
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div onclick={(e) => e.stopPropagation()} onkeydown={() => {}} onkeyup={() => {}}>
	<WidgetMessengerInput />
</div>
