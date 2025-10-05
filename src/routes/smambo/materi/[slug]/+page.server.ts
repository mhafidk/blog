import { getMateriBySlug } from '$lib/smambo';

export const load = async ({ params }) => {
	const materi = getMateriBySlug(params.slug);
	if (!materi) throw new Error('Materi not found');
	return { materi };
};
