import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';

export type Heading = {
	level: number;
	title: string;
	slug: string;
};

export function renderMarkdown(content: string) {
	const headings: Heading[] = [];

	// configure markdown-it
	const md = new MarkdownIt({
		html: true, // allow raw HTML in .md
		linkify: true, // autolink URLs
		typographer: true // nice quotes, dashes, etc.
	}).use(markdownItAnchor, {
		callback: (token, info) => {
			headings.push({
				level: token.markup.length,
				title: info.title,
				slug: info.slug
			});
		}
	});

	const html = md.render(content);
	return { html, headings };
}
