import { getAllPostsMeta } from '$lib/posts';

export const load = async () => {
	const posts = getAllPostsMeta();
	return { posts };
};
