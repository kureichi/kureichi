<script lang="ts">
	import ContainerBody from './components/container/ContainerBody.svelte';
	import ContainerRoot from './components/container/ContainerRoot.svelte';
</script>

<div class="flex flex-col gap-10">
	<div class="relative">
		<div class="absolute top-0 left-0 -z-1 h-full w-full opacity-50">
			<video autoplay muted loop playsinline class="h-full w-full object-cover">
				<source src="video/miyamori_2.mp4" type="video/mp4" />
			</video>
		</div>
		<ContainerRoot>
			<ContainerBody>
				<div class="flex h-150 flex-col justify-center gap-5">
					<div>
						<h1 class="text-5xl font-light">Where rhythm</h1>
						<h1 class="text-5xl font-bold">meets movement.</h1>
					</div>
					<div>Music Video, 2D Compositing, and Motion Graphics!</div>
				</div>
			</ContainerBody>
		</ContainerRoot>
	</div>

	<div class="flex justify-center text-xl font-light">
		LATEST<span class="font-bold">&nbsp;WORKS</span>
	</div>
</div>
<!-- <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
