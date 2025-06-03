<script lang="ts">
import FileIcon from 'virtual:icons/lucide/file'

import { testIds } from '@/constants'
import { prettyFileType } from '@/modules/fileUpload/utils'

type Props = {
	file: File
}

let { file }: Props = $props()
</script>

<div
	class="flex flex-col items-center justify-center w-[50px] h-[50px] bg-slate-300 rounded-xl"
	data-testid={testIds.textareaPreviewFile}
>
	<FileIcon class="text-sm text-slate-400" />
	<span class="text-xs text-slate-400">{prettyFileType(file.name)}</span>
</div>
