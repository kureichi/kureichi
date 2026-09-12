<script lang="ts">
	import { goto } from '$app/navigation';
	import ButtonPrimary from '$components/button/ButtonPrimary.svelte';
	import ButtonSecondary from '$components/button/ButtonSecondary.svelte';
	import ContainerBody from '$components/container/ContainerBody.svelte';
	import ContainerRoot from '$components/container/ContainerRoot.svelte';
	import NavigationBarSpace from '$components/navbar/NavigationBarSpace.svelte';
	import PageHeader from '$components/page/PageHeader.svelte';
	import Work from '$components/work/Work.svelte';
	import type { WorkType } from '$src/lib/type.js';
	import { resolve } from '$app/paths';

	let works: WorkType[] = $derived.by(() => {
		if (!data.data) {
			return [];
		}

		let workList = [];
		for (let work of data.data?.workList) {
			if (work.category != data.category && data.category != 'All') {
				continue;
			}

			workList.push(work);
		}

		return workList;
	});

	let mdCols = $derived(Math.min(2, works.length));
	let lgCols = $derived(Math.min(3, works.length));

	let { data } = $props();
</script>

<NavigationBarSpace />

{#if !data.data}
	<PageHeader title="WORKS" description="I'm sorry, works is gone." />
{:else}
	<PageHeader title="WORKS" description="I'm ready to bring your stories and ideas to life." />

	<div class="flex w-full flex-col gap-8">
		<ContainerRoot>
			<ContainerBody>
				<div class="flex w-full flex-wrap justify-center gap-2">
					{#if data.category == 'All'}
						<ButtonPrimary>All</ButtonPrimary>
					{:else}
						<ButtonSecondary onclick={() => goto(resolve('/works?category=All'))}
							>All</ButtonSecondary
						>
					{/if}

					{#each data.data.categoryList as ownCategory}
						{#if data.category == ownCategory}
							<ButtonPrimary>{ownCategory}</ButtonPrimary>
						{:else}
							<ButtonSecondary onclick={() => goto(resolve(`/works?category=${ownCategory}`))}
								>{ownCategory}</ButtonSecondary
							>
						{/if}
					{/each}
				</div>
			</ContainerBody>
		</ContainerRoot>
		{#if works.length > 0}
			<div
				class="works-grid grid w-full grid-cols-1 justify-center gap-5 px-5 md:grid-cols-(--md-cols) lg:grid-cols-(--lg-cols)"
				style="--md-cols: repeat({mdCols}, minmax(0, 1fr)); --lg-cols: repeat({lgCols}, minmax(0, 1fr))"
			>
				{#each works as work}
					<div class="mx-auto">
						<Work {work} />
					</div>
				{/each}
			</div>
		{:else}
			<ContainerRoot>
				<ContainerBody>
					<div class="flex w-full justify-center">
						<p class="w-fit opacity-80">
							There are a lot of things that haven't been included here yet, so please stay tuned!<br
							/>- Kureichi
						</p>
					</div>
				</ContainerBody>
			</ContainerRoot>
		{/if}
	</div>
{/if}
