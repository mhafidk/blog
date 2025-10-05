import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		302,
		'https://drive.google.com/drive/folders/1iGy4lBqF4abOGtf2FweFW6Z1PXY_cf_f?usp=drive_link'
	);
}
