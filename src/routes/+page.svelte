<script>
	const skills = [
		'elastic.svg',
		'go.svg',
		'javascript.svg',
		'opencv.svg',
		'postgresql.svg',
		'python.svg',
		'redis.png',
		'ruby.svg',
		'ruby_on_rails.svg'
	];
</script>

<div class="mt-16">
	<h1 class="text-4xl">Hi! I am <span class="text-lime-600 font-medium">Hafid</span> 👋</h1>
	<p class="text-4xl font-bold my-3">Software Engineer</p>
	<p class="text-2xl">
		Currently, I am working as a backend engineer at <a
			href="https://www.qontak.com"
			target="_blank"
			rel="noreferrer"
			class="border-b border-lime-600 text-lime-600 hover:text-lime-700">Qontak</a
		>.
	</p>
</div>
<div class="my-20">
	<h2 class="text-2xl font-medium">A Little About Me</h2>
	<p class="mt-4">
		I am a software engineer based in Bogor, Indonesia. Currently, I am focused on backend
		technology, where I design efficient and scalable systems. My expertise includes building robust
		APIs, crafting optimized queries, and writing high-performance, well-tested, maintainable code.
	</p>
	<p class="mt-2">
		Outside of development, I’m an amateur photographer and a writer. I enjoy blending creativity
		and logic in both tech and life.
	</p>
</div>
<div class="mb-20">
	<h2 class="text-2xl font-medium">Latest Blog Posts</h2>
</div>
<div class="mb-20">
	<h2 class="text-2xl font-medium">Experiences & Tools</h2>
	<div class="mt-4 pl-4">
		<ol class="border-s border-neutral-300 dark:border-neutral-500">
			<!--First item-->
			<li>
				<div class="flex-start flex items-center pt-3">
					<div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-900"></div>
					<p class="">2020 - Present</p>
				</div>
				<div class="mb-6 ms-4 mt-2">
					<h4 class="mb-1.5 text-xl font-semibold text-lime-600">
						Backend Engineer, <a
							href="https://www.qontak.com"
							target="_blank"
							rel="noreferrer"
							class="border-b border-lime-600 hover:text-lime-700">Qontak</a
						>
					</h4>
					<div class="mb-3">
						<ul class="pl-8 list-disc list-outside">
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
		</ol>
	</div>
	<div class="mt-20 justify-center flex flex-wrap gap-6">
		{#each skills as skill}
			<img src={skill} alt="" class="h-8 md:h-10" />
		{/each}
	</div>
</div>
<div class="mb-20">
	<h2 class="text-2xl font-medium" id="contact">Contact</h2>
</div>
