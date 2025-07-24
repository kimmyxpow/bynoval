<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/layouts/navigation-bar.svelte';
	import Footer from '$components/layouts/footer.svelte';

	let { children } = $props();
</script>

<NavigationBar />
{@render children()}
<Footer />
