<script lang='ts'>
	import ContainerBody from "$components/container/ContainerBody.svelte";
	import ContainerRoot from "$components/container/ContainerRoot.svelte";
	import NavigationBarSpace from "$components/navbar/NavigationBarSpace.svelte";
	import PageHeader from "$components/page/PageHeader.svelte";

    import { page } from '$app/state';
	import ButtonPrimary from "$components/button/ButtonPrimary.svelte";
	import { resolve } from "$app/paths";
</script>

<NavigationBarSpace />

<ContainerRoot>
    <ContainerBody>
        <PageHeader title={`${page.status}`} description={page.error?.message} />
        <div class="w-full flex justify-center items-center flex-col gap-4">
            <p class="text-center">I'm sorry, it seems there was a problem loading this page for you. <br>Please refresh the page or return to the home page.</p>
            <a href={resolve("/")}><ButtonPrimary>Return to Home</ButtonPrimary></a>
        </div>
    </ContainerBody>
</ContainerRoot>
