<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';

	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const currentPath = derived(page, ($page) => $page.url.pathname);

	let { children } = $props();
</script>

<div class="font-display bg-white text-neutral-900">
	<div class="px- mx-auto max-w-2xl px-6 py-8">
		<Header />
    {#if $currentPath.includes('/smambo/')}
    <div class="mb-4">
			<a class="border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700" href="/smambo">&larr; Back to SMAMBo Menu</a>
    </div>
		{/if}
		{#if !$currentPath.includes('/blog/')}
			<div class="flex h-64 items-center justify-center overflow-hidden pb-14">
				<img src="/photo-cover.webp" class="h-full w-full rounded object-cover" alt="Background" />
			</div>
		{/if}
		{@render children()}
		<Footer />
	</div>
</div>
