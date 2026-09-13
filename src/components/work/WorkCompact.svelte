<script lang="ts">
	import { resolve } from '$app/paths';
	import type { WorkType } from '$src/lib/type';

	let { work }: { work: WorkType } = $props();
</script>

<a href={resolve(`/work/${work.ytId}`)}>
	<div class="relative flex w-fit flex-col gap-4 transition-all hover:scale-102">
		<div>
			<img
				class="w-full max-w-200"
				src="https://img.youtube.com/vi/{work.ytId}/maxresdefault.jpg"
				alt=""
			/>
		</div>
		<div class="absolute bottom-0 w-full bg-linear-to-t from-black to-black/0 px-6 py-4">
			<div class="font-bold">{work.name}</div>
		</div>
	</div>
</a>
