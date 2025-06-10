<script module>
    export { default as layout } from '@/components/layouts/guest-layout.svelte';
</script>

<script lang="ts">
    import Icon from '@iconify/svelte';
    import { useDebounce } from 'runed';
    import { router } from '@inertiajs/svelte';

    type Props = {
        filters: {
            search: string;
            categories: string[];
            tags: string[];
        };
    };

    let { filters }: Props = $props();

    let selectedFilters = $state(filters);

    const filtersList = [
        {
            title: 'Just show me...',
            type: 'categories' as const,
            options: ['Website', 'Mobile'],
        },
        {
            title: 'Tags included...',
            type: 'tags' as const,
            options: ['React.js + Vite', 'Next.js', 'Tailwind CSS', 'SvelteKit', 'Svelte', 'Laravel'],
        },
    ];

    const updateQuery = useDebounce(
        () => {
            router.get(route('articles.index'), selectedFilters as {}, {
                preserveState: true,
                only: ['filters'],
            });
        },
        () => 300,
    );

    const onFilterChange = (event: Event, type: keyof typeof selectedFilters) => {
        const target = event.target as HTMLInputElement;

        if (updateQuery.pending) {
            updateQuery.cancel();
            router.cancelAll();
        }

        const value = target.value;

        if (type === 'search') {
            // For search input
            selectedFilters.search = value;
        } else {
            // For categories and tags checkboxes
            selectedFilters[type] = target.checked ? [...selectedFilters[type], value] : selectedFilters[type].filter((option) => option !== value);
        }

        updateQuery();
    };
</script>

<main class="pt-26">
    <div class="inner">
        <div class="mx-auto max-w-2xl">
            <div class="flex flex-col items-center justify-center gap-6 text-center">
                <span class="font-handwriting text-2xl text-zinc-400">Things I needed to write down</span>
                <h1 class="text-5xl">Notes, rambles, and things I didn’t want to forget</h1>
                <p class="text-lg">
                    Some posts are half-formed thoughts. Some are just me thinking out loud. I write mostly to understand things better — if it helps
                    someone else, that’s a bonus.
                </p>
            </div>
        </div>
    </div>
</main>
<section class="py-10">
    <div class="inner">
        <div class="flex gap-6">
            <div class="flex-1 space-y-6">
                <div class="flex items-end gap-2">
                    <div class="grid flex-1 gap-2">
                        <label for="search" class="font-semibold text-zinc-300">What are you curious about?</label>
                        <input
                            class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800"
                            placeholder="Search articles title... or anything anyway"
                            type="text"
                            value={selectedFilters.search}
                            oninput={(e) => onFilterChange(e, 'search')}
                            name="search"
                            id="search"
                        />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div class="flex items-center gap-12 rounded-lg bg-zinc-900/70 p-6">
                        <div class="space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="font-handwriting text-2xl text-zinc-400 italic">Personal</span>
                                <span class="flex gap-2">
                                    <a href="/" class="text-sm text-zinc-500 transition-all hover:text-zinc-200">#React.js</a>
                                    <a href="/" class="text-sm text-zinc-500 transition-all hover:text-zinc-200">#Tailwind CSS</a>
                                </span>
                            </div>
                            <h3 class="mt-2 text-2xl">How I Learned to Stop Worrying and Love React</h3>
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam cupiditate nostrum nesciunt fugiat consectetur
                                ad et dignissimos modi dolorem officiis natus, deserunt animi optio dolor illo odit pariatur corrupti.
                            </p>
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-sm text-zinc-500">1 min read</span>
                                    <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                    <span class="text-sm text-zinc-500">28 Sep 2023</span>
                                </div>
                                <a
                                    href="/articles/this-is-a-title"
                                    class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
                                >
                                    Read more <Icon icon="solar:arrow-right-linear" />
                                </a>
                            </div>
                        </div>
                        <div class="aspect-[4/3] max-w-70 overflow-hidden rounded-md">
                            <img
                                class="size-full"
                                src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="flex items-center gap-12 rounded-lg bg-zinc-900/70 p-6">
                        <div class="space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="font-handwriting text-2xl text-zinc-400 italic">Personal</span>
                                <span class="flex gap-2">
                                    <a href="/" class="text-sm text-zinc-500 transition-all hover:text-zinc-200">#React.js</a>
                                    <a href="/" class="text-sm text-zinc-500 transition-all hover:text-zinc-200">#Tailwind CSS</a>
                                </span>
                            </div>
                            <h3 class="mt-2 text-2xl">How I Learned to Stop Worrying and Love React</h3>
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam cupiditate nostrum nesciunt fugiat consectetur
                                ad et dignissimos modi dolorem officiis natus, deserunt animi optio dolor illo odit pariatur corrupti.
                            </p>
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-sm text-zinc-500">1 min read</span>
                                    <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                    <span class="text-sm text-zinc-500">28 Sep 2023</span>
                                </div>
                                <a
                                    href="/articles/this-is-a-title"
                                    class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
                                >
                                    Read more <Icon icon="solar:arrow-right-linear" />
                                </a>
                            </div>
                        </div>
                        <div class="aspect-[4/3] max-w-70 overflow-hidden rounded-md">
                            <img
                                class="size-full"
                                src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="flex items-center gap-12 rounded-lg bg-zinc-900/70 p-6">
                        <div class="space-y-2">
                            <div class="flex items-center justify-between">
                                <span class="font-handwriting text-2xl text-zinc-400 italic">Personal</span>
                                <span class="flex gap-2">
                                    <a href="/" class="text-sm text-zinc-500 transition-all hover:text-zinc-200">#React.js</a>
                                    <a href="/" class="text-sm text-zinc-500 transition-all hover:text-zinc-200">#Tailwind CSS</a>
                                </span>
                            </div>
                            <h3 class="mt-2 text-2xl">How I Learned to Stop Worrying and Love React</h3>
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam cupiditate nostrum nesciunt fugiat consectetur
                                ad et dignissimos modi dolorem officiis natus, deserunt animi optio dolor illo odit pariatur corrupti.
                            </p>
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-sm text-zinc-500">1 min read</span>
                                    <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                    <span class="text-sm text-zinc-500">28 Sep 2023</span>
                                </div>
                                <a
                                    href="/articles/this-is-a-title"
                                    class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
                                >
                                    Read more <Icon icon="solar:arrow-right-linear" />
                                </a>
                            </div>
                        </div>
                        <div class="aspect-[4/3] max-w-70 overflow-hidden rounded-md">
                            <img
                                class="size-full"
                                src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
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
