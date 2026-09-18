<script>
	import NavigationBarSpace from '$components/navbar/NavigationBarSpace.svelte';
	import PageHeader from '$components/page/PageHeader.svelte';
	import { getTitle } from '$src/lib/util';
</script>

<svelte:head>
	<title>{getTitle('Services')}</title>
</svelte:head>

<NavigationBarSpace />

<PageHeader
	title="SERVICES"
	description="Here are the services I offer below that might suit your needs"
/>
