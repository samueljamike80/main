<script lang="ts">
import { fileUploadConfig } from '@/modules/fileUpload'
import { checkAndAddFiles } from '@/modules/fileUpload/store'
import { printWarning } from '@/utils/console'

type Props = {
	inputRef: HTMLInputElement
}

let { inputRef = $bindable() }: Props = $props()

const handleIncomingFiles = (e: Event) => {
	const target = e.target as HTMLInputElement
	if (!target || !target.files) {
		printWarning('No files to upload')
		return
	}

	checkAndAddFiles([...target.files])
	inputRef.value = ''
}

let accept = $derived($fileUploadConfig.acceptedFileExtensions.map((ext) => `.${ext}`).join(','))
</script>

<input class="hidden" type="file" multiple={true} {accept} onchange={handleIncomingFiles} bind:this={inputRef} />
