import katex from 'katex';

export function renderMath(html: string) {
	return html
		.replace(/\$\$(.+?)\$\$/gs, (_, tex) =>
			katex.renderToString(tex, { displayMode: true })
		)
		.replace(/\$(.+?)\$/g, (_, tex) => {
			const isMultiline = tex.includes('\\begin');
			return katex.renderToString(tex, {
				displayMode: isMultiline, // use display mode only if needed
				throwOnError: false
			});
		});
}
