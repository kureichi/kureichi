<script lang="ts">
	import type { WorkType } from '$src/lib/type';

	let { work }: { work: WorkType } = $props();
</script>

<div class="flex w-fit flex-col gap-4 transition-all hover:scale-102">
	<div>
		<img
			class="w-full max-w-200"
			src="https://img.youtube.com/vi/{work.ytId}/maxresdefault.jpg"
			alt=""
		/>
	</div>
	<div class="flex flex-col gap-1">
		<div class="font-bold">{work.name}</div>
		<div class="text-sm opacity-80">{work.description}</div>
		<a href="https://www.youtube.com/watch?v={work.ytId}" class="w-fit text-sm">Youtube →</a>
	</div>
</div>
