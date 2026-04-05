<script>
	export let data;
	const logs = data.logs;
</script>

<svelte:head>
	<title>Changelog - Muhammad Hafid Khoirul</title>
</svelte:head>

<div class="">
	<h1 class="text-3xl font-semibold">Changelog</h1>
	<p class="mt-4 text-neutral-600">A timeline of updates and changes to this website.</p>

	<div class="mt-10 border-l-2 border-neutral-400 pl-6">
		{#if logs.length > 0}
			<div class="flex flex-col gap-12">
				{#each logs as log}
					<div class="relative">
						<!-- Timeline marker -->
						<div
							class="absolute top-1.5 -left-[33px] h-4 w-4 rounded-full border-2 border-white bg-violet-700"
						></div>

						<div class="flex flex-col">
							<span class="text-sm font-medium text-neutral-500">{log.metadata.date}</span>
							<h2 class="mt-1 text-2xl font-semibold text-neutral-800">
								{log.metadata.title}
							</h2>
							<div class="mt-1 flex items-center gap-2 text-sm text-neutral-700">
								{#if log.metadata.version}
									<span
										class="rounded bg-neutral-100 px-2 py-0.5 font-mono font-semibold text-violet-700"
										>{log.metadata.version}</span
									>
								{/if}
								{#if log.metadata.author}
									<span>by {log.metadata.author}</span>
								{/if}
							</div>

							<div
								class="prose mt-3 max-w-none prose-neutral prose-headings:font-semibold prose-p:my-2 prose-ul:my-2 prose-li:my-0"
							>
								{@html log.html}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-neutral-500">No changelog data available.</p>
		{/if}
	</div>
</div>
