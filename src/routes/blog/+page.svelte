<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	const posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="">
	<h1 class="text-2xl font-semibold">Blog</h1>
	<div class="mt-8 grid grid-cols-1 gap-4">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
