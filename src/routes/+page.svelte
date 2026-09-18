<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	import ButtonPrimary from '$components/button/ButtonPrimary.svelte';
	import ContainerBody from '$components/container/ContainerBody.svelte';
	import ContainerRoot from '$components/container/ContainerRoot.svelte';
	import Work from '$components/work/Work.svelte';
	import { onMount } from 'svelte';
	import { getTitle } from '$src/lib/util';

	let heroVideoDiv: HTMLDivElement | null = $state(null);

	onMount(() => {
		let scrollY = 0;

		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;

			if (!heroVideoDiv) return;
			heroVideoDiv.style.transform = `translate3d(0, -${scrollY * 0.3}px, 0)`;
		});
	});

	let works3 = $derived.by(() => {
		if (!data.data) {
			return [];
		}

		let works = [];
		let count = 0;
		for (let work of data.data.workList) {
			if (count == 3) {
				break;
			}

			works.push(work);
			count++;
		}

		return works;
	});

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{getTitle()}</title>
</svelte:head>

<div class="relative h-screen">
	<div
		class="absolute bottom-0 left-0 -z-1 h-[30vh] w-full bg-linear-to-b from-black/0 to-black"
	></div>
	<div bind:this={heroVideoDiv} class="fixed top-0 left-0 -z-2 h-full w-full opacity-50">
		<video autoplay muted loop playsinline class="h-full w-full object-cover">
			<source src="video/miyamori_2.mp4" type="video/mp4" />
		</video>
	</div>
	<ContainerRoot>
		<ContainerBody>
			<div class="flex h-full flex-col justify-center gap-5">
				<div data-aos="fade-up">
					<h1 class="text-5xl font-light">Where rhythm</h1>
					<h1 class="text-5xl font-bold">meets movement.</h1>
				</div>
				<div data-aos="fade-up">Music Video, 2D Compositing, and Motion Graphics!</div>
				<a class="w-fit" href="https://vgen.co/kureichi">
					<ButtonPrimary>Commission ↗</ButtonPrimary>
				</a>
			</div>
		</ContainerBody>
	</ContainerRoot>
</div>

<div class="flex flex-col gap-30 bg-black" data-aos="fade-up">
	<ContainerRoot>
		<ContainerBody>
			<div class="flex flex-col items-center justify-center gap-4">
				<div class="text-xl font-light">
					LATEST<span class="font-bold">&nbsp;WORKS</span>
				</div>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					{#each works3 as work}
						<Work {work} />
					{/each}
				</div>

				<a href={resolve('/works')}><ButtonPrimary>See Others</ButtonPrimary></a>
			</div>
		</ContainerBody>
	</ContainerRoot>
</div>
