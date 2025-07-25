<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import type { BeforeNavigate } from '@sveltejs/kit';
	import { useDebounce } from 'runed';
	import type { PageProps } from './$types';

	let { data } = $props();

	let selectedFilters = $state(data.filters);

	const filtersList = [
		{
			title: 'Just show me...',
			type: 'categories' as const,
			options: ['Website', 'Mobile']
		},
		{
			title: 'Tags included...',
			type: 'tags' as const,
			options: ['React.js + Vite', 'Next.js', 'Tailwind CSS', 'SvelteKit', 'Svelte', 'Laravel']
		}
	];

	const updateQuery = useDebounce(
		() => {
			const searchParams = new URLSearchParams();

			searchParams.set('search', selectedFilters.search || '');

			selectedFilters.categories.forEach((cat) => {
				searchParams.append('categories', cat);
			});

			selectedFilters.tags.forEach((tag) => {
				searchParams.append('tags', tag);
			});

			goto(`/projects?${searchParams.toString()}`, {
				keepFocus: true,
				noScroll: true,
				replaceState: true
			});
		},
		() => 300
	);

	beforeNavigate((event: BeforeNavigate) => {
		if (updateQuery.pending) {
			updateQuery.cancel();
			event.cancel();
		}
	});

	const onFilterChange = (event: Event, type: keyof typeof selectedFilters) => {
		const target = event.target as HTMLInputElement;

		const value = target.value;

		if (type === 'search') {
			// For search input
			selectedFilters.search = value;
		} else {
			// For categories and tags checkboxes
			selectedFilters[type] = target.checked
				? [...selectedFilters[type], value]
				: selectedFilters[type].filter((option) => option !== value);
		}

		updateQuery();
	};
</script>

<main class="pt-32">
	<div class="inner">
		<div class="mx-auto max-w-2xl">
			<div class="flex flex-col items-center justify-center gap-6 text-center">
				<span class="font-handwriting text-2xl text-zinc-400">Things I’ve built — or tried to.</span
				>
				<h1 class="text-5xl">Projects, experiments & digital leftovers</h1>
				<p class="text-lg">
					Not every idea becomes a masterpiece — but some are worth building anyway. Here’s a mix of
					things I’ve shipped, tweaked, or just needed to get out of my head.
				</p>
			</div>
		</div>
	</div>
