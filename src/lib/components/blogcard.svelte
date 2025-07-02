<script>
	let { post } = $props();

	const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="flex h-[22rem] w-full flex-col rounded border border-lime-600 bg-lime-50">
	<div class="flex flex-1 items-center justify-center overflow-hidden rounded-t">
		<img src={post.image} class="h-full w-full object-cover" alt="MHK Logo" />
	</div>
	<div class="">
		<div class="flex h-full flex-col px-4 py-3">
			<p class="text-xs text-neutral-500">{formattedDate}</p>
			<a
				href={`/blog/${post.slug}`}
				class="mt-2 text-xl font-medium hover:cursor-pointer hover:text-lime-700">{post.title}</a
			>
			<div class="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
				{#each post.tags as tag}
					<p class="w-fit text-lime-700">{tag}</p>
				{/each}
			</div>
		</div>
	</div>
</div>
