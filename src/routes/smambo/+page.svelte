<script lang="ts">
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
			<h3 class="text-xl font-bold">Tugas</h3>
			<div class="mt-3">
				<div class="">
					<h4 class="font-medium">XI</h4>
					<div class="mt-3">
						{#each tugas_mtk_umum as tugas}
							<MateriTugas content={tugas} materi={false} />
						{/each}
					</div>
				</div>
				<div class="mt-3">
					<h4 class="font-medium">XII</h4>
					<div class="mt-3">
						{#each tugas_mtk_lanjut as tugas}
							<MateriTugas content={tugas} materi={false} />
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6">
			<h3 class="text-xl font-bold">Matematika Umum</h3>
			<div class="mt-3">
				<div class="">
					{#each materi_mtk_umum as materi}
						<MateriTugas content={materi} materi={true} />
					{/each}
				</div>
			</div>
		</div>
		<div class="mt-6">
			<h3 class="text-xl font-bold">Matematika Lanjut</h3>
			<div class="mt-3">
				<div class="">
					{#each materi_mtk_lanjut as materi}
						<MateriTugas content={materi} materi={true} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
