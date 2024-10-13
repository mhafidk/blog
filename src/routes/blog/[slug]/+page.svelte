<script>
	import { marked } from 'marked';
	import { formatDate } from '$lib/helper';

	export let data;
	$: post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="">
	<img src={post.coverImage.url} alt={post.title} class="h-96 w-full object-cover rounded mt-12" />
	<h1 class="text-center text-3xl font-bold mt-12">{post.title}</h1>
	<div class="flex justify-center items-center gap-8 mt-8">
		<p class="text-center text-violet-600 text-sm">{formatDate(post.createdAt)}</p>
	</div>
	<article
		class="prose prose-lg mt-8 max-w-screen-md mx-auto pb-48 prose-h2:leading-relaxed prose-p:text-neutral-900"
	>
		{@html marked(post.content)}
	</article>
</div>

<style lang="postcss">
	h1 {
		line-height: 1.5;
	}
</style>
