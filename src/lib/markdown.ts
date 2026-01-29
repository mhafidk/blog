import MarkdownIt from 'markdown-it';

// configure markdown-it
const md = new MarkdownIt({
	html: true, // allow raw HTML in .md
	linkify: true, // autolink URLs
	typographer: true // nice quotes, dashes, etc.
});

export function renderMarkdown(content: string) {
	return md.render(content);
}
