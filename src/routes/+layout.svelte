<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import "@fontsource-variable/manrope"

    import '../app.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
    :global(body) {
        color: #FAF9F6;
        background-color: #1A1A1A;
        margin: 0;
        font-family: "Manrope Variable";
    }
</style>
