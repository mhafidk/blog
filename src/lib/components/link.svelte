<script>
	let { link, text } = $props();
</script>

<a
	target="_blank"
	class="w-fit border-b border-b-lime-600 text-lime-600 hover:border-b-lime-700 hover:text-lime-700"
	href={`${link}`}>{text}</a
>
