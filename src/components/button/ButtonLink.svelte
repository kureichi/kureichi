<script lang="ts">
	import type { Snippet } from 'svelte';
	import ButtonBase from './ButtonBase.svelte';

	let { children, active = true }: { children: Snippet; active?: boolean } = $props();
</script>

<ButtonBase class="px-0! py-0! hover:text-white {active ? 'text-white' : 'text-neutral-400'}">
	{@render children()}
</ButtonBase>
