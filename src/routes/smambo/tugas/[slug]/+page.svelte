<script lang="ts">
	import { md } from '$lib/markdownparser';
	import { renderMath } from '$lib/mathparser';
	import 'katex/dist/katex.min.css';

	export let data: {
		tugas: {
			title: string;
			content: string;
		};
	};

	const { tugas } = data;
  const rawHtml = md.render(tugas.content);
	const html = renderMath(rawHtml);
</script>

<svelte:head>
	<title>{tugas.title}</title>
</svelte:head>

<article class="prose max-w-none">
	<h1 class="mb-2 text-center text-3xl font-bold">{tugas.title}</h1>

	{@html html}
</article>
