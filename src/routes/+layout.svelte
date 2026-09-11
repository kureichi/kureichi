<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/manrope';

	import '../app.css';
	import NavigationBar from './components/navbar/NavigationBar.svelte';

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
