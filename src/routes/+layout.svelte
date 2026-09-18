<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import '@fontsource-variable/manrope';

	import NavigationBar from '$components/navbar/NavigationBar.svelte';

	import Footer from '$components/footer/Footer.svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import nProgress from 'nprogress';

	NProgress.configure({ showSpinner: false });

	beforeNavigate(() => {
		NProgress.start();
	});
	afterNavigate(() => {
		nProgress.done();
	});

	import '$src/app.css';
	let { children } = $props();

	let title = 'Kureichii Works';
	let description =
		'High energy motion graphics and music videos for VTubers and music creators. Turn your audio into striking visual experiences. Open for commissions!';
	let url = 'https://kureichi.pages.dev';
	let image = 'https://kureichi.pages.dev';
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon} />

	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />

	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Kureichii" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{@html `
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "WebPage",
				"name": "${title.replace(/"/g, '\\"')}",
				"description": "${description.replace(/"/g, '\\"')}",
				"url": "${url}"
			}
		</script>
	`}
	<link rel="stylesheet" href="/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css" />
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

	:global(#nprogress .bar) {
		background: white !important;
		height: 4px !important;
	}
</style>
