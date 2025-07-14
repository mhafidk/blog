import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Materi {
	title: string;
	slug: string;
	umum: boolean;
	content: string;
}

const materiDir = path.resolve('src/smambo/materi');

export function getAllMateri(): Materi[] {
	const files = fs.readdirSync(materiDir);

	return files
		.filter((f) => f.endsWith('.md'))
		.map((filename) => {
			const filePath = path.join(materiDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data, content } = matter(fileContent);

			return {
				title: data.title,
				slug: data.slug || filename.replace(/\.md$/, ''),
				umum: data.umum,
				content
			};
		});
}
