import katex from 'katex';

export function renderMath(html: string) {
	return html
		// $$...$$ block math
		.replace(/\$\$(.+?)\$\$/gs, (_, tex) =>
			katex.renderToString(tex, {
				displayMode: true,
				throwOnError: false
			})
		)
		// $...$ inline math
		.replace(/\$(.+?)\$/g, (_, tex) => {
			const isMultiline = tex.includes('\\begin');
			return katex.renderToString(tex, {
				displayMode: isMultiline,
				throwOnError: false
			});
		});
}
