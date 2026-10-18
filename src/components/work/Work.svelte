<script lang="ts">
	import { resolve } from '$app/paths';
	import type { WorkType } from '$src/lib/type';

	let isHover = $state(false);

	let { work }: { work: WorkType } = $props();
</script>

<a
	href={resolve('/work/[ytID]', { ytID: work.youtubeVideoID })}
	class="flex flex-col gap-2 text-left transition-all"
	onmouseenter={() => (isHover = true)}
	onmouseleave={() => (isHover = false)}
>
	<div class="aspect-video w-full max-w-200 overflow-hidden">
		<img
			class="w-full object-cover transition-transform {isHover ? 'scale-105' : ''}"
			src="https://img.youtube.com/vi/{work.youtubeVideoID}/maxresdefault.jpg"
			alt=""
		/>
	</div>
	<div class="flex flex-col gap-1">
		<div class="font-bold">{work.name}</div>
		<div class="text-sm opacity-80">{work.description}</div>
		<!-- <a href="https://www.youtube.com/watch?v={work.youtubeVideoID}" class="w-fit text-sm"
			>Youtube →</a
		> -->
	</div>
</a>
