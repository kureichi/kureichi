<script lang="ts">
	import favicon from '#lib/assets/favicon.ico';

	import NavigationBar from '$components/navbar/NavigationBar.svelte';

	import Footer from '$components/footer/Footer.svelte';

	import '$src/app.css';
	import HashListener from '$components/hash/HashListener.svelte';
	import { goto, preloadData } from '$app/navigation';
	import { page } from '$app/state';
	import VideoModal from '$components/modal/VideoModal.svelte';
	import { type WorkType } from '$src/lib/type';
	let { children } = $props();

	let title = 'Kureichii Works';
	let description =
		'High energy motion graphics and music videos for VTubers and music creators. Turn your audio into striking visual experiences. Open for commissions!';
	let url = 'https://kureichi.pages.dev';
	let image = 'https://kureichi.pages.dev';

	let jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url: '${url}'
	};

	// eslint-disable-next-line
	let jsonLdTag = `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}<\/script>`;

	async function intercept(e: MouseEvent) {
		if (e.defaultPrevented || e.button !== 0) return;
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

		const target = e.target as Element | null;
		const a = target?.closest<HTMLAnchorElement>('a[data-modal]');
		if (!a) return;

		e.preventDefault();
		const href = a.href;
		const modalType = a.dataset.modalType;

		const result = await preloadData(href);
		if (modalType && result.type === 'loaded' && result.status === 200) {
			goto(href, {
				state: {
					modal: { type: modalType, href, data: result.data }
				},
				shallow: true
			});
		} else {
			goto(href);
		}
	}

	function close() {
		history.back();
	}
</script>

<svelte:head>
	<script
		src="
https://cdn.jsdelivr.net/npm/phosphor-icons@1.4.2/src/index.min.js
"
	></script>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/phosphor-icons@1.4.2/src/css/icons.min.css"
	/>

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

	<!-- eslint-disable-next-line -->
	{@html jsonLdTag}
	<link rel="stylesheet" href="/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css" />
</svelte:head>

<svelte:window onclickcapture={intercept} />

{#if page.state.modal}
	{#if page.state.modal.type == 'PREVIEW'}
		<VideoModal onClose={close} workData={page.state.modal.data.workData as WorkType} />
	{/if}
{/if}

<HashListener />

<NavigationBar />

{@render children()}

<div class="w-full bg-black">
	<div id="separator" class="h-30 w-full"></div>

	<Footer />
	<div id="separator" class="h-20 w-full"></div>

	<div
		class="fixed bottom-0 left-0 flex h-20 w-full items-center justify-center text-xs font-bold opacity-30"
	>
		© 2026 Kureichi
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
	}

	:global(#nprogress .bar) {
		background: white !important;
		height: 4px !important;
	}
</style>
