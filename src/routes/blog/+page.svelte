<script>
	import BlogCard from '../../lib/components/blog-card.svelte';

	export let data;
	let posts = data.posts;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="min-h-screen pb-24">
	<h1 class="mt-16 text-4xl font-bold">Blog.</h1>
	<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
