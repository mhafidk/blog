<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav class="pt-6 pb-14">
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
			<a href="/" class=""
				><img
					src="/mhk-potrait.webp"
					class="h-12 w-12 rounded-full sm:h-8 sm:w-8"
					alt="Muhammad Hafid K"
				/></a
			>
			<a
				href="/"
				class="bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-2xl font-bold text-transparent"
				>Muhammad Hafid K</a
			>
		</div>
		<div class="mt-4 flex justify-center gap-6 text-sm sm:justify-start">
			<a
				href="/"
				class="border-b-2 border-transparent pb-4 hover:text-lime-700"
				class:text-lime-600={$page.url?.pathname === '/'}
				class:border-lime-600={$page.url?.pathname === '/'}
				class:border-transparent={$page.url?.pathname !== '/'}>Home</a
			>
			<a
				href="/about"
				class="border-b-2 border-transparent pb-4 hover:text-lime-700"
				class:text-lime-600={$page.url?.pathname === '/about'}
				class:border-lime-600={$page.url?.pathname === '/about'}
				class:border-transparent={$page.url?.pathname !== '/about'}>About</a
			>
			<a
				href="/blog"
				class="border-b-2 border-transparent pb-4 hover:text-lime-700"
				class:text-lime-600={$page.url?.pathname.includes('/blog')}
				class:border-lime-600={$page.url?.pathname.includes('/blog')}
				class:border-transparent={!$page.url?.pathname.includes('/blog')}>Blog</a
			>
			<a href="/#contact" class="border-b-2 border-transparent pb-4 hover:text-lime-700">Contact</a>
		</div>
	</nav>
</header>
