<script lang="ts">
	import { goto } from '$app/navigation';
	import VideoModal from '$components/modal/VideoModal.svelte';
	let { data } = $props();
</script>

<VideoModal workData={data.workData || null} onClose={() => goto('/works')} />
