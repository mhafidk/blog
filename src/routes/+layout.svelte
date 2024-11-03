<script>
	import '../app.css';
	import Footer from '../lib/components/footer.svelte';
	import Header from '../lib/components/header.svelte';
</script>

<Header />
<main class="max-w-screen-md mx-auto px-5 min-h-screen text-lg">
	<slot />
</main>
<Footer />
