<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, class: klass = '', ...restProps }: HTMLButtonAttributes = $props();
</script>

<button class="w-fit cursor-pointer {klass}" {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>
