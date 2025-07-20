<script lang="ts">
	import { md } from '$lib/markdownparser';
	import { renderMath } from '$lib/mathparser';
	import 'katex/dist/katex.min.css';

	export let data: {
		materi: {
			title: string;
			content: string;
		};
	};

	const { materi } = data;
  const rawHtml = md.render(materi.content);
	const html = renderMath(rawHtml);
</script>

<svelte:head>
	<title>{materi.title}</title>
</svelte:head>

<article class="prose max-w-none">
	<h1 class="mb-2 text-center text-3xl font-bold">{materi.title}</h1>

	{@html html}
</article>
