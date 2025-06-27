<script>
	import Blogcard from '$lib/components/blogcard.svelte';
	import Socialmedia from '$lib/components/socialmedia.svelte';
</script>

<div class="">
	<div class="">
		<p>
			Hi! My name is
			<span class="font-bold text-lime-600">Muhammad Hafid Khoirul</span>.
		</p>
		<p class="mt-2">
			I'm a software engineer based in Bogor, Indonesia. Currently, I'm working as a backend
			engineer at
			<a
				href="https://www.qontak.com"
				target="_blank"
				class="border-b border-lime-600 text-lime-600 hover:border-lime-700 hover:text-lime-700"
				>Qontak</a
			>. I'm focused on backend technology, where I design efficient and scalable systems. My
			expertise includes building robust APIs, crafting optimized queries, and writing
			high-performance, well-tested, maintainable code.
		</p>
		<p class="mt-2">
			Outside of development, I'm an amateur photographer and a writer. I enjoy blending creativity
			and logic in both tech and life.
		</p>
	</div>
	<div class="mt-2">
		<p>
			<a
				href="/about"
				class="border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700"
				>More about me</a
			>
			or get in touch with me through one of these platforms.
		</p>
	</div>
	<Socialmedia />
</div>
<div class="mt-14">
	<h2 class="text-xl font-semibold">Latest Blog Posts</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 [max-width:639px]:grid-cols-1">
		<Blogcard />
		<Blogcard />
		<Blogcard />
	</div>
	<div class="mt-8">
		<a
			href="/blog"
			class="border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700"
			>More posts</a
		>
	</div>
</div>
<div class="mt-14">
	<h2 class="text-xl font-semibold">Experiences</h2>
	<div class="mt-6">
		<div class="">
			<ol class="border-s border-neutral-400">
				<li>
					<div class="flex-start flex items-center pt-3">
						<div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-lime-600"></div>
						<p class="font-medium">2020 - Present</p>
					</div>
					<div class="ms-4 mt-1 mb-6">
						<h4 class="mb-1.5 text-lg font-medium text-lime-600">
							Backend Engineer,
							<a
								href="https://www.qontak.com"
								target="_blank"
								rel="noreferrer"
								class="border-b border-lime-600 text-lime-600 hover:border-lime-700 hover:text-lime-700"
								>Qontak</a
							>
						</h4>
						<div class="mb-3">
							<ul class="list-outside list-disc pl-8">
								<li>
									Optimized code performance, resulting in a 50% speed increase, by addressing N+1
									queries, refining query execution, and strategically employing caching.
								</li>
								<li>
									Drove technical feature implementations, managing the development process from RFC
									conception to final deployment, collaborating closely with FE, QA, Design, and
									Product teams.
								</li>
								<li>
									Increased test coverage using RSpec, ensuring high code quality and reducing
									production bugs.
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="flex-start flex items-center pt-3">
						<div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-lime-600"></div>
						<p class="font-medium">2016 - 2020</p>
					</div>
					<div class="ms-4 mt-1 mb-6">
						<h4 class="mb-1.5 text-lg font-medium text-lime-600">
							Computer Engineering,
							<a
								href="https://www.ub.ac.id"
								target="_blank"
								rel="noreferrer"
								class="border-b border-lime-600 text-lime-600 hover:border-lime-700 hover:text-lime-700"
								>Brawijaya University</a
							>
						</h4>
						<div class="mb-3">
							<ul class="list-outside list-disc pl-8">
								<li>
									Achieved academic distinction with a cumulative GPA of 3.86, reflecting consistent
									high performance and dedication.
								</li>
								<li>
									Fueled my passion for technology by joining the Robotics Club, gaining hands-on
									experience in robotics, programming, and real-world problem solving, with a focus
									on robotic vision systems, including image detection and recognition.
								</li>
								<li>
									Engaged in numerous robotics competitions, securing awards in several, forging
									meaningful connections, and enriching my technical and collaborative skills
									through real-world challenges.
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ol>
		</div>
		<div class="mt-16">
			<p class="flex justify-center">
				<img
					alt="skills"
					src="https://skillicons.dev/icons?i=git,bitbucket,docker,cpp,css,elasticsearch,git,go,html,js,opencv,postgres,rails,redis,ruby,nuxt,tailwind,ubuntu,py&perline=7"
				/>
			</p>
		</div>
	</div>
</div>
