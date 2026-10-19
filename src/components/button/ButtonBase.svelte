<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, class: klass = '', ...restProps }: HTMLButtonAttributes = $props();
</script>

<button
	class="w-fit cursor-pointer rounded-lg px-5 py-3 text-sm font-medium transition-all active:scale-95 {klass}"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</button>
