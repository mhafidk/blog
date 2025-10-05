import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { renderMath } from './mathparser';
import { renderMarkdown } from './markdown';

const materiDir = path.resolve('src/content/smambo/materi');
const tugasDir = path.resolve('src/content/smambo/tugas');

export function getAllMateriMeta() {
	const files = fs.readdirSync(materiDir);

	return files
		.filter((f) => f.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(materiDir, file);
			const raw = fs.readFileSync(filePath, 'utf-8');
			const { data: metadata } = matter(raw);

			return {
				slug: file.replace('.md', ''),
				metadata
			};
		})
		.sort((a, b) => a.metadata.title.localeCompare(b.metadata.title));
}

export function getMateriBySlug(slug: string) {
	const filePath = path.join(materiDir, `${slug}.md`);
	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data: metadata, content } = matter(raw);
	const rawHtml = renderMath(content);
	const html = renderMarkdown(rawHtml);

	return { slug, metadata, html };
}

export function getAllTugasMeta() {
	const files = fs.readdirSync(tugasDir);

	return files
		.filter((f) => f.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(tugasDir, file);
			const raw = fs.readFileSync(filePath, 'utf-8');
			const { data: metadata } = matter(raw);

			return {
				slug: file.replace('.md', ''),
				metadata
			};
		})
		.sort((a, b) => a.metadata.title.localeCompare(b.metadata.title));
}

export function getTugasBySlug(slug: string) {
	const filePath = path.join(tugasDir, `${slug}.md`);
	const raw = fs.readFileSync(filePath, 'utf-8');
	const { data: metadata, content } = matter(raw);
	const rawHtml = renderMath(content);
	const html = renderMarkdown(rawHtml);

	return { slug, metadata, html };
}
