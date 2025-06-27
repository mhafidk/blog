<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="font-display bg-white text-neutral-900">
	<div class="px- mx-auto max-w-2xl px-6 py-8">
		<Header />
		{@render children()}
	</div>
</div>
