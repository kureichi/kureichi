<script lang="ts">
	let { children } = $props();
</script>

<div class="container h-full max-w-7xl">
	{@render children()}
</div>
