<script lang="ts">
	import type { WorkType } from '$src/lib/type';
	import ModalBase from './ModalBase.svelte';

	let {
		workData = null,
		onClose = () => null
	}: {
		workData: WorkType | null;
		onClose: () => void;
	} = $props();
</script>

<ModalBase {onClose}>
	<div class="flex w-full flex-col gap-4 rounded-2xl bg-neutral-800 p-4">
		<div class="flex flex-1 overflow-hidden rounded-xl">
			<iframe
				class="aspect-video h-auto w-full"
				src="https://www.youtube.com/embed/{workData?.youtubeVideoID}?autoplay=1"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
		<div class="flex flex-col gap-2">
			<p class="text-xl font-medium">{workData?.name}</p>
			<p class="text-sm text-neutral-300">{workData?.description}</p>
		</div>
	</div>
</ModalBase>
