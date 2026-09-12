<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import ButtonBase from '../button/ButtonBase.svelte';
	import ContainerBody from '../container/ContainerBody.svelte';
	import ContainerRoot from '../container/ContainerRoot.svelte';
	import Logo from '../logo/Logo.svelte';
</script>

{#snippet NavbarButton(name: string, path: string)}
	<a href={path}
		><ButtonBase
			class="text-sm {page.url.pathname.includes(path)
				? 'font-bold text-white'
				: 'text-white/80'} transition-all hover:scale-102 hover:text-white"
		>
			{name}
		</ButtonBase></a
	>
{/snippet}

<div
	class="fixed top-0 z-100 flex h-15 max-h-15 w-full items-center border border-white/10 backdrop-blur-sm"
>
	<ContainerRoot>
			<ContainerBody>
				<div class="flex justify-between h-full items-center">
					<div class="flex">
						<a href={resolve('/')}>
							<ButtonBase>
								<Logo />
							</ButtonBase>
						</a>
					</div>
					<div class="flex justify-center gap-4 lg:gap-10">
						{@render NavbarButton('WORKS', resolve('/works'))}
						{@render NavbarButton('SERVICES', resolve('/services'))}
					</div>
				</div>
			</ContainerBody>
	</ContainerRoot>
</div>
