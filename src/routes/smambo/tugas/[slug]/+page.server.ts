import { getTugasBySlug } from '$lib/smambo';

export const load = async ({ params }) => {
	const tugas = getTugasBySlug(params.slug);
	if (!tugas) throw new Error('Tugas not found');
	return { tugas };
};
