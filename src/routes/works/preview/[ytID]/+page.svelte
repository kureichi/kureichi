<script lang="ts">
	import { goto } from '$app/navigation';
	import VideoModal from '$components/modal/VideoModal.svelte';
	import WorksPage from '../../+page.svelte';
	let { data } = $props();
</script>

<WorksPage {data} />

<VideoModal workData={data.workData || null} onClose={() => goto('/works')} />
