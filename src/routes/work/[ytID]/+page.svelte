<script lang="ts">
	import ContainerBody from '$components/container/ContainerBody.svelte';
	import ContainerRoot from '$components/container/ContainerRoot.svelte';
	import NavigationBarSpace from '$components/navbar/NavigationBarSpace.svelte';
	import PageHeader from '$components/page/PageHeader.svelte';

	let { data } = $props();
</script>

<NavigationBarSpace />

<ContainerRoot>
	<ContainerBody>
		<PageHeader title="PREVIEW" description="This is a preview of a video project I’ve created" />
		<div class="flex flex-col gap-8 pt-5">
			{#if data.workData}
				<iframe
					class="aspect-video h-auto w-full"
					src="https://www.youtube.com/embed/{data.workData.ytId}"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<div>
					<h1 class="text-lg font-bold">{data.workData.name}</h1>
					<p>{data.workData.description}</p>
				</div>
			{/if}
		</div>
	</ContainerBody>
</ContainerRoot>
