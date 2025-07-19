<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ScrollArea } from 'bits-ui';

	type Props = {};

	let {}: Props = $props();
</script>

<main class="pt-26">
	<div class="inner">
		<div class="grid grid-cols-2 items-start gap-10">
			<div class="flex flex-col gap-6">
				<span class="font-handwriting text-2xl text-zinc-400">Just say hi, if you feel like it</span
				>
				<h1 class="text-5xl">Leave a little note before you go</h1>
				<p class="text-lg">
					Just a space for kind strangers, old friends, or curious wanderers to say hello. Drop a
					message, a thought, or your favorite emoji 🪴
				</p>
				<div class="rounded-xl border border-zinc-800 p-8">
					<div class="rounded-xl border border-zinc-800 p-8">
						<div class="rounded-xl border border-zinc-800 p-8">
							<div class="rounded-xl border border-zinc-800 p-8">
								<div class="rounded-xl border border-zinc-800 p-8">
									<div class="rounded-xl border border-zinc-800 p-6">
										<span class="text-center text-sm text-zinc-600">
											White (or black) space — I still don't know what belongs here
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rounded-xl bg-zinc-900/70 p-2">
				<ScrollArea.Root class="p-4">
					<ScrollArea.Viewport class="max-h-[calc(100vh-20rem)] overflow-y-auto">
						<div class="space-y-6">
							<div class="flex gap-4">
								<div class="flex flex-col gap-4 rounded-xl bg-zinc-900/70 p-6">
									<div class="flex items-center gap-2">
										<span class="text-sm text-zinc-500">23 May 2024</span>
										<span class="size-0.5 rounded-full bg-cyan-500"></span>
										<span class="text-sm text-zinc-500">Pow</span>
									</div>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam iure
										quasi velit ducimus quaerat voluptatum hic cupiditate obcaecati natus est fuga,
										voluptas corporis veniam, rerum nostrum animi facere soluta.
									</p>
								</div>
								<div class="size-12 shrink-0">
									<img
										class="size-full rounded-xl object-cover"
										src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt=""
									/>
								</div>
							</div>
							<div class="flex flex-row-reverse gap-4">
								<div class="flex flex-col gap-4 rounded-xl bg-zinc-900/70 p-6">
									<div class="flex items-center gap-2">
										<span class="text-sm text-zinc-500">23 May 2024</span>
										<span class="size-0.5 rounded-full bg-cyan-500"></span>
										<span class="text-sm text-zinc-500">Pow</span>
									</div>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam iure
										quasi velit ducimus quaerat voluptatum hic cupiditate obcaecati natus est fuga,
										voluptas corporis veniam, rerum nostrum animi facere soluta.
									</p>
								</div>
								<div class="size-12 shrink-0">
									<img
										class="size-full rounded-xl object-cover"
										src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt=""
									/>
								</div>
							</div>
							<div class="flex flex-row-reverse gap-4">
								<div class="flex flex-col gap-4 rounded-xl bg-zinc-900/70 p-6">
									<div class="flex items-center gap-2">
										<span class="text-sm text-zinc-500">23 May 2024</span>
										<span class="size-0.5 rounded-full bg-cyan-500"></span>
										<span class="text-sm text-zinc-500">Pow</span>
									</div>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam iure
										quasi velit ducimus quaerat voluptatum hic cupiditate obcaecati natus est fuga,
										voluptas corporis veniam, rerum nostrum animi facere soluta.
									</p>
								</div>
								<div class="size-12 shrink-0">
									<img
										class="size-full rounded-xl object-cover"
										src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt=""
									/>
								</div>
							</div>
							<div class="flex flex-row-reverse gap-4">
								<div class="flex flex-col gap-4 rounded-xl bg-zinc-900/70 p-6">
									<div class="flex items-center gap-2">
										<span class="text-sm text-zinc-500">23 May 2024</span>
										<span class="size-0.5 rounded-full bg-cyan-500"></span>
										<span class="text-sm text-zinc-500">Pow</span>
									</div>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam iure
										quasi velit ducimus quaerat voluptatum hic cupiditate obcaecati natus est fuga,
										voluptas corporis veniam, rerum nostrum animi facere soluta.
									</p>
								</div>
								<div class="size-12 shrink-0">
									<img
										class="size-full rounded-xl object-cover"
										src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt=""
									/>
								</div>
							</div>
						</div>
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar
						orientation="vertical"
						class="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 flex w-2.5 touch-none rounded-full border-l border-l-transparent bg-zinc-900 p-px transition-all duration-200 select-none hover:w-3 hover:bg-zinc-800"
					>
						<ScrollArea.Thumb class="flex-1 rounded-full bg-zinc-600" />
					</ScrollArea.Scrollbar>
					<ScrollArea.Corner />
				</ScrollArea.Root>
				<div class="flex items-center gap-2 p-4">
					<input
						class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800"
						type="text"
						placeholder="Say hi, share a link, or leave a riddle."
						name="search"
						id="search"
					/>
					<button
						class="inline-flex size-14 shrink-0 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-cyan-500 px-4 text-zinc-900 transition-all hover:bg-cyan-600 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
					>
						<Icon icon="solar:plain-linear" class="size-6" />
					</button>
				</div>
			</div>
		</div>
	</div>
</main>
