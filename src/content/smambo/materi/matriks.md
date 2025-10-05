---
title: Matriks
slug: matriks
umum: false
---

<div class="">
  <p class="font-medium text-lg text-black mb-1">Table of Content</p>
  <div class="flex flex-col">
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/matriks#apa-itu-matriks%3F">Apa Itu Matriks?</a>
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/matriks#ordo-dan-elemen-matriks">Ordo dan Elemen Matriks</a>
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/matriks#kesamaan-dua-matriks">Kesamaan Dua Matriks</a>
		<a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/matriks#operasi-matriks">Operasi Matriks</a>
		<a class="text-violet-600 hover:text-violet-700 pl-4" href="/smambo/materi/matriks#penjumlahan-matriks">Penjumlahan Matriks</a>
		<a class="text-violet-600 hover:text-violet-700 pl-4" href="/smambo/materi/matriks#pengurangan-matriks">Pengurangan Matriks</a>
		<a class="text-violet-600 hover:text-violet-700 pl-4" href="/smambo/materi/matriks#perkalian-matriks">Perkalian Matriks</a>
		<a class="text-violet-600 hover:text-violet-700 pl-8" href="/smambo/materi/matriks#perkalian-dengan-skalar">Perkalian Dengan Skalar</a>
		<a class="text-violet-600 hover:text-violet-700 pl-8" href="/smambo/materi/matriks#perkalian-dua-matriks">Perkalian Dua Matriks</a>
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

- Periksa apakah ordo kedua matriks tersebut sama
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

## Operasi Matriks

### Penjumlahan Matriks

Dua buah matriks bisa dijumlahkan dengan syarat kedua matriks tersebut memiliki **ordo yang sama**. Pada saat penjumlahan dua matriks, masing masing elemen pada posisi yang sama dijumlahkan, sehingga akan menghasil kan matriks baru yang berordo sama pula. Contoh,

Diketahui matriks A

$$
A=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
$$

Diketahui matriks B

$$
B=\begin{bmatrix}
4 & -3\\
5 & 1
\end{bmatrix}
$$

Tentukan hasil dari $A+B$!

Jawab,

$$
A+B=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
+
\begin{bmatrix}
4 & -3\\
5 & 1
\end{bmatrix}
$$

$$
A+B=\begin{bmatrix}
-1+4 & 2+(-3)\\
6+5 & 9+1
\end{bmatrix}
$$

$$
A+B=\begin{bmatrix}
3 & -1\\
11 & 10
\end{bmatrix}
$$

### Pengurangan Matriks

Dua buah matriks bisa dikurangkan dengan syarat kedua matriks tersebut memiliki **ordo yang sama**. Pada saat pengurangan dua matriks, masing masing elemen pada posisi yang sama dikurangi, sehingga akan menghasil kan matriks baru yang berordo sama pula. Contoh,

Diketahui matriks A

$$
A=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
$$

Diketahui matriks B

$$
B=\begin{bmatrix}
4 & -3\\
5 & 1
\end{bmatrix}
$$

Tentukan hasil dari $A-B$!

Jawab,

$$
A-B=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}-
\begin{bmatrix}
4 & -3\\
5 & 1
\end{bmatrix}
$$

$$
A-B=\begin{bmatrix}
-1-4 & 2-(-3)\\
6-5 & 9-1
\end{bmatrix}
$$

$$
A-B=\begin{bmatrix}
-5 & 5\\
1 & 8
\end{bmatrix}
$$

### Perkalian Matriks

#### Perkalian Dengan Skalar

Jika matriks A berordo $m × n$ dan $k$ adalah bilangan real ($k$ sering disebut
skalar), maka $kA$ menyatakan matriks yang diperoleh dengan mengalikan
setiap elemen pada matriks $A$ dengan $k$. Contoh,

Diketahui matriks A,

$$
A=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
$$

Tentukan 3A!

Jawab,

$$
3A=3\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
$$

$$
3A=\begin{bmatrix}
3\times(-1) & 3\times2\\
3\times6 & 3\times9
\end{bmatrix}
$$

$$
3A=\begin{bmatrix}
-3 & 6\\
18 & 27
\end{bmatrix}
$$

#### Perkalian Dua Matriks

Dua buah matriks bisa dikalikan jika dan hanya jika jumlah kolom pada matriks pertama sama dengan jumlah baris pada matriks kedua. Contoh,

- Matriks A memiliki ordo 3x2 dan matriks B memiliki ordo 2x1. Matriks A bisa dikalikan dengan matriks B, karena jumlah kolom pada matriks A, yaitu 2, sama dengan jumlah baris pada matriks B, yaitu 2.

Matriks A berordo $m \times n$ dikalikan dengan matriks B berordo $n \times p$ akan menghasilkan matriks C yang berordo $m \times p$ dan nilai elemen-elemen $c_{ij}$ diperoleh dengan cara mengalikan elemen baris ke-$i$ pada matriks A terhadap elemen kolom ke-$j$ pada matriks B, kemudian hasilnya ditambahkan. Contoh

Diketahui matriks sebagai berikut

$$
A=\begin{bmatrix}
-1 & 2\\
6 & 9
\end{bmatrix}
$$

$$
B=\begin{bmatrix}
2 & 3\\
-1 & 4
\end{bmatrix}
$$

Tentukan $A \times B$!

Jawab

- Periksa dulu ordo masing masing matriks
  - Matriks A berordo 2x2
  - Matriks B berodo 2x1
- Karena jumlah kolom pada matriks A sama dengan jumlah baris pada matriks B, berarti operasi perkalian $A \times B$ dapat dilakukan
  $$
  A \times B=\begin{bmatrix}
  -1 & 2\\
  6 & 9
  \end{bmatrix} \times \begin{bmatrix}
  2 & 3\\
  -1 & 4
  \end{bmatrix}
  $$
  $$
  A \times B=\begin{bmatrix}
  (-1 \times 2)+(2 \times (-1)) & (-1 \times 3)+(2 \times 4)\\
  (6 \times 2)+(9 \times (-1)) & (6 \times 3)+(9 \times 4)
  \end{bmatrix}
  $$
  $$
  A \times B=\begin{bmatrix}
  (-2)+(-2) & (-3)+(8)\\
  (12)+(-9) & (18)+(36)
  \end{bmatrix}
  $$
  $$
  A \times B=\begin{bmatrix}
  -4 & 5\\
  3 & 54
  \end{bmatrix}
  $$
