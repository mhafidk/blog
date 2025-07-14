<script>
	let { content, materi } = $props();

	const smamboPath = materi ? 'materi' : 'tugas';
</script>

<a
	href={`/smambo/${smamboPath}/${content.slug}`}
	class="border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700"
	>{content.title}</a
>
