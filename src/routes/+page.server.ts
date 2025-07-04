import { getAllPosts } from '$lib/posts.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = getAllPosts();
	return { posts };
};
