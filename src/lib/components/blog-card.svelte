<script>
	export let post;
</script>

<div class="bg-neutral-100 bg-opacity-75 rounded-md overflow-hidden border">
	<div>
		<img src={post.coverImage.url} alt={post.title} class="h-48 w-full object-cover" />
	</div>
	<div class="px-4 py-3">
		<a href={`/blog/${post.slug}`} class="text-xl font-medium text-lime-600 hover:text-lime-700"
			>{post.title}</a
		>
		<p class="mt-2 mb-3 line-clamp-5 text-neutral-800">
			{post.description}
		</p>
		<div class="flex gap-4 text-sm text-neutral-800">
			{#each post.tags as tag}
				<p class="text-violet-600">{tag}</p>
			{/each}
		</div>
	</div>
</div>
