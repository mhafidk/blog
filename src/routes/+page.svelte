<script>
	import BlogCard from '$lib/components/blog-card.svelte';
</script>

<svelte:head>
	<title>Muhammad Hafid Khoirul</title>
</svelte:head>

<div class="">
	<p>Hi there! 👋</p>
	<p class="pt-2">
		I'm <span class="font-medium text-violet-600">Hafid</span>, software engineer. Currently, I'm
		working as a <span class="font-medium text-violet-600">backend engineer</span> at
		<a
			href="https://www.qontak.com"
			target="_blank"
			class="text-violet-600 underline hover:text-violet-700">Qontak</a
		>. I write blog and make videos about tech stuff.
	</p>
	<p class="pt-2">
		<a href="/blog" class="text-violet-600 underline hover:text-violet-700">Checkout my blog</a> or
		<a
			href="https://www.youtube.com/@muhammadhafidk"
			class="text-violet-600 underline hover:text-violet-700">checkout my youtube channel</a
		>!
	</p>
	<p class="pt-2">
		Outside of development, I'm an amateur photographer. I enjoy blending creativity and logic in
		both tech and life.
	</p>
</div>
<div class="mt-16">
	<h2 class="text-lg font-medium">Latest Blog Posts</h2>
	<div class="mt-4 grid grid-cols-1 gap-4">
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
</div>
<div class="mt-16">
	<h2 class="text-lg font-medium">Experiences</h2>
	<div class="mt-4 grid grid-cols-1 gap-4">
		<div class="">
			<div class="flex items-center gap-3">
				<div class="h-2 w-2 bg-violet-600"></div>
				<p class="font-medium">
					Backend Engineer at <a
						href="https://www.qontak.com"
						target="_blank"
						class="font-medium text-violet-600 underline hover:text-violet-700">Qontak</a
					>
				</p>
			</div>
			<p class="mt-2 pl-5 text-sm text-neutral-600">2020 - Present</p>
			<div class="mt-2">
				<ul class="list-outside list-disc pl-8 text-neutral-600">
					<li>
						Optimized code performance, resulting in a 50% speed increase, by addressing N+1
						queries, refining query execution, and strategically employing caching.
					</li>
					<li>
						Drove technical feature implementations, managing the development process from RFC
						conception to final deployment, collaborating closely with FE, QA, Design, and Product
						teams.
					</li>
					<li>
						Increased test coverage using RSpec, ensuring high code quality and reducing production
						bugs.
					</li>
				</ul>
			</div>
		</div>
		<div class="">
			<div class="flex items-center gap-3">
				<div class="h-2 w-2 bg-violet-600"></div>
				<p class="font-medium">
					Computer Engineering, <a
						href="https://www.ub.ac.id"
						target="_blank"
						class="font-medium text-violet-600 underline hover:text-violet-700"
						>Brawijaya University</a
					>
				</p>
			</div>
			<p class="mt-2 pl-5 text-sm text-neutral-600">2016 - 2020</p>
			<div class="mt-2">
				<ul class="list-outside list-disc pl-8 text-neutral-600">
					<li>
						Achieved academic distinction with a cumulative GPA of 3.86, reflecting consistent high
						performance and dedication.
					</li>
					<li>
						Fueled my passion for technology by joining the Robotics Club, gaining hands-on
						experience in robotics, programming, and real-world problem solving, with a focus on
						robotic vision systems, including image detection and recognition.
					</li>
					<li>
						Engaged in numerous robotics competitions, securing awards in several, forging
						meaningful connections, and enriching my technical and collaborative skills through
						real-world challenges.
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="mt-16">
	<h2 class="text-lg font-medium">Tools</h2>
	<div class="mt-4">
		<p class="hidden sm:block">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="https://skillicons.dev">
				<!-- svelte-ignore a11y_missing_attribute -->
				<img
					src="https://skillicons.dev/icons?i=ruby,python,go,js,html,css,rails,docker,elasticsearch,git,github,opencv,postgres,postman,redis,svelte,tailwind,ubuntu,linux&perline=10"
				/>
			</a>
		</p>
		<p class="block sm:hidden">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="https://skillicons.dev">
				<!-- svelte-ignore a11y_missing_attribute -->
				<img
					src="https://skillicons.dev/icons?i=ruby,python,go,js,html,css,rails,docker,elasticsearch,git,github,opencv,postgres,postman,redis,svelte,tailwind,ubuntu,linux&perline=6"
				/>
			</a>
		</p>
	</div>
</div>
<div class="mt-16">
	<h2 class="text-lg font-medium" id="about">About</h2>
	<div class="mt-4 rounded bg-neutral-100">
		<div class="px-8 py-6">
			<p class="">
				My name is <span class="font-medium text-violet-600">Muhammad Hafid Khoirul</span>, people
				usually call me
				<span class="font-medium text-violet-600">Hafid</span>.
			</p>
			<p class="mt-2">
				I'm a software developer based in Bogor, Indonesia, currently working as a backend engineer
				at <a
					class="text-violet-600 underline hover:text-violet-700"
					href="https://www.qontak.com"
					target="_blank"
					rel="norefferer">Qontak</a
				>. I have been working as a backend engineer since I graduated from Brawijaya University in
				2020 with computer engineer major. So, it's been 4 years, time does flies fast.
			</p>
			<p class="mt-2">
				I'm focused on backend technology right now. Mainly use Ruby on Rails at the moment, tried a
				lot of things, Go, Phoenix, NestJs, etc, love them. Beside web development, I also
				interested in other fields like computer vision and IoT. Doing small projects in my spare
				time. My thesis was about computer vision by the way, you can read it <a
					class="text-violet-600 underline hover:text-violet-700"
					href="https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/7129"
					target="_blank"
					rel="norefferer">here</a
				>.
			</p>
			<p class="mt-2">
				I made this site to be my portfolio and blog. My writing skill needs a lot of practices...
				That's why I'm going to share everything I want here. This will work also as my note, dont't
				forget everything after you learn something, take notes!
			</p>
			<p class="mt-2">Finally, thank you for visiting this site, means a lot.</p>
		</div>
	</div>
</div>
<div class="mt-16">
	<h2 class="text-lg font-medium" id="contact">Contact</h2>
	<div class="mt-4">
		<div class="">
			<p>
				Have any question or just want to say hi? Feel free to contact me through one of these
				platforms! I'll get back to you as soon as possible. 👌
			</p>
		</div>
		<div class="mt-6 flex justify-center gap-8">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="mailto:mhafidk@gmail.com" target="_blank" rel="noreferrer">
				<svg
					class="h-8 w-8 fill-current hover:text-violet-700"
					role="img"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"
					/>
				</svg>
			</a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="https://www.github.com/mhafidk" target="_blank" rel="noreferrer">
				<svg
					class="h-8 w-8 fill-current hover:text-violet-700"
					role="img"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
					/>
				</svg>
			</a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="https://www.linkedin.com/in/mhafidk" target="_blank" rel="noreferrer">
				<svg
					class="h-8 w-8 fill-current hover:text-violet-700"
					role="img"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>
