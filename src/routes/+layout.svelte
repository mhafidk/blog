<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto max-w-3xl p-4">
	<header class="pt-8">
		<h1>
			<a href="/" class="text-xl font-semibold text-violet-600 hover:text-violet-700"
				>Muhammad Hafid K</a
			>
		</h1>
		<div class="flex gap-4 pt-2 text-sm text-neutral-700">
			<a href="/" class="hover:text-violet-700">Home</a>
			<a href="/#about" class="hover:text-violet-700">About</a>
			<a href="/#contact" class="hover:text-violet-700">Contact</a>
		</div>
	</header>
	<main class="py-12">
		{@render children?.()}
	</main>
</div>
