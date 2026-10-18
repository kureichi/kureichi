<script lang="ts">
	import ContainerBody from '$components/container/ContainerBody.svelte';
	import ContainerRoot from '$components/container/ContainerRoot.svelte';

	let { title = 'Sample Title', description = 'This is description that use in this page.' } =
		$props();
</script>

<ContainerRoot>
	<ContainerBody>
		<div class="mt-20 flex w-full flex-col items-center justify-center">
			<p class="text-neutral-400">{title}</p>
			<h1 class="max-w-5xl text-center text-5xl font-medium tracking-tight text-balance">
				{description}
			</h1>
		</div>
	</ContainerBody>
</ContainerRoot>
