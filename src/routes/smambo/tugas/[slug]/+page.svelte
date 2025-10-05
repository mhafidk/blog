<script>
	import 'katex/dist/katex.min.css';

	export let data;
	const { tugas } = data;
	const metadata = tugas.metadata;
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<div class="">
	<a href="/smambo" class="text-violet-600 underline hover:text-violet-700"
		>&larr; Back to SMAMBO Menu</a
	>
	<h1 class="mt-8 text-center text-3xl font-bold text-neutral-900">{metadata.title}</h1>
	<article class="prose prose-base mt-6 md:prose-lg">
		{@html tugas.html}
	</article>
</div>
