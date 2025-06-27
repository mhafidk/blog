<script>
	import Blogcard from '$lib/components/blogcard.svelte';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="">
	<h2 class="text-2xl font-bold">Blog</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 [max-width:639px]:grid-cols-1">
		<Blogcard />
		<Blogcard />
		<Blogcard />
	</div>
</div>
