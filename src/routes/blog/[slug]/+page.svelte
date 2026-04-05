<script>
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	export let data;
	const { post } = data;
	const metadata = post.metadata;
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<div class="">
	<h1 class="text-center text-3xl font-bold">{metadata.title}</h1>
	<p class="my-6 mt-4 text-center text-sm text-gray-600">
		{new Date(metadata.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	{#if metadata.image}
		<img src={metadata.image} alt={metadata.title} class="mb-8 w-full rounded" />
	{/if}

	{#if data.post.headings && data.post.headings.length > 0}
		<div class="mb-8 xl:hidden">
			<TableOfContents headings={data.post.headings} />
		</div>
	{/if}

	<div class="relative mt-8">
		<article class="prose prose-base w-full max-w-none md:prose-lg">
			{@html data.post.html}
		</article>

		{#if data.post.headings && data.post.headings.length > 0}
			<aside class="absolute top-0 bottom-0 left-[100%] hidden w-72 pl-10 xl:block">
				<TableOfContents headings={data.post.headings} isSidebar={true} />
			</aside>
		{/if}
	</div>
</div>
