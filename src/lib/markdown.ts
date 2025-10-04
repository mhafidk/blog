import MarkdownIt from 'markdown-it';
import mk from 'markdown-it-katex';
import markdownItAnchor from 'markdown-it-anchor';

// configure markdown-it
const md = new MarkdownIt({
	html: true, // allow raw HTML in .md
	linkify: true, // autolink URLs
	typographer: true // nice quotes, dashes, etc.
})
	.use(mk)
	.use(markdownItAnchor);

export function renderMarkdown(content: string) {
	return md.render(content);
}
