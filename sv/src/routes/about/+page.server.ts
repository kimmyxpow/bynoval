import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(
		'https://api.github.com/repos/kimmyxpow/bynoval/commits?per_page=10',
		{
			headers: {
				Authorization: `Bearer ${env.GITHUB_TOKEN}`
			}
		}
	);
	console.log(response);
	const commits = await response.json();

	return {
		commits
	};
};
