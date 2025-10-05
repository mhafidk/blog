<script>
	import Link from '$lib/components/link.svelte';

	export let data;

	const tugas = data.tugas;
	const tugas_xii = tugas.filter((tugas) => tugas.metadata.xii);
	const tugas_xi = tugas.filter((tugas) => !tugas.metadata.xii);

	const materi = data.materi;
	const materi_mtk_umum = materi.filter((materi) => materi.metadata.umum);
	const materi_mtk_lanjut = materi.filter((materi) => !materi.metadata.umum);

	console.log(tugas);
	console.log(materi);
</script>

<svelte:head>
	<title>SMA Muhammadiyah Bojonggede</title>
</svelte:head>

<div class="">
	<h1 class="text-2xl font-semibold">SMA Muhammadiyah Bojonggede</h1>
	<div class="mt-6">
		<div class="">
			<h2 class="text-xl font-medium">Buku</h2>
			<div class="mt-4 grid grid-cols-1 gap-1">
				<Link
					link="https://drive.google.com/file/d/1LXfwPMJ9lj-mB-PXh8eAQ5JbFB2PM3r3/view"
					text="Matematika Lanjut Kelas 11"
					target_blank="true"
				/>
				<Link
					link="https://drive.google.com/file/d/1d3POAuKP2qW3tERdhh_v6jTT-Xo9HY08/view"
					text="Matematika Lanjut Kelas 12"
					target_blank="true"
				/>
				<Link
					link="https://drive.google.com/file/d/1TWCsrE6y5IHpmvx7arK-H9NPn_JvGbIf/view"
					text="Matematika Umum Kelas 11"
					target_blank="true"
				/>
				<Link
					link="https://drive.google.com/file/d/1TU5fsngZuPfsF-5xJ4Q5UoYGvsMEq1uz/view"
					text="Matematika Umum Kelas 12"
					target_blank="true"
				/>
			</div>
		</div>
		<div class="mt-6">
			<h2 class="text-xl font-medium">Tugas</h2>
			<div class="mt-4">
				<h3 class="text-lg font-medium">Kelas XI</h3>
				<div class="mt-4 grid grid-cols-1 gap-1">
					{#each tugas_xi as tugas}
						<Link
							link={`/smambo/tugas/${tugas.slug}`}
							text={`${tugas.metadata.title}`}
							target_blank="false"
						/>
					{/each}
				</div>
				<h3 class="mt-6 text-lg font-medium">Kelas XII</h3>
				<div class="mt-4 grid grid-cols-1 gap-1">
					{#each tugas_xii as tugas}
						<Link
							link={`/smambo/tugas/${tugas.slug}`}
							text={`${tugas.metadata.title}`}
							target_blank="false"
						/>
					{/each}
				</div>
			</div>
			<h2 class="mt-6 text-xl font-medium">Materi</h2>
			<div class="mt-4">
				<h3 class="text-lg font-medium">Matematika Umum</h3>
				<div class="mt-4 grid grid-cols-1 gap-1">
					{#each materi_mtk_umum as materi}
						<Link
							link={`/smambo/materi/${materi.slug}`}
							text={`${materi.metadata.title}`}
							target_blank="false"
						/>
					{/each}
				</div>
				<h3 class="mt-6 text-lg font-medium">Matematika Lanjut</h3>
				<div class="mt-4 grid grid-cols-1 gap-1">
					{#each materi_mtk_lanjut as materi}
						<Link
							link={`/smambo/materi/${materi.slug}`}
							text={`${materi.metadata.title}`}
							target_blank="false"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
