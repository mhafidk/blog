<script>
	import BlogCard from '$lib/components/blog-card.svelte';
</script>

<svelte:head>
	<title>Muhammad Hafid Khoirul</title>
</svelte:head>

<div class="">
	<p>Hi there! 👋</p>
	<p class="pt-2">
		I'm <span class="font-medium text-violet-600">Hafid</span>, software engineer. Currently, I'm
		working as a <span class="font-medium text-violet-600">backend engineer</span> at
		<a
			href="https://www.qontak.com"
			target="_blank"
			class="text-violet-600 underline hover:text-violet-700">Qontak</a
		>. I write blog and make videos about tech stuff.
	</p>
	<p class="pt-2">
		<a href="/blog" class="text-violet-600 underline hover:text-violet-700">Checkout my blog</a> or
		<a
			href="https://www.youtube.com/@muhammadhafidk"
			class="text-violet-600 underline hover:text-violet-700">checkout my youtube channel</a
		>!
	</p>
	<p class="pt-2">
		Outside of development, I'm an amateur photographer. I enjoy blending creativity and logic in
		both tech and life.
	</p>
</div>
<div class="mt-16">
	<h2 class="text-lg font-medium">Latest Blog Posts</h2>
	<div class="mt-4 grid grid-cols-1 gap-4">
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
</div>
