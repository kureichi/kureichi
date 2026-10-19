<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import ButtonLink from '$components/button/ButtonLink.svelte';
	import ContainerBody from '../container/ContainerBody.svelte';
	import ContainerRoot from '../container/ContainerRoot.svelte';
	import Logo from '../logo/Logo.svelte';
</script>

{#snippet NavbarButton(name: string, path: string)}
	<!-- eslint-disable-next-line -->
	<a href={path}>
		<ButtonLink active={page.url.pathname.includes(path) || page.url.pathname == '/'}>
			{name}
		</ButtonLink>
	</a>
{/snippet}

<div
	class="fixed top-0 z-10 flex h-15 max-h-15 w-full items-center border border-white/10 backdrop-blur-sm"
>
	<ContainerRoot>
		<ContainerBody>
			<div class="flex h-full items-center justify-between">
				<div class="flex">
					<a href={resolve('/')}>
						<ButtonLink>
							<Logo />
						</ButtonLink>
					</a>
				</div>
				<div class="flex justify-center gap-4 lg:gap-10">
					{@render NavbarButton('WORKS', resolve('works'))}
					{@render NavbarButton('SERVICES', resolve('services'))}
				</div>
			</div>
		</ContainerBody>
	</ContainerRoot>
</div>
