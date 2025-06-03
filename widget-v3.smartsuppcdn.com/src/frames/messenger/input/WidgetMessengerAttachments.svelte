<script lang="ts">
import AddFileIcon from 'virtual:icons/lucide/file-plus-2'
import IconLoader from 'virtual:icons/lucide/loader-2'
import RemoveIcon from 'virtual:icons/lucide/x'

import FileThumb from '@/components/textarea/FileThumb.svelte'
import ImageThumb from '@/components/textarea/ImageThumb.svelte'
import Tooltip from '@/components/Tooltip.svelte'
import { files, MAX_UPLOAD_FILES_LIMIT } from '@/modules/fileUpload'
import { fileUploadInProgress } from '@/modules/fileUpload/store'
import { isFileImage } from '@/utils/file'

import FileUpload from './WidgetMessengerFileUpload.svelte'

let fileInputRef: HTMLInputElement
const openFileUploadDialog = () => {
	fileInputRef.click()
}
</script>

{#if $files.length > 0}
	<div class="flex flex-row gap-2 p-3 pb-0 select-none">
		{#if $files.length < MAX_UPLOAD_FILES_LIMIT}
			<div class="attachmentWrapper relative w-[50px] h-[50px]">
				<button
					class="flex flex-col items-center justify-center w-[50px] h-[50px] bg-slate-200 text-md text-slate-400 rounded-xl border-none"
					onclick={openFileUploadDialog}
				>
					<AddFileIcon />
				</button>
				<FileUpload bind:inputRef={fileInputRef} />
			</div>
		{/if}
		{#each $files as { file, uploadStatus }, index (`${index}-${file.name}`)}
			<div class="attachmentWrapper relative w-[50px] h-[50px]">
				<Tooltip content={file.name} placement="top" variant="dark">
					{#if isFileImage(file.type)}
						<ImageThumb {file} />
					{:else}
						<FileThumb {file} />
					{/if}
				</Tooltip>
				{#if !$fileUploadInProgress}
					<button
						class="removeIcon absolute -right-[4px] -top-[4px] rounded-full bg-slate-400 text-white border-none text-sm p-1"
						onclick={() => files.remove(file)}
					>
						<RemoveIcon />
					</button>
				{:else if uploadStatus === 'in-progress'}
					<div
						class="absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-lg bg-neutral-100/50 text-lg"
					>
						<IconLoader color="white" class="animate-spin" />
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style lang="postcss">
.removeIcon {
	opacity: 0;
	@apply transition-opacity duration-150;
}
.attachmentWrapper:hover .removeIcon {
	opacity: 1;
}
</style>
