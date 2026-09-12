<script lang="ts">
	import type { Work } from '$src/lib/type';

	let { work }: { work: Work } = $props();
</script>

<div class="flex flex-col gap-4 transition-all hover:scale-102">
	<div>
		<img class="max-w-full" src="https://img.youtube.com/vi/{work.ytId}/maxresdefault.jpg" alt="" />
	</div>
	<div class="flex flex-col gap-1">
		<div class="font-bold">{work.name}</div>
		<div class="text-sm font-light">{work.description}</div>
		<a href="https://www.youtube.com/watch?v={work.ytId}" class="w-fit text-sm font-light"
			>Youtube →</a
		>
	</div>
</div>
