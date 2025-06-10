<script lang="ts">
    import NavigationBar from './navigation-bar.svelte';

    let { children } = $props();
</script>

<NavigationBar />
{@render children()}
