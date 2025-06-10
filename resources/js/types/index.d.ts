import '@inertiajs/svelte';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: Auth;
    [key: string]: unknown;
    ziggy: Config & { location: string };
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}
