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
