<script>
	export let post;
	const { metadata, slug } = post;
	const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="rounded bg-neutral-100">
	<div class="px-6 py-4">
		<a href={`/blog/${slug}`} class="font-medium text-violet-600 hover:text-violet-700"
			>{metadata.title}</a
		>
		<p class="pt-2 text-xs text-neutral-600">{formattedDate}</p>
		<p class="line-clamp-5 pt-2 text-neutral-600 md:line-clamp-3">
			{metadata.description}
		</p>
		<div class="mt-3 flex gap-1 font-mono text-xs text-violet-700">
			{#each metadata.tags as tag}
				<p class="rounded bg-violet-100 px-2 py-0.5 font-medium text-violet-700">#{tag}</p>
			{/each}
		</div>
	</div>
</div>
