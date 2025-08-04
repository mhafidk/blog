import katex from 'katex';

function sanitizeMathInput(tex: string): string {
	return tex
		.replace(/\u2013/g, '-') // en dash – to minus
		.replace(/\u2014/g, '-') // em dash — to minus
		.replace(/\u2212/g, '-') // minus sign − to ASCII minus
		.replace(/\u00A0/g, ' ') // non-breaking space to regular space
		.replace(/\u200B/g, ''); // zero-width space to nothing
}

export function renderMath(html: string) {
	return (
		html
			// $$...$$ block math
			.replace(/\$\$(.+?)\$\$/gs, (_, tex) =>
				katex.renderToString(sanitizeMathInput(tex), {
					displayMode: true,
					throwOnError: false
				})
			)
			// $...$ inline math
			.replace(/\$(.+?)\$/g, (_, tex) => {
				const isMultiline = tex.includes('\\begin');
				return katex.renderToString(sanitizeMathInput(tex), {
					displayMode: isMultiline,
					throwOnError: false
				});
			})
	);
}
