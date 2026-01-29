<script>
	export let post;
	const { metadata, slug } = post;
	const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="">
	<a href={`/blog/${slug}`} class="text-lg font-semibold text-violet-700 hover:text-violet-800"
		>{metadata.title}</a
	>
	<p class="mt-2 line-clamp-4 text-neutral-700 md:line-clamp-3">
		{metadata.description}
	</p>
	<div class="mt-3 flex items-center gap-4 text-xs text-neutral-800 md:text-sm">
		<p class="rounded-md bg-neutral-700 px-2 py-1 text-neutral-50">{formattedDate}</p>
		{#each metadata.tags as tag}
			<p>#{tag}</p>
		{/each}
	</div>
</div>
