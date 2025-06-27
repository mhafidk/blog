import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
	title: string;
	date: string;
	tags?: string[];
	slug: string;
	content: string;
	image?: string;
}

const postsDir = path.resolve('src/posts');

export function getAllPosts(): Post[] {
	const files = fs.readdirSync(postsDir);

	return files
		.filter((f) => f.endsWith('.md'))
		.map((filename) => {
			const filePath = path.join(postsDir, filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data, content } = matter(fileContent);

			return {
				title: data.title,
				date: data.date,
				tags: data.tags || [],
				slug: data.slug || filename.replace(/\.md$/, ''),
				image: data.image || null,
				content
			};
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
