import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    const searchParams = url.searchParams;
    const filters = {
        search: searchParams.get('search') || '',
    }

    return {
        filters
    };
};