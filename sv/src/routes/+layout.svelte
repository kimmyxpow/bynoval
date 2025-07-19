<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/layouts/navigation-bar.svelte';

	let { children } = $props();
</script>

<NavigationBar />
{@render children()}
