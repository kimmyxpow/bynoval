import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    const searchParams = url.searchParams;
    const filters = {
        search: searchParams.get('search') || '',
        categories: searchParams.getAll('categories') || [],
        tags: searchParams.getAll('tags') || []
    }

    return {
        filters
    };
};