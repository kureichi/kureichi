<script lang="ts">
	import { resolve } from '$app/paths';
	import ContainerBody from '$components/container/ContainerBody.svelte';
	import ContainerRoot from '$components/container/ContainerRoot.svelte';
	import FooterLinkContent from './FooterLinkContent.svelte';
	import FooterLinkHeader from './FooterLinkHeader.svelte';
	import FooterLinkWrapper from './FooterLinkWrapper.svelte';
</script>

{#snippet link(name: string, path: string)}
	<div class="transition-all hover:scale-102">
		<a href={path}>{name}</a>
	</div>
{/snippet}

<div class="w-full border-t border-white/10 py-20">
	<ContainerRoot>
		<ContainerBody>
			<div class="flex flex-col gap-4 md:flex-row md:justify-between">
				<div class="flex h-40 w-fit gap-4">
					<img src="/img/kureichi.png" class="object-cover" alt="" />
				</div>

				<div class="grid grid-cols-2 gap-20 md:grid-cols-4 md:gap-20">
					<FooterLinkWrapper>
						<FooterLinkHeader>SOCIALS</FooterLinkHeader>
						<FooterLinkContent>
							{@render link('Discord', 'https://discordapp.com/users/923560376803655750')}
							{@render link('Instagram', 'https://instagram.com/zeanlost')}
							{@render link('Youtube', 'https://youtube.com/@kureichi_ts')}
							{@render link('Twitter', 'https://x.com/kureichii')}
						</FooterLinkContent>
					</FooterLinkWrapper>

					<FooterLinkWrapper>
						<FooterLinkHeader>COMMISSION</FooterLinkHeader>
						<FooterLinkContent>
							{@render link('VGen', 'https://vgen.co/kureichi')}
							{@render link('AzhimaWorks', 'https://discord.gg/kFrnSxPJJY')}
						</FooterLinkContent>
					</FooterLinkWrapper>

					<FooterLinkWrapper>
						<FooterLinkHeader>PAGES</FooterLinkHeader>
						<FooterLinkContent>
							{@render link('Home', resolve('/'))}
							{@render link('Works', resolve('/works'))}
							{@render link('Services', resolve('/services'))}
						</FooterLinkContent>
					</FooterLinkWrapper>

					<FooterLinkWrapper>
						<FooterLinkHeader>SOURCE CODE</FooterLinkHeader>
						<FooterLinkContent>
							{@render link('Github', 'https://github.com/kureichi/kureichi.github.io')}
						</FooterLinkContent>
					</FooterLinkWrapper>
				</div>
			</div>
		</ContainerBody>
	</ContainerRoot>
</div>
