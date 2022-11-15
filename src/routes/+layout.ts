import type { LayoutLoad } from './$types';
import { getDatabase } from '$lib/rxdb';

export const prerender = false;
export const ssr = false;
export const csr = true;

export const load: LayoutLoad = async () => {
	const database = await getDatabase();
	console.log('Rx database loaded');

	return { };
};
