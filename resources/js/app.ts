import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte';
import { hydrate, mount } from 'svelte';
import '../css/app.css';

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.svelte');
        return pages[`./pages/${name}.svelte`]();
    },
    setup({ el, App, props }) {
        if (el && el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el, props });
        } else if (el) {
            mount(App, { target: el, props });
        }
    },
    progress: {
        color: '#00b8db', // cyan 600
        showSpinner: true,
    },
});
