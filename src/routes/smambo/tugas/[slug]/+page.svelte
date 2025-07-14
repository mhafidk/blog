<script lang="ts">
	import { marked } from 'marked';

	export let data: {
		tugas: {
			title: string;
			content: string;
		};
	};

	const { tugas } = data;

	const html = marked.parse(tugas.content);
</script>

<svelte:head>
	<title>{tugas.title}</title>
</svelte:head>

<article class="prose max-w-none">
	<h1 class="mb-2 text-center text-3xl font-bold">{tugas.title}</h1>

	{@html html}
</article>
