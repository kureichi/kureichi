<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import ButtonBase from './ButtonBase.svelte';

	let { children, ...restProps }: HTMLButtonAttributes = $props();
</script>

<ButtonBase
	class="bg-white px-4 py-2 text-sm font-bold text-black transition-all hover:scale-102 hover:bg-white/80"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</ButtonBase>
