<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="bg-neutral-50 font-display text-neutral-900">
	<Header />
	<div class="mx-auto max-w-2xl px-6 pt-12">
		{@render children()}
	</div>
</main>
