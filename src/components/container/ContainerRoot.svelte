<script lang="ts">
	let { children } = $props();
</script>

<div class="flex w-full items-start justify-center px-5">
	{@render children()}
</div>
