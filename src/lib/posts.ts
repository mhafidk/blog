import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { renderMarkdown } from '$lib/markdown';

const postsDir = path.resolve('src/content/posts');

export function getAllPostsMeta() {
	const files = fs.readdirSync(postsDir);

	return files
		.filter((f) => f.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(postsDir, file);
			const raw = fs.readFileSync(filePath, 'utf-8');
			const { data: metadata } = matter(raw);

			return {
				slug: file.replace('.md', ''),
				metadata
			};
		})
		.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

export function getPostBySlug(slug: string) {
	const filePath = path.join(postsDir, `${slug}.md`);
	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data: metadata, content } = matter(raw);
	const html = renderMarkdown(content);

	return { slug, metadata, html };
}
