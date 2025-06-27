<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="font-display bg-white text-neutral-900">
	<div class="px- mx-auto max-w-2xl px-6 py-8">
		<Header />
		<div class="flex h-64 items-center justify-center overflow-hidden pb-14">
			<img src="photo-cover.webp" class="h-full w-full rounded object-cover" alt="Background" />
		</div>
		{@render children()}
		<Footer />
	</div>
</div>
