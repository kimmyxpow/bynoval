<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Popover } from 'bits-ui';
</script>

<div class="overflow-x-hidden bg-black">
    <header class="fixed left-1/2 z-10 mt-4 flex h-12 max-w-max -translate-x-1/2 items-center gap-1 rounded-xl bg-zinc-800 pr-1 pl-4">
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
        <div class="block">
            <div class="grid grid-cols-2 gap-10">
                <div class="flex flex-col items-start gap-4">
                    <span class="font-handwriting text-xl text-zinc-400">/* Notes, projects, and other unfinished thoughts */</span>
                    <h1 class="text-7xl">Hi, I'm Pow</h1>
                    <p class="text-xl">
                        This is where I figure things out in public. It’s a mix of work, thoughts, and whatever I’m currently obsessed with.
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
</div>
