import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const filePath = path.join('src/smambo/tugas', `${slug}.md`);

	if (!fs.existsSync(filePath)) {
		throw error(404, `Tugas not found: ${slug}`);
	}

	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	return {
		tugas: {
			...data,
			slug,
			content
		}
	};
};
