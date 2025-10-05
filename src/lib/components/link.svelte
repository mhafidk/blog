<script>
	let { link, text, target_blank } = $props();
	let target = target_blank == 'true' ? '_blank' : '';
</script>

<div class="rounded bg-neutral-100 hover:bg-neutral-200">
	<div class="">
		<p class="px-3 py-2">
			<a href={`${link}`} {target} class="hover:text-violet-700">{text}</a>
		</p>
	</div>
</div>
