<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import ButtonBase from './ButtonBase.svelte';

	let { children, ...restProps }: HTMLButtonAttributes = $props();
</script>

<ButtonBase
	class="border border-white/20 bg-transparent px-4 py-2 text-sm text-white transition-all hover:scale-102"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</ButtonBase>
