---
title: Matriks
slug: matriks
umum: false
---

<div class="">
  <p class="font-medium text-lg text-black mb-1">Table of Content</p>
  <div class="flex flex-col">
    <a class="text-lime-600 hover:text-lime-700" href="/smambo/materi/matriks#apa-itu-matriks%3F">Apa Itu Matriks?</a>
    <a class="text-lime-600 hover:text-lime-700" href="/smambo/materi/matriks#ordo-dan-elemen-matriks">Ordo dan Elemen Matriks</a>
    <a class="text-lime-600 hover:text-lime-700" href="/smambo/materi/matriks#kesamaan-dua-matriks">Kesamaan Dua Matriks</a>
  </div>
</div>

## Apa Itu Matriks?
Matriks adalah sekumpulan bilangan yang disusun berdasarkan baris dan kolom, serta ditempatkan di dalam tanda kurung. Matriks biasanya dinotasikan dengan huruf kapital, A, B, C, dst. Bilangan-bilangan yang ada di dalam matriks disebut dengan **elemen**. Posisi dari elemen tersebut ditentukan dari baris dan kolom tempat elemen itu berada.
## Ordo dan Elemen Matriks
Matriks mempunyai ukuran yang disebut dengan **ordo**. Ordo matriks ini berdasarkan dari banyaknya baris dikali banyaknya kolom pada matriks. Jadi, kalau suatu matriks A memiliki m baris dan n kolom, maka matriks A tersebut berukuran (berordo) m x n.

![Ordo Matriks](/materi-images/matriks/Screenshot-2025-07-24-195907.png)

Bilangan yang terdapat di dalam matriks disebut **elemen matriks** yang dinotasikan dengan huruf kecil dan diberi indeks yang menyatakan letak baris dan kolomnya. Contohnya bisa dilihat pada gambar di bawah ini

![Elemen Matriks](/materi-images/matriks/Screenshot-2025-07-24-195631.png)

- $a_{11}$ = Elemen pada baris 1 dan kolom 1
- $a_{12}$ = Elemen pada baris 1 dan kolom 2
- $a_{54}$ = Elemen pada baris 5 dan kolom 4
## Kesamaan Dua Matriks
Dua buah matriks dikatakan sama, dinyatakan sebagai $A=B$, jika dan hanya jika
1. matriks A dan matriks B mempunyai ordo yang sama
2. setiap elemen yang seletak pada matriks A dan matriks B mempunyai
nilai yang sama, $a_{ij}=b_{ij}$ (untuk semua nilai $i$ dan $j$).

Contoh,

Diketahui matriks A dan B sebagai berikut,

$$
A = \begin{bmatrix} -x & 2 \\ -3y & z^2 \end{bmatrix}
$$

$$
B=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
$$

Jika matriks A sama dengan B, tentukan nilai $x$, $y$, dan $z$!

Jawab,
-  Periksa apakah ordo kedua matriks tersebut sama
	- Ordo matriks A = 2x2
	- Ordo matriks B = 2x2
	- Karena kedua matriks sama sama memiliki ordo 2x2, berarti matriks A dan B sama
- Setiap elemen yang letaknya sama memiliki nilai yang sama
	- Elemen pada baris 1 kolom 1, $a_{11}$
		- $-x=-1$
		- $x=1$
	- Elemen pada baris 1 kolom 2, $a_{12}$
		- $2=2$
	- Elemen pada baris 2 kolom 1, $a_{21}$
		- $-3y=6$
		- $y=\frac{6}{-3}$
		- $y=-2$
	- Elemen pada baris 2 kolom 2, $a_{22}$
		- $z^2=9$
		- $z=\sqrt{9}$
		- $z=\pm3$
- Jadi nilai dari $x=1$, $y=-2$, dan $z=\pm3$.