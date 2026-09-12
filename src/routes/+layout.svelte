<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/manrope';

	import '$src/app.css';

	import NavigationBar from '$components/navbar/NavigationBar.svelte';

	import { onNavigate } from '$app/navigation';
	import Footer from '$components/footer/Footer.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css" />
</svelte:head>

<!-- ini navbarnya -->
<NavigationBar />

<!-- ini contentnya -->
{@render children()}

<div class="w-full bg-black">
	<div id="separator" class="h-30 w-full"></div>

	<Footer />
	<div id="separator" class="h-20 w-full"></div>

	<div
		class="fixed bottom-0 left-0 flex h-20 w-full items-center justify-center text-xs font-bold opacity-30"
	>
		&copy; 2026 Kureichi
	</div>
</div>

<style>
	:global(html) {
		overflow-x: hidden;
	}
	:global(body) {
		color: #faf9f6;
		background-color: #1a1a1a;
		margin: 0;
		font-family: 'Satoshi-Variable';
	}
</style>
