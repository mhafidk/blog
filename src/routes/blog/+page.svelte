<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	const posts = data.posts;
	let search = '';

	$: filtered = posts.filter(
		(p) =>
			p.metadata.title.toLowerCase().includes(search.toLowerCase()) ||
			p.metadata.tags?.join(' ').toLowerCase().includes(search.toLowerCase())
	);
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="">
	<h1 class="text-2xl font-semibold">Blog</h1>
	<input
		type="text"
		bind:value={search}
		placeholder="Search posts based on name or tags..."
		class="mt-4 w-full rounded border border-neutral-400 p-2 placeholder-neutral-400 focus:border-violet-600 focus:ring focus:ring-violet-400 focus:outline-none"
	/>
	<div class="mt-6 grid grid-cols-1 gap-4">
		{#each filtered as post (post.slug)}
			<BlogCard {post} />
		{/each}
	</div>
</div>
