<script lang="ts">
	let { children } = $props();
</script>

<div class="flex h-full w-full items-start justify-center px-5">
	{@render children()}
</div>
