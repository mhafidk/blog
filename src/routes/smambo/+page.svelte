<script lang="ts">
	import Link from '$lib/components/link.svelte';
	import MateriTugas from '$lib/components/materi-tugas.svelte';

	export let data: {
		materi: {
			title: string;
			slug: string;
			umum: boolean;
		}[];
		tugas: {
			title: string;
			slug: string;
			umum: boolean;
		}[];
	};

	const materi = data.materi;
	const materi_mtk_umum = materi.filter((materi) => materi.umum);
	const materi_mtk_lanjut = materi.filter((materi) => !materi.umum);

	const tugas = data.tugas;
	const tugas_mtk_umum = tugas.filter((tugas) => tugas.umum);
	const tugas_mtk_lanjut = tugas.filter((tugas) => !tugas.umum);
</script>

<svelte:head>
	<title>SMAMBo</title>
</svelte:head>

<div class="">
	<h2 class="text-2xl font-bold">SMA Muhammadiyah Bojonggede</h2>
	<div class="mt-6">
		<div class="">
			<h3 class="text-xl font-bold">Buku</h3>
			<div class="mt-3 grid grid-cols-1 gap-2">
				<Link
					text="Matematika Lanjut Kelas 11"
					link="https://drive.google.com/file/d/1LXfwPMJ9lj-mB-PXh8eAQ5JbFB2PM3r3/view"
				/>
				<Link
					text="Matematika Lanjut Kelas 12"
					link="https://drive.google.com/file/d/1d3POAuKP2qW3tERdhh_v6jTT-Xo9HY08/view"
				/>
				<Link
					text="Matematika Umum Kelas 11"
					link="https://drive.google.com/file/d/1TWCsrE6y5IHpmvx7arK-H9NPn_JvGbIf/view"
				/>
				<Link
					text="Matematika Umum Kelas 12"
					link="https://drive.google.com/file/d/1TU5fsngZuPfsF-5xJ4Q5UoYGvsMEq1uz/view"
				/>
			</div>
		</div>
		<div class="mt-6">
			<h3 class="text-xl font-bold">Tugas</h3>
			<div class="mt-3">
				<div class="">
					<h4 class="font-medium">Matematika Umum</h4>
					<div class="mt-3 grid grid-cols-1 gap-2">
						{#each tugas_mtk_umum as tugas}
							<MateriTugas content={tugas} materi={false} />
						{/each}
					</div>
				</div>
				<div class="mt-3">
					<h4 class="font-medium">Matematika Lanjut</h4>
					<div class="mt-3 grid grid-cols-1 gap-2">
						{#each tugas_mtk_lanjut as tugas}
							<MateriTugas content={tugas} materi={false} />
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6">
			<h3 class="text-xl font-bold">Materi</h3>
			<div class="mt-3">
				<h4 class="font-medium">Matematika Umum</h4>
				<div class="mt-3">
					<div class="grid grid-cols-1 gap-2">
						{#each materi_mtk_umum as materi}
							<MateriTugas content={materi} materi={true} />
						{/each}
					</div>
				</div>
			</div>
			<div class="mt-3">
				<h4 class="font-medium">Matematika Lanjut</h4>
				<div class="mt-3">
					<div class="grid grid-cols-1 gap-2">
						{#each materi_mtk_lanjut as materi}
							<MateriTugas content={materi} materi={true} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
