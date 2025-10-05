import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		302,
		'https://drive.google.com/drive/folders/1kjtl6FgOAQunSS0ZjbDNTavL2E8El_a2?usp=drive_link'
	);
}
