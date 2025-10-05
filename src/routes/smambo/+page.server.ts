import { getAllTugasMeta } from '$lib/smambo';
import { getAllMateriMeta } from '$lib/smambo';

export const load = async () => {
	const tugas = getAllTugasMeta();
	const materi = getAllMateriMeta();
	return { tugas, materi };
};
