<script>
	export let data;
	const { post } = data;
	const metadata = post.metadata;
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<div class="">
	<h1 class="text-center text-3xl font-bold text-neutral-900">{metadata.title}</h1>
	<p class="my-6 mt-4 text-center text-sm text-gray-600">
		{new Date(metadata.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	{#if metadata.image}
		<img src={metadata.image} alt={metadata.title} class="mb-10 w-full rounded" />
	{/if}

	<article class="prose prose-lg">
		{@html data.post.html}
	</article>
</div>
