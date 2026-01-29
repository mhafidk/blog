import { getPostBySlug } from '$lib/posts';

export const load = async ({ params }) => {
	const post = getPostBySlug(params.slug);
	if (!post) throw new Error('Post not found');
	return { post };
};
