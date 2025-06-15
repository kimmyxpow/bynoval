<script module>
    export { default as layout } from '@/components/layouts/guest-layout.svelte';
</script>

<script lang="ts">
    import Icon from '@iconify/svelte';

    let { commits } = $props();
</script>

<main class="pt-26">
    <div class="inner">
        <div class="mx-auto max-w-2xl">
            <div class="flex flex-col items-center justify-center gap-6 text-center">
                <span class="font-handwriting text-2xl text-zinc-400">A little context, if you’re curious </span>
                <h1 class="text-5xl">Who I am, and why this site exists</h1>
            </div>
        </div>
    </div>
</main>
<section class="py-26">
    <div class="inner">
        <div class="grid grid-cols-2 gap-10">
            <div class="prose prose-invert prose-lg prose-zinc max-w-none">
                <h2>Short Bio</h2>
                <p>
                    I’m a fullstack developer, though most of my work leans toward the frontend — partly because I enjoy shaping how things look and
                    feel. Outside of building, I help run a programming community where I spend time connecting people and ideas.
                </p>
                <p>
                    I often find myself chasing new project ideas — not all of them make it to the finish line, but each one teaches me something. I
                    write to process my thoughts, read to feed them, and most days, I’m happiest in quiet spaces, working on something at my own pace.
                </p>
            </div>
            <div class="flex justify-center">
                <div class="relative max-w-xs">
                    <div class="absolute inset-0 -rotate-4 rounded-xl bg-cyan-500"></div>
                    <img
                        class="relative rotate-4 rounded-xl object-cover"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="inner">
        <div class="space-y-16">
            <h2 class="font-handwriting text-center text-3xl">This Site / Philosophy</h2>
            <div class="grid grid-cols-4 gap-6">
                <div class="relative flex rotate-6 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">i forget things, so i write them down here</p>
                </div>
                <div class="relative flex -rotate-6 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">not everything needs to be finished to be shared</p>
                </div>
                <div class="relative flex rotate-8 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">
                        don’t trust the timestamps — i write and forget to hit publish
                    </p>
                </div>
                <div class="relative flex -rotate-10 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">if you're reading this, you're already part of the story</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pt-48">
    <div class="inner">
        <div class="flex flex-col gap-12">
            <h2 class="text-3xl">Recently Touched</h2>
            <div class="relative grid">
                {#each commits as commit}
                    <div class="relative pl-10 not-last:pb-4">
                        <div class="absolute top-6 -bottom-2 left-2.5 w-1 bg-gradient-to-b from-zinc-800 to-cyan-500"></div>
                        <div class="absolute top-1 left-0 size-6 rounded-full bg-gradient-to-b from-cyan-500 to-zinc-800"></div>
                        <div class="mb-1 flex items-center justify-between">
                            <span class="text-sm font-bold text-zinc-400">sha: {commit.sha}</span>
                            <span class="text-sm text-zinc-200">Changed by: <span class="font-bold">{commit.commit.committer.name}</span></span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-xl text-transparent">
                                {commit.commit.message}
                            </span>
                            <a
                                href={commit.html_url}
                                target="_blank"
                                class="flex items-center gap-2 text-zinc-400 transition-all hover:text-zinc-200 hover:underline"
                            >
                                See Changes
                                <Icon icon="solar:arrow-right-up-linear" class="size-4" />
                            </a>
                        </div>
                    </div>
                {/each}
                <div class="pointer-events-none absolute -bottom-2 h-[80%] w-full bg-gradient-to-b from-transparent to-zinc-950"></div>
            </div>
            <a
                href="https://github.com/kimmyxpow/bynoval/commits/main"
                target="_blank"
                class="group/button inline-flex h-14 items-center justify-center gap-2 self-center rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
            >
                See All
                <div
                    class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
                >
                    <Icon icon="solar:arrow-right-up-linear" class="size-4" />
                </div>
            </a>
        </div>
    </div>
</section>
