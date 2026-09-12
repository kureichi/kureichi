<script lang="ts">
	let { title = 'Sample Title', description = 'This is description that use in this page.' } =
		$props();
</script>

<div class="flex h-40 w-full flex-col items-center justify-center">
	<h1 class="text-5xl font-bold">
		{title}
	</h1>
	<p class="opacity-80">
		{description}
	</p>
</div>
