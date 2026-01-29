<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/mhk-logo.png';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="bg-neutral-50 font-display text-neutral-900">
	<Header />
	<div class="mx-auto max-w-2xl px-6 pt-6 md:pt-12">
		{@render children()}
	</div>
	<Footer />
</main>
