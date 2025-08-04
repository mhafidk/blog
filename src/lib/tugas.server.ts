import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Tugas {
	title: string;
	slug: string;
	umum: boolean;
	content: string;
}

const tugasDir = path.resolve('src/smambo/tugas');

export function getAllTugas(): Tugas[] {
	const files = fs.readdirSync(tugasDir);

	const tugasList = files
		.filter((f) => f.endsWith('.md'))
		.map((filename) => {
			const filePath = path.join(tugasDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data, content } = matter(fileContent);

			return {
				title: data.title,
				slug: data.slug || filename.replace(/\.md$/, ''),
				umum: data.umum,
				content
			};
		});
	return tugasList.sort((a, b) => a.title.localeCompare(b.title));
}
