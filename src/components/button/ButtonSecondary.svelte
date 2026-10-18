<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import ButtonBase from './ButtonBase.svelte';

	let { children, ...restProps }: HTMLButtonAttributes = $props();
</script>

<ButtonBase
	class="border border-white/20 bg-transparent text-sm text-white transition-all hover:bg-neutral-800"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</ButtonBase>
