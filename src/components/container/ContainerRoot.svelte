<script lang="ts">
	let { children } = $props();
</script>

<div class="flex h-full w-full justify-center">
	{@render children()}
</div>
