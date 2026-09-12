<script lang="ts">
	let { children } = $props();
</script>

<div class="flex w-fit flex-col gap-3">{@render children()}</div>
