<script lang="ts">
	import type { Snippet } from 'svelte';

	let dialogRef: HTMLDialogElement | undefined = $state();

	let {
		children,
		onClose = () => null
	}: {
		children: Snippet;
		onClose: () => void;
	} = $props();

	function closeModal() {
		if (!dialogRef) return;

		dialogRef.close();
		onClose();
	}
</script>

<dialog
	bind:this={dialogRef}
	onclose={closeModal}
	onclick={(e) => e.target == dialogRef && closeModal()}
	class="fixed top-0 left-0 z-100 flex h-full w-full items-center justify-center bg-black/80 text-white"
>
	<!-- <button onclick={onClose} class="absolute top-0 left-0 -z-1 h-full w-full bg-black/50"></button> -->
	<div class="w-full max-w-200">
		{@render children()}
	</div>
</dialog>
