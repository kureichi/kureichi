<script lang="ts">
	import { resolve } from '$app/paths';
	import type { WorkType } from '$src/lib/type';

	let { work }: { work: WorkType } = $props();
</script>

<a href={resolve(`work/${work.youtubeVideoID}`)}>
	<div
		class="relative flex aspect-video max-w-200 flex-col gap-4 overflow-hidden bg-white transition-all"
	>
		<div>
			<img
				class="w-full object-cover"
				src="https://img.youtube.com/vi/{work.youtubeVideoID}/maxresdefault.jpg"
				alt=""
			/>
		</div>
		<div class="absolute bottom-0 w-full bg-linear-to-t from-black/50 to-black/0 px-4 py-4">
			<div class="font-medium text-pretty">{work.name}</div>
		</div>
	</div>
</a>
