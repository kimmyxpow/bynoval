<script lang="ts">
    import PaperTorn from '@/components/svg/paper-torn.svelte';
    import Icon from '@iconify/svelte';
    import { Popover } from 'bits-ui';
    import { HighlightAuto } from 'svelte-highlight';
    import githubDark from 'svelte-highlight/styles/github-dark';

    const code = 'const add = (a: number, b: number) => a + b;';
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<div class="overflow-x-hidden bg-black">
    <header
        class="fixed left-1/2 z-10 mt-4 flex h-12 max-w-max -translate-x-1/2 items-center gap-1 rounded-xl bg-zinc-800/80 pr-1 pl-4 backdrop-blur-sm"
    >
        <a href="/" class="text-zinc-300">Pow</a>
        <div class="ml-5 h-3/5 border-r border-zinc-700"></div>
        <nav class="flex">
            <a class="flex h-10 items-center rounded-lg px-4 text-zinc-300 transition-all hover:bg-zinc-900" href="/home">Home</a>
            <a class="flex h-10 items-center rounded-lg px-4 text-zinc-300 transition-all hover:bg-zinc-900" href="/home">Projects</a>
            <a class="flex h-10 items-center rounded-lg px-4 text-zinc-300 transition-all hover:bg-zinc-900" href="/home">Articles</a>
            <a class="flex h-10 items-center rounded-lg px-4 text-zinc-300 transition-all hover:bg-zinc-900" href="/home">Snippets</a>
        </nav>
        <Popover.Root>
            <Popover.Trigger>
                {#snippet child({ props })}
                    <button
                        {...props}
                        class="flex h-10 items-center gap-2 rounded-lg px-4 text-zinc-300 transition-all hover:bg-zinc-900 [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
                    >
                        Personal
                        <Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
                    </button>
                {/snippet}
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-30 w-full max-w-90 rounded-xl bg-zinc-900 p-2"
                    sideOffset={8}
                >
                    <div class="grid grid-cols-2 gap-2">
                        <a
                            href="/about"
                            class="flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-3 font-medium text-zinc-400 transition-all select-none hover:text-zinc-200 focus-visible:outline-none"
                        >
                            <img class="size-6" src="/assets/animated-icons/about.webp" alt="About Icon" />
                            About
                        </a>
                        <a
                            href="/about"
                            class="flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-3 font-medium text-zinc-400 transition-all select-none hover:text-zinc-200 focus-visible:outline-none"
                        >
                            <img class="size-6" src="/assets/animated-icons/goals.webp" alt="Goals Icon" />
                            Goals
                        </a>
                        <a
                            href="/about"
                            class="flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-3 font-medium text-zinc-400 transition-all select-none hover:text-zinc-200 focus-visible:outline-none"
                        >
                            <img class="size-6" src="/assets/animated-icons/interest.webp" alt="Interest Icon" />
                            Interest
                        </a>
                        <a
                            href="/about"
                            class="flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-3 font-medium text-zinc-400 transition-all select-none hover:text-zinc-200 focus-visible:outline-none"
                        >
                            <img class="size-6" src="/assets/animated-icons/gallery.webp" alt="Gallery Icon" />
                            Gallery
                        </a>
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
        <div class="h-3/5 border-r border-zinc-700"></div>
        <button class="grid size-10 place-items-center rounded-lg text-zinc-200 hover:bg-zinc-900" onclick={() => alert('not yet implemented :p')}>
            <Icon icon="solar:sun-linear" />
        </button>
    </header>
    <main class="relative flex min-h-screen items-center">
        <div class="inner">
            <div class="mx-auto max-w-2xl">
                <div class="flex flex-col items-center justify-center gap-6 text-center">
                    <span class="font-handwriting text-2xl text-zinc-400">Hello, you found me.</span>
                    <h1 class="text-7xl">
                        I'm <span class="text-cyan-500">Pow</span>. Welcome to my <span class="text-cyan-500">digital home</span>.
                    </h1>
                    <p class="text-xl">
                        This isn’t a portfolio. It’s not a blog. It’s a quiet little corner where I collect thoughts, tinker with ideas, and keep
                        pieces of who I am. There’s no grand theme — just life, as it unfolds.
                    </p>
                    <div class="flex items-center gap-8">
                        <button
                            class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
                        >
                            Get to know me
                            <div
                                class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
                            >
                                <Icon icon="solar:arrow-right-outline" class="size-4" />
                            </div>
                        </button>
                        <div class="relative">
                            <span
                                class="flex h-14 w-full items-center gap-4 bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-transparent"
                            >
                                <div class="relative grid place-items-center">
                                    <span class="absolute size-2 rounded-full bg-cyan-500"></span>
                                    <span class="textcyan500 absolute size-3 animate-ping rounded-full bg-cyan-500"></span>
                                </div>
                                Open for Opportunities
                            </span>
                            <a
                                href="/contact"
                                class="font-handwriting absolute right-0 bottom-0 translate-1/2 -rotate-4 animate-bounce text-xl text-zinc-400 hover:underline"
                            >
                                Click here to contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="relative flex items-center">
        <div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-black"></div>
        <div class="w-full border-b border-cyan-500"></div>
        <div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-black"></div>
    </div>
    <section class="py-28">
        <div class="inner flex flex-col items-center gap-12">
            <div class="w-full">
                <span class="font-handwriting text-xl text-zinc-400">Little Brain Dumps</span>
                <h2 class="mb-4 text-4xl">Things I’ve Written Down</h2>
                <p class="max-w-2xl text-lg">
                    Some of them started as questions. Others, just needed to be said out loud. I write when I can’t find the answer in silence — or
                    when I want to remember how it felt to be here, in this moment.
                </p>
            </div>
            <div class="grid gap-4">
                <div class="flex items-center gap-12 rounded-lg bg-zinc-900/70 p-6">
                    <div class="space-y-2">
                        <span class="font-handwriting text-2xl text-zinc-400 italic">Personal</span>
                        <h3 class="mt-2 text-2xl">How I Learned to Stop Worrying and Love React</h3>
                        <p class="line-clamp-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam cupiditate nostrum nesciunt fugiat consectetur ad
                            et dignissimos modi dolorem officiis natus, deserunt animi optio dolor illo odit pariatur corrupti.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2 text-sm text-zinc-500">
                                <span>1 min read</span>
                                <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                <span>28 Sep 2023</span>
                                <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                <span class="flex gap-2">
                                    <a href="/" class="transition-all hover:text-zinc-200">#React.js</a>
                                    <a href="/" class="transition-all hover:text-zinc-200">#Tailwind CSS</a>
                                </span>
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
                        <span class="font-handwriting text-2xl text-zinc-400 italic">Personal</span>
                        <h3 class="mt-2 text-2xl">How I Learned to Stop Worrying and Love React</h3>
                        <p class="line-clamp-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam cupiditate nostrum nesciunt fugiat consectetur ad
                            et dignissimos modi dolorem officiis natus, deserunt animi optio dolor illo odit pariatur corrupti.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2 text-sm text-zinc-500">
                                <span>1 min read</span>
                                <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                <span>28 Sep 2023</span>
                                <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                <span class="flex gap-2">
                                    <a href="/" class="transition-all hover:text-zinc-200">#React.js</a>
                                    <a href="/" class="transition-all hover:text-zinc-200">#Tailwind CSS</a>
                                </span>
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
                        <span class="font-handwriting text-2xl text-zinc-400 italic">Personal</span>
                        <h3 class="mt-2 text-2xl">How I Learned to Stop Worrying and Love React</h3>
                        <p class="line-clamp-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum numquam cupiditate nostrum nesciunt fugiat consectetur ad
                            et dignissimos modi dolorem officiis natus, deserunt animi optio dolor illo odit pariatur corrupti.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2 text-sm text-zinc-500">
                                <span>1 min read</span>
                                <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                <span>28 Sep 2023</span>
                                <span class="size-0.5 rounded-full bg-cyan-500"></span>
                                <span class="flex gap-2">
                                    <a href="/" class="transition-all hover:text-zinc-200">#React.js</a>
                                    <a href="/" class="transition-all hover:text-zinc-200">#Tailwind CSS</a>
                                </span>
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
            <a
                href="/articles"
                class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
            >
                See More Articles
                <div
                    class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
                >
                    <Icon icon="solar:arrow-right-outline" class="size-4" />
                </div>
            </a>
        </div>
    </section>
    <div class="relative flex items-center">
        <div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-black"></div>
        <div class="w-full border-b border-cyan-500"></div>
        <div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-black"></div>
    </div>
    <section class="py-28">
        <div class="inner flex flex-col items-center gap-12">
            <div class="w-full">
                <span class="font-handwriting text-xl text-zinc-400">Things I've Made (and Broke)</span>
                <h2 class="mb-4 text-4xl">Projects I’ve Been Building</h2>
                <p class="max-w-2xl text-lg">
                    This is where I get my hands dirty — building things, breaking stuff, learning as I go. Some are experiments, some are finished,
                    none are perfect.
                </p>
            </div>
            <div class="grid grid-cols-3 gap-8">
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
                        <p class="line-clamp-3">Palletepix is a color palette generator that lets you generate color palettes from an image.</p>
                        <hr class="my-4 block border-zinc-700" />
                        <div class="flex items-center justify-between">
                            <div class="flex gap-2">
                                <a href="/" target="_blank" class="text-zinc-400 hover:text-zinc-200" aria-label="GitHub">
                                    <Icon icon="hugeicons:github" class="size-5" />
                                </a>
                                <a href="/" target="_blank" class="text-zinc-400 hover:text-zinc-200" aria-label="Website">
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
                        <p class="line-clamp-3">Palletepix is a color palette generator that lets you generate color palettes from an image.</p>
                        <hr class="my-4 block border-zinc-700" />
                        <div class="flex items-center justify-between">
                            <div class="flex gap-2">
                                <a href="/" target="_blank" class="text-zinc-400 hover:text-zinc-200" aria-label="GitHub">
                                    <Icon icon="hugeicons:github" class="size-5" />
                                </a>
                                <a href="/" target="_blank" class="text-zinc-400 hover:text-zinc-200" aria-label="Website">
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
                        <p class="line-clamp-3">Palletepix is a color palette generator that lets you generate color palettes from an image.</p>
                        <hr class="my-4 block border-zinc-700" />
                        <div class="flex items-center justify-between">
                            <div class="flex gap-2">
                                <a href="/" target="_blank" class="text-zinc-400 hover:text-zinc-200" aria-label="GitHub">
                                    <Icon icon="hugeicons:github" class="size-5" />
                                </a>
                                <a href="/" target="_blank" class="text-zinc-400 hover:text-zinc-200" aria-label="Website">
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
            <a
                href="/projects"
                class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
            >
                See More Projects
                <div
                    class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
                >
                    <Icon icon="solar:arrow-right-outline" class="size-4" />
                </div>
            </a>
        </div>
    </section>
    <div class="relative flex items-center">
        <div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-black"></div>
        <div class="w-full border-b border-cyan-500"></div>
        <div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-black"></div>
    </div>
    <section class="py-28">
        <div class="inner flex flex-col items-center gap-20">
            <div class="w-full">
                <span class="font-handwriting text-xl text-zinc-400">Memory Hacks</span>
                <h2 class="mb-4 text-4xl">Tiny Code Things</h2>
                <p class="max-w-2xl text-lg">
                    I forget stuff. These snippets are like sticky notes for my future self — little reminders that saved me hours. You’re welcome to
                    borrow them, or improve them.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-8">
                <div class="group relative rounded-lg bg-zinc-900 transition-all hover:-rotate-2">
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
                <div class="group relative rounded-lg bg-zinc-900 transition-all hover:-rotate-2">
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
            <a
                href="/projects"
                class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
            >
                See More Snippets
                <div
                    class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
                >
                    <Icon icon="solar:arrow-right-outline" class="size-4" />
                </div>
            </a>
        </div>
    </section>
</div>
