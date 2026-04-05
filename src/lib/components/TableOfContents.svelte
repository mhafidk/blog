<script lang="ts">
	import type { Heading } from '$lib/markdown';

	let { headings = [], isSidebar = false }: { headings: Heading[]; isSidebar?: boolean } = $props();
</script>

{#if headings.length > 0}
	<nav
		class="rounded border border-neutral-200 bg-white p-6 shadow-sm {isSidebar
			? 'sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto'
			: ''}"
	>
		<h3 class="mb-4 text-sm font-semibold tracking-wider text-neutral-800 uppercase">
			Table of Contents
		</h3>
		<ul class="space-y-3 text-sm text-neutral-600">
			{#each headings as heading}
				<li
					style="margin-left: {Math.max(0, heading.level - 2) * 1}rem;"
					class="leading-tight transition-colors hover:text-violet-700"
				>
					<a href="#{heading.slug}" class="block">
						{heading.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
