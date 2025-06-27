<script>
	import Blogcard from '$lib/components/blogcard.svelte';
	import Socialmedia from '$lib/components/socialmedia.svelte';
</script>

<div class="">
	<div class="">
		<p>
			Hi! My name is
			<span class="font-bold text-lime-600">Muhammad Hafid Khoirul</span>.
		</p>
		<p class="mt-2">
			I'm a software engineer based in Bogor, Indonesia. Currently, I'm working as a backend
			engineer at
			<a
				href="https://www.qontak.com"
				target="_blank"
				class="border-b border-lime-600 text-lime-600 hover:border-lime-700 hover:text-lime-700"
				>Qontak</a
			>. I'm focused on backend technology, where I design efficient and scalable systems. My
			expertise includes building robust APIs, crafting optimized queries, and writing
			high-performance, well-tested, maintainable code.
		</p>
		<p class="mt-2">
			Outside of development, I'm an amateur photographer and a writer. I enjoy blending creativity
			and logic in both tech and life.
		</p>
	</div>
	<div class="mt-2">
		<p>
			<a
				href="/about"
				class="border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700"
				>More about me</a
			>
			or get in touch with me through one of these platforms.
		</p>
	</div>
	<Socialmedia />
</div>
<div class="mt-14">
	<h2 class="text-xl font-semibold">Latest Blog Posts</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 [max-width:639px]:grid-cols-1">
		<Blogcard />
		<Blogcard />
		<Blogcard />
	</div>
	<div class="mt-8">
		<a
			href="/blog"
			class="border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700"
			>More posts</a
		>
	</div>
</div>
