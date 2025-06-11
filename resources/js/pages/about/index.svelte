<script module>
    export { default as layout } from '@/components/layouts/guest-layout.svelte';
</script>

<script lang="ts">
    import Icon from '@iconify/svelte';
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
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">
                        not everything here is finished. not everything needs to be.
                    </p>
                </div>
                <div class="relative flex -rotate-6 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">It’s not a portfolio. It’s a playground.</p>
                </div>
                <div class="relative flex rotate-8 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">Digital brain dump > polished case studies.</p>
                </div>
                <div class="relative flex -rotate-10 items-center justify-center px-4 pt-10">
                    <img class="absolute inset-0" src="/assets/img/notes.png" alt="" />
                    <p class="font-handwriting relative -rotate-1 text-3xl text-zinc-800">Just a place to keep unfinished thoughts.</p>
                </div>
            </div>
        </div>
    </div>
</section>
