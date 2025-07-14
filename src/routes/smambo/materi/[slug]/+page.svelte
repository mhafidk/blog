<script lang="ts">
	import { marked } from 'marked';

	export let data: {
		materi: {
			title: string;
			content: string;
		};
	};

	const { materi } = data;

	const html = marked.parse(materi.content);
</script>

<svelte:head>
	<title>{materi.title}</title>
</svelte:head>

<article class="prose max-w-none">
	<h1 class="mb-2 text-center text-3xl font-bold">{materi.title}</h1>

	{@html html}
</article>
