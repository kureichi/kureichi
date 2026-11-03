<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import ButtonLink from '$components/button/ButtonLink.svelte';
	import ContainerBody from '../container/ContainerBody.svelte';
	import ContainerRoot from '../container/ContainerRoot.svelte';
	import Logo from '../logo/Logo.svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { browser } from '$app/env';

	let showBackground = $state(false);
	let anchorEl: HTMLDivElement | null = $state(null);
	let targetEl: HTMLElement | null = $state(null);

	$effect(() => {
		if (!browser || !anchorEl || !page.url.pathname) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting && entry.boundingClientRect.top <= 0) {
					showBackground = true;
					return;
				}
				showBackground = entry.isIntersecting;
			},
			{
				rootMargin: `-${anchorEl.offsetHeight}px 0px -100% 0px`,
				threshold: 0
			}
		);

		targetEl = document.getElementById('navbar-anchor');

		if (targetEl) {
			observer.observe(targetEl);
		} else {
			showBackground = true;
		}

		return () => observer.disconnect();
	});
</script>

{#snippet NavbarButton(name: string, path: string)}
	<!-- eslint-disable-next-line -->
	<a href={path}>
		<ButtonLink active={page.url.pathname.includes(path) || page.url.pathname == '/'}>
			{name}
		</ButtonLink>
	</a>
{/snippet}

<div class="fixed top-0 z-10 flex h-15 max-h-15 w-full items-center">
	{#if showBackground}
		<div
			class="absolute top-0 left-0 -z-11 h-full w-full bg-linear-to-b from-black to-black/0"
			transition:fade={{ easing: cubicOut }}
		></div>
	{/if}
	<ContainerRoot>
		<ContainerBody>
			<div class="flex h-full items-center justify-between">
				<div bind:this={anchorEl} class="flex">
					<a href={resolve('/')}>
						<ButtonLink>
							<Logo />
						</ButtonLink>
					</a>
				</div>
				<div class="flex justify-center gap-4 lg:gap-10">
					{@render NavbarButton('WORKS', resolve('works'))}
					{@render NavbarButton('SERVICES', resolve('services'))}
				</div>
			</div>
		</ContainerBody>
	</ContainerRoot>
</div>