</main>
<section class="py-26">
	<div class="inner">
		<div class="flex gap-6">
			<div class="flex-1 space-y-6">
				<div class="flex items-end gap-2">
					<div class="grid flex-1 gap-2">
						<label for="search" class="font-semibold text-zinc-300"
							>What are you curious about?</label
						>
						<input
							class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800"
							placeholder="Search projects... or just type something weird"
							type="text"
							value={selectedFilters.search}
							oninput={(e) => onFilterChange(e, 'search')}
							name="search"
							id="search"
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-8">
					<div class="group overflow-hidden rounded-lg bg-zinc-900/70">
						<div class="aspect-video overflow-hidden">
							<img
								class="size-full transition-all group-hover:scale-110 group-hover:rotate-4"
								src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
							/>
						</div>
						<div class="space-y-2 p-6">
							<span class="font-handwriting text-xl text-zinc-400 italic">Web Project</span>
							<h3 class="mt-2 text-2xl">Palletepix</h3>
							<div class="flex items-center gap-2 text-sm text-zinc-500">
								<span class="flex gap-2">
									<a href="/" class="transition-all hover:text-zinc-200">#React.js</a>
									<a href="/" class="transition-all hover:text-zinc-200">#Tailwind CSS</a>
								</span>
							</div>
							<p class="line-clamp-3">
								Palletepix is a color palette generator that lets you generate color palettes from
								an image.
							</p>
							<hr class="my-4 block border-zinc-700" />
							<div class="flex items-center justify-between">
								<div class="flex gap-2">
									<a
										href="/"
										target="_blank"
										class="text-zinc-400 hover:text-zinc-200"
										aria-label="GitHub"
									>
										<Icon icon="hugeicons:github" class="size-5" />
									</a>
									<a
										href="/"
										target="_blank"
										class="text-zinc-400 hover:text-zinc-200"
										aria-label="Website"
									>
										<Icon icon="solar:link-linear" class="size-5" />
									</a>
								</div>
								<a
									href="/articles/this-is-a-title"
									class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
								>
									Read Details <Icon icon="solar:arrow-right-linear" />
								</a>
							</div>
						</div>
					</div>
					<div class="group overflow-hidden rounded-lg bg-zinc-900/70">
						<div class="aspect-video overflow-hidden">
							<img
								class="size-full transition-all group-hover:scale-110 group-hover:rotate-4"
								src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
							/>
						</div>
						<div class="space-y-2 p-6">
							<span class="font-handwriting text-xl text-zinc-400 italic">Web Project</span>
							<h3 class="mt-2 text-2xl">Palletepix</h3>
							<div class="flex items-center gap-2 text-sm text-zinc-500">
								<span class="flex gap-2">
									<a href="/" class="transition-all hover:text-zinc-200">#React.js</a>
									<a href="/" class="transition-all hover:text-zinc-200">#Tailwind CSS</a>
								</span>
							</div>
							<p class="line-clamp-3">
								Palletepix is a color palette generator that lets you generate color palettes from
								an image.
							</p>
							<hr class="my-4 block border-zinc-700" />
							<div class="flex items-center justify-between">
								<div class="flex gap-2">
									<a
										href="/"
										target="_blank"
										class="text-zinc-400 hover:text-zinc-200"
										aria-label="GitHub"
									>
										<Icon icon="hugeicons:github" class="size-5" />
									</a>
									<a
										href="/"
										target="_blank"
										class="text-zinc-400 hover:text-zinc-200"
										aria-label="Website"
									>
										<Icon icon="solar:link-linear" class="size-5" />
									</a>
								</div>
								<a
									href="/articles/this-is-a-title"
									class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
								>
									Read Details <Icon icon="solar:arrow-right-linear" />
								</a>
							</div>
						</div>
					</div>
					<div class="group overflow-hidden rounded-lg bg-zinc-900/70">
						<div class="aspect-video overflow-hidden">
							<img
								class="size-full transition-all group-hover:scale-110 group-hover:rotate-4"
								src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
							/>
						</div>
						<div class="space-y-2 p-6">
							<span class="font-handwriting text-xl text-zinc-400 italic">Web Project</span>
							<h3 class="mt-2 text-2xl">Palletepix</h3>
							<div class="flex items-center gap-2 text-sm text-zinc-500">
								<span class="flex gap-2">
									<a href="/" class="transition-all hover:text-zinc-200">#React.js</a>
									<a href="/" class="transition-all hover:text-zinc-200">#Tailwind CSS</a>
								</span>
							</div>
							<p class="line-clamp-3">
								Palletepix is a color palette generator that lets you generate color palettes from
								an image.
							</p>
							<hr class="my-4 block border-zinc-700" />
							<div class="flex items-center justify-between">
								<div class="flex gap-2">
									<a
										href="/"
										target="_blank"
										class="text-zinc-400 hover:text-zinc-200"
										aria-label="GitHub"
									>
										<Icon icon="hugeicons:github" class="size-5" />
									</a>
									<a
										href="/"
										target="_blank"
										class="text-zinc-400 hover:text-zinc-200"
										aria-label="Website"
									>
										<Icon icon="solar:link-linear" class="size-5" />
									</a>
								</div>
								<a
									href="/articles/this-is-a-title"
									class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
								>
									Read Details <Icon icon="solar:arrow-right-linear" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full max-w-80">
				<div class="grid flex-1 gap-6">
					{#each filtersList as filter}
						<span class="font-semibold text-zinc-300">{filter.title}</span>
						<div class="grid grid-cols-2 gap-4">
							{#each filter.options as option}
								{@const isChecked = selectedFilters[filter.type].includes(option)}
								<div class="flex items-center gap-2">
									<input
										type="checkbox"
										onchange={(e) => onFilterChange(e, filter.type)}
										value={option}
										checked={isChecked}
										id="checkbox-{option}"
										class="peer hidden"
									/>
									<label
										for="checkbox-{option}"
										class="inline-flex size-6 items-center justify-center rounded-md border border-zinc-600 transition-all duration-150 ease-in-out peer-checked:border-zinc-400 peer-checked:bg-zinc-200 active:scale-[0.98]"
									>
										{#if isChecked}
											<Icon icon="lineicons:minus" class="text-background size-4" />
										{/if}
									</label>
									<label
										for="checkbox-{option}"
										class="font-medium text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										{option}
									</label>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
