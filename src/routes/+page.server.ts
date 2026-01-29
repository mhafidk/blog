import { getAllPostsMeta } from '$lib/posts';

export const load = async () => {
	const posts = getAllPostsMeta(4);
	return { posts };
};
