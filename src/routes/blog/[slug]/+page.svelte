<script lang="ts">
	import { marked } from 'marked';

	export let data: {
		post: {
			title: string;
			date: string;
			content: string;
			image?: string;
			tags?: string[];
		};
	};

	const { post } = data;

	const html = marked.parse(post.content);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="prose max-w-none">
	<h1 class="mb-2 text-center text-3xl font-bold">{post.title}</h1>
	<p class="mb-4 text-center text-sm text-gray-500">
		{new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	{#if post.image}
		<img src={post.image} alt={post.title} class="mb-6 w-full rounded" />
	{/if}

	{@html html}
</article>
