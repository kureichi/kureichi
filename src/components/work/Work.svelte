<script lang="ts">
	import type { WorkType } from '$src/lib/type';

	let { work }: { work: WorkType } = $props();
</script>

<div class="flex w-fit flex-col gap-4 transition-all hover:scale-102">
	<div>
		<img
			class="aspect-video h-auto w-full max-w-200"
			src="https://img.youtube.com/vi/{work.youtubeVideoID}/maxresdefault.jpg"
			alt=""
		/>
	</div>
	<div class="flex flex-col gap-1">
		<div class="font-bold">{work.name}</div>
		<div class="text-sm opacity-80">{work.description}</div>
		<a href="https://www.youtube.com/watch?v={work.youtubeVideoID}" class="w-fit text-sm">Youtube →</a>
	</div>
</div>
