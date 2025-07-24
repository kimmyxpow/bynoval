<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="relative py-26">
	<div class="absolute inset-x-0 top-0 flex items-center">
		<div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-zinc-950"></div>
		<div class="w-full border-b border-cyan-500"></div>
		<div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-zinc-950"></div>
	</div>
	<div class="inner">
		<div class="grid grid-cols-6 gap-8">
			<div class="col-span-3 flex flex-col gap-4">
				<span class="text-xl text-zinc-200">Abi Noval Fauzi</span>
				<p>Thanks for scrolling this far. You’re rare.</p>
				<div class="flex gap-2">
					<a class="text-zinc-300 hover:text-zinc-400" href="asd" aria-label="E-Mail">
						<Icon class="size-6" icon="iconoir:at-sign" />
					</a>
					<a class="text-zinc-300 hover:text-zinc-400" href="asd" aria-label="Instagram">
						<Icon class="size-6" icon="iconoir:instagram" />
					</a>
					<a class="text-zinc-300 hover:text-zinc-400" href="asd" aria-label="Github">
						<Icon class="size-6" icon="iconoir:github" />
					</a>
					<a class="text-zinc-300 hover:text-zinc-400" href="asd" aria-label="X/Twitter">
						<Icon class="size-6" icon="iconoir:x" />
					</a>
					<a class="text-zinc-300 hover:text-zinc-400" href="asd" aria-label="LinkedIn">
						<Icon class="size-6" icon="iconoir:linkedin" />
					</a>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<span class="text-zinc-300">Explore</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Home</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Projects</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Articles</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Snippets</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Guestbook</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="text-zinc-300">Personal</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">About</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Goals</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Contact Me</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Community</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="text-zinc-300">Meta</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Attribution</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Sitemap</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="asd">Visits</a>
				</nav>
			</div>
		</div>
		<p class="mx-auto mt-12 max-w-max rounded-full bg-zinc-900 px-6 py-2 text-sm">
			© 2025 Abi Noval Fauzi. All rights reserved.
		</p>
	</div>
</footer>
