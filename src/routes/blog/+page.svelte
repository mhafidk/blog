<script lang="ts">
	import Blogcard from '$lib/components/blogcard.svelte';

	export let data: {
		posts: {
			title: string;
			date: string;
			tags?: string[];
			slug: string;
			image: string;
		}[];
	};

	const posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="">
	<h2 class="text-2xl font-bold">Blog</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 [max-width:639px]:grid-cols-1">
		{#each posts as post}
			<Blogcard {post} />
		{/each}
	</div>
</div>
