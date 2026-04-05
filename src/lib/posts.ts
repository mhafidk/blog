import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { renderMarkdown } from '$lib/markdown';

const postsDir = path.resolve('src/content/posts');

export function getAllPostsMeta(limit?: number) {
	const files = fs.readdirSync(postsDir);

	const posts = files
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

	if (limit) {
		return posts.slice(0, limit);
	}

	return posts;
}

export function getPostBySlug(slug: string) {
	const filePath = path.join(postsDir, `${slug}.md`);
	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data: metadata, content } = matter(raw);
	const { html, headings } = renderMarkdown(content);

	return { slug, metadata, html, headings };
}
