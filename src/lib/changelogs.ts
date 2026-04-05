import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { renderMarkdown } from '$lib/markdown';

const changelogsDir = path.resolve('src/content/changelogs');

export function getAllChangelogs() {
	if (!fs.existsSync(changelogsDir)) {
		return [];
	}

	const files = fs.readdirSync(changelogsDir);

	const logs = files
		.filter((f) => f.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(changelogsDir, file);
			const raw = fs.readFileSync(filePath, 'utf-8');
			const { data: metadata, content } = matter(raw);
			const { html } = renderMarkdown(content);

			return {
				slug: file.replace('.md', ''),
				metadata,
				html
			};
		})
		.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

	return logs;
}
