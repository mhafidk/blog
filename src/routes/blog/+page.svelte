<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	const posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="">
	<h1 class="text-3xl font-bold">Blog</h1>
	<div class="mt-6 grid grid-cols-1 gap-10">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
