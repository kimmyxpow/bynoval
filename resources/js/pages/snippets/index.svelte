<script module>
    export { default as layout } from '@/components/layouts/guest-layout.svelte';
</script>

<script lang="ts">
    import { useDebounce } from 'runed';
    import { router } from '@inertiajs/svelte';
    import PaperTorn from '@/components/svg/paper-torn.svelte';
    import { HighlightAuto } from 'svelte-highlight';
    import githubDark from 'svelte-highlight/styles/github-dark';

    type Props = {
        filters: {
            search: string;
        };
    };

    let { filters }: Props = $props();

    let selectedFilters = $state(filters);

    const updateQuery = useDebounce(
        () => {
            router.get(route('snippets.index'), selectedFilters as {}, {
                preserveState: true,
                only: ['filters'],
            });
        },
        () => 300,
    );

    const onFilterChange = (event: Event) => {
        const target = event.target as HTMLInputElement;

        const value = target.value;

        selectedFilters.search = value;

        updateQuery();
    };

    const code = 'const add = (a: number, b: number) => a + b;';
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<main class="pt-26">
    <div class="inner">
        <div class="mx-auto max-w-2xl">
            <div class="flex flex-col items-center justify-center gap-6 text-center">
                <span class="font-handwriting text-2xl text-zinc-400">Reusable little things</span>
                <h1 class="text-5xl">Code snippets I keep coming back to</h1>
                <p class="text-lg">
                    Small bits of code I’ve used, reused, and forgotten more times than I’d like to admit. Some are practical, some are oddly
                    specific, and all of them are here so I don’t lose them (again).
                </p>
            </div>
        </div>
    </div>
</main>
<section class="py-10">
    <div class="inner">
        <div class="flex-1 space-y-20">
            <div class="flex items-end gap-2">
                <div class="grid flex-1 gap-2">
                    <label for="search" class="font-semibold text-zinc-300">What are you curious about?</label>
                    <input
                        class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800"
                        placeholder="Type something like 'debounce' or 'dark mode toggle' or 'tailwind' or any other thing you can think of (or not)"
                        type="text"
                        value={selectedFilters.search}
                        oninput={onFilterChange}
                        name="search"
                        id="search"
                    />
                </div>
            </div>
            <div class="columns columns-2 gap-x-8">
                <div class="group relative mb-28 rounded-lg bg-zinc-900 transition-all hover:-rotate-2">
                    <PaperTorn class="absolute top-0 left-0 w-full -translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute top-2 left-0 w-full -translate-y-1/2 fill-zinc-900" />
                    <PaperTorn class="absolute bottom-0 left-0 w-full translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute bottom-2 left-0 w-full translate-y-1/2 fill-zinc-900" />
                    <div class="relative z-10 bg-zinc-900">
                        <div class="flex flex-col space-y-4 p-6">
                            <span class="font-handwriting text-4xl text-zinc-400">CN</span>
                            <p class="">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae illo laudantium tenetur expedita dolorum debitis quod
                                voluptates. Quae aut iste totam maxime, temporibus veniam, harum accusamus ad possimus cum neque, sint ullam obcaecati
                                fugit ipsum similique optio iusto pariatur tempore omnis nobis quisquam laboriosam vero sed. Suscipit quis ducimus
                                officia molestias porro quibusdam hic repudiandae laudantium atque dolores culpa sint aliquid odio ipsum quae,
                                architecto sed, explicabo asperiores. Non fuga nisi inventore vel unde sequi veniam nihil excepturi assumenda.
                                Corrupti necessitatibus, magnam soluta debitis fuga libero omnis quo saepe architecto dolore autem voluptatum, modi
                                quibusdam reprehenderit cum dicta facilis similique.
                            </p>
                            <HighlightAuto class="text-sm" {code} />
                        </div>
                    </div>
                </div>
                <div class="group relative mb-28 rounded-lg bg-zinc-900 transition-all hover:-rotate-2">
                    <PaperTorn class="absolute top-0 left-0 w-full -translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute top-2 left-0 w-full -translate-y-1/2 fill-zinc-900" />
                    <PaperTorn class="absolute bottom-0 left-0 w-full translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute bottom-2 left-0 w-full translate-y-1/2 fill-zinc-900" />
                    <div class="relative z-10 bg-zinc-900">
                        <div class="flex flex-col space-y-4 p-6">
                            <span class="font-handwriting text-4xl text-zinc-400">Web Project</span>
                            <p class="">Palletepix is a color palette generator that lets you generate color palettes from an image.</p>
                            <HighlightAuto class="text-sm" {code} />
                        </div>
                    </div>
                </div>
                <div class="group relative mb-28 rounded-lg bg-zinc-900 transition-all hover:-rotate-2">
                    <PaperTorn class="absolute top-0 left-0 w-full -translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute top-2 left-0 w-full -translate-y-1/2 fill-zinc-900" />
                    <PaperTorn class="absolute bottom-0 left-0 w-full translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute bottom-2 left-0 w-full translate-y-1/2 fill-zinc-900" />
                    <div class="relative z-10 bg-zinc-900">
                        <div class="flex flex-col space-y-4 p-6">
                            <span class="font-handwriting text-4xl text-zinc-400">Web Project</span>
                            <p class="">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit non earum, voluptates explicabo atque dignissimos
                                optio vitae eligendi ex. Tempora, blanditiis molestiae laborum fuga debitis corrupti inventore facere saepe a.
                            </p>
                            <HighlightAuto class="text-sm" {code} />
                        </div>
                    </div>
                </div>
                <div class="group relative mb-28 rounded-lg bg-zinc-900 transition-all hover:-rotate-2">
                    <PaperTorn class="absolute top-0 left-0 w-full -translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute top-2 left-0 w-full -translate-y-1/2 fill-zinc-900" />
                    <PaperTorn class="absolute bottom-0 left-0 w-full translate-y-1/2 fill-zinc-400" />
                    <PaperTorn class="absolute bottom-2 left-0 w-full translate-y-1/2 fill-zinc-900" />
                    <div class="relative z-10 bg-zinc-900">
                        <div class="flex flex-col space-y-4 p-6">
                            <span class="font-handwriting text-4xl text-zinc-400">Web Project</span>
                            <p class="">Palletepix is a color palette generator that lets you generate color palettes from an image.</p>
                            <HighlightAuto class="text-sm" {code} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
