import { getAllChangelogs } from '$lib/changelogs';

export const load = async () => {
	const logs = getAllChangelogs();
	return { logs };
};
