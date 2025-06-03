<script lang="ts">
import FileThumb from '@/components/textarea/FileThumb.svelte'
import { testIds } from '@/constants'
import { files } from '@/modules/fileUpload'
import type { StoreFile } from '@/modules/fileUpload/types'

type Props = {
	file: File
}

let { file }: Props = $props()

let storeFile: StoreFile | undefined = $state()

$effect(() => {
	const fileToAdd = files.find(file.name)
	if (fileToAdd) {
		storeFile = fileToAdd
	}
})
</script>

{#if storeFile && storeFile.previewState === 'ready'}
	{#if storeFile?.preview?.data}
		<div class="w-full h-full rounded-xl overflow-hidden content-center" data-testid={testIds.textareaPreviewImage}>
			<img src={storeFile.preview.data} alt={file.name} class="m-auto" />
		</div>
	{:else}
		<FileThumb {file} />
	{/if}
{/if}
