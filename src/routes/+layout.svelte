<script>
	import '../app.css';
	import Header from '../lib/components/header.svelte';
</script>

<Header />
<main class="max-w-screen-md mx-auto px-5">
	<slot />
</main>
