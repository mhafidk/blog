<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/mhk-logo.png" />
</svelte:head>

<div class="mx-auto max-w-3xl p-4">
	<header class="border-b border-neutral-300 pt-8 pb-12">
		<h1>
			<a href="/" class="text-xl font-semibold text-violet-600 hover:text-violet-700"
				>Muhammad Hafid K</a
			>
		</h1>
		<div class="flex gap-4 pt-2 text-sm text-neutral-700">
			<a href="/" class="hover:text-violet-700">Home</a>
			<a href="/blog" class="hover:text-violet-700">Blog</a>
			<a href="/#about" class="hover:text-violet-700">About</a>
			<a href="/#contact" class="hover:text-violet-700">Contact</a>
		</div>
	</header>
	<main class="py-12">
		{@render children?.()}
	</main>
	<footer class="mt-72 mb-4 border-t border-neutral-300 pt-8 text-center text-sm">
		<p>
			© 2024
			<span class="font-medium text-violet-700">Muhammad Hafid Khoirul</span>.
			<br class="block md:hidden" />All rights reserved.
		</p>
	</footer>
</div>
