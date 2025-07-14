import { getAllMateri } from '$lib/materi.server';
import { getAllTugas } from '$lib/tugas.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const materi = getAllMateri();
	const tugas = getAllTugas();
	return { materi: materi, tugas: tugas };
};
