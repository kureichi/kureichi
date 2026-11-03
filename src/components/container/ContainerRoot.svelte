<script lang="ts">
	let { children } = $props();
</script>

<div class="flex h-full w-full px-5 md:px-8">
	{@render children()}
</div>
