<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	import ButtonPrimary from '$components/button/ButtonPrimary.svelte';
	import ContainerBody from '$components/container/ContainerBody.svelte';
	import ContainerRoot from '$components/container/ContainerRoot.svelte';
	import Work from '$components/work/Work.svelte';
	import Logo from '$components/logo/Logo.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="relative">
	<div
		class="absolute bottom-0 left-0 -z-1 h-[30dvh] w-full bg-linear-to-b from-black/0 to-black"
	></div>
	<div class="absolute top-0 left-0 -z-2 h-full w-full opacity-50">
		<video autoplay muted loop playsinline class="h-full w-full object-cover">
			<source src="video/miyamori_2.mp4" type="video/mp4" />
		</video>
	</div>
	<ContainerRoot>
		<ContainerBody>
			<div class="flex h-dvh flex-col justify-center gap-5">
				<div>
					<h1 class="text-5xl font-light">Where rhythm</h1>
					<h1 class="text-5xl font-bold">meets movement.</h1>
				</div>
				<div>Music Video, 2D Compositing, and Motion Graphics!</div>
				<a class="w-fit" href="https://vgen.co/kureichi">
					<ButtonPrimary>Commission ↗</ButtonPrimary>
				</a>
			</div>
		</ContainerBody>
	</ContainerRoot>
</div>

<div class="flex flex-col gap-30">
	<ContainerRoot>
		<ContainerBody>
			<div class="flex flex-col items-center justify-center gap-4">
				<div class="text-xl font-light">
					LATEST<span class="font-bold">&nbsp;WORKS</span>
				</div>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					{#if data.data}
						{#each data.data.workList as work}
							<Work {work} />
						{/each}
					{/if}
				</div>

				<a href={resolve('/works')}><ButtonPrimary>See Others</ButtonPrimary></a>
			</div>
		</ContainerBody>
	</ContainerRoot>

	<div></div>

	<!-- <ContainerRoot> -->
	<!-- 	<ContainerBody> -->
	<!-- 		<div class="flex flex-col gap-4"> -->
	<!-- 			<div class="flex flex-col items-center justify-center gap-4"> -->
	<!-- 				<div class="text-xl font-light">ABOUT <span class="font-bold">ME</span></div> -->
	<!-- 			</div> -->
	<!-- 			<div class="flex w-full flex-col gap-10 md:flex-row"> -->
	<!-- 				<div class="flex gap-4 overflow-hidden rounded-full bg-white"> -->
	<!-- 					<div class=" invert"> -->
	<!-- 						<img class="w-80" src="/img/kureichi.png" alt="" /> -->
	<!-- 					</div> -->
	<!-- 				</div> -->
	<!-- 				<div class="flex flex-col gap-4"> -->
	<!-- 					<p class="text-5xl font-medium">KUREICHI</p> -->
	<!-- 				</div> -->
	<!-- 			</div> -->
	<!-- 		</div> -->
	<!-- 	</ContainerBody> -->
	<!-- </ContainerRoot> -->
</div>
