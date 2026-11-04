<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteURLSearchParams } from 'svelte/reactivity';

	interface HashProps {
		v: string | null;
	}

	let hashObject: HashProps = $state({
		v: null
	});

	function updateHashValue() {
		const hashString = window.location.hash.slice(1);
		const params = new URLSearchParams(hashString);
		hashObject.v = params.get('v') || null;
	}

	onMount(() => {
		updateHashValue();
		window.addEventListener('hashchange', updateHashValue);
		return () => {
			window.removeEventListener('hashchange', updateHashValue);
		};
	});

	function removeVideoParam(param: string) {
		const hashString = window.location.hash.slice(1);

		const params = new SvelteURLSearchParams(hashString);

		params.delete(param);

		const newHashString = params.toString();

		const newHash = newHashString ? `#${newHashString}` : '';

		const newUrl = window.location.pathname + window.location.search + newHash;
		window.history.replaceState({}, '', newUrl);

		window.dispatchEvent(new HashChangeEvent('hashchange'));
	}

	$effect(() => {
		console.log(hashObject.v);
	});
</script>
