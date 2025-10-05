---
title: Determinan dan Invers Matriks
slug: determinan-dan-invers-matriks
umum: false
---

<div class="">
  <p class="font-medium text-lg text-black mb-1">Table of Content</p>
  <div class="flex flex-col">
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/determinan-dan-invers-matriks#determinan-matriks">Determinan Matriks</a>
    <a class="pl-6 text-violet-600 hover:text-violet-700" href="/smambo/materi/determinan-dan-invers-matriks#determinan-matriks-2x2">Determinan Matriks 2x2</a>
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/determinan-dan-invers-matriks#invers-matriks">Invers Matriks</a>
		<a class="pl-6 text-violet-600 hover:text-violet-700" href="/smambo/materi/determinan-dan-invers-matriks#invers-matriks-2x2">Invers Matriks 2x2</a>
  </div>
</div>

## Determinan Matriks

Determinan matriks adalah suatu **nilai skalar yang dihitung dari elemen-elemen matriks persegi** (matriks dengan jumlah baris dan kolom yang sama). Determinan memberikan informasi penting tentang matriks tersebut, seperti apakah matriks memiliki invers atau tidak.

### Determinan Matriks 2x2

Jika diketahui matriks sebagai berikut,

$$
A=\begin{bmatrix}
a_{11} & a_{12}\\
a_{21} & a_{22}
\end{bmatrix}
$$

Maka determinan matriks $A$ dapat dinyatakan dengan,

$$
det\,A=|A|=a_{11} \times a_{22} -a_{12} \times a_{21}
$$

Contoh,

Diketahui matriks $B$ sebagai berikut,

$$
B=\begin{bmatrix}
-2 & 3\\
4 & -1
\end{bmatrix}
$$

Tentukan determinan dari matriks $B$!

Jawab,

- $det\,B=|B|=a_{11} \times a_{22} -a_{12} \times a_{21}$
- $det\,B=|B|=2 \times (-1) -3 \times 4$
- $det\,B=|B|=-2 -12$
- $det\,B=|B|=-14$

## Invers Matriks

Di dalam himpunan bilangan real, setiap bilangan $a$ (bukan nol) memiliki kebalikan yaitu bilangan $a^{–1}$ dengan sifat $a \times a^{–1} = a^{–1} \times a = 1$. Bilangan $a^{–1}$ disebut invers (kebalikan) perkalian dari $a$. Berdasarkan pengetahuan tersebut, invers matriks dapat didefinisikan sebagai berikut.

$$
A^{-1}=\frac{1}{det\,A}Adjoin(A)
$$

Dimana,

$$
Adjoin(A)=\begin{bmatrix}
a_{22} & -a_{12}\\
-a_{21} & a_{11}
\end{bmatrix}
$$

Jika dilihat dari rumus invers matriks, sebuah matriks hanya dapat dihitung invers nya jika dan hanya jika determinan matriks nya tidak bernilai 0.

### Invers Matriks 2x2

Tentukan invers dari matriks A berikut!

$$
A=\begin{bmatrix}
3 & -7\\
-1 & 2
\end{bmatrix}
$$

Jawab,

- Cari determinan dari matriks $A$
  - $det\,A=a_{11} \times a_{22} -a_{12} \times a_{21}$
  - $det\,A=3 \times 2 -(-7) \times (-1)$
  - $det\,A=6-7$
  - $det\,A=-1$
- Cari Adjoin matriks $A$
  $Adjoin(A)=\begin{bmatrix} a_{22} & -a_{12} \\ -a_{21} & a_{11} \end{bmatrix}$
  $Adjoin(A)=\begin{bmatrix} 2 & -(-7) \\ -(-1) & 3 \end{bmatrix}$
  $Adjoin(A)=\begin{bmatrix} 2 & 7 \\ 1 & 3 \end{bmatrix}$
- Hitung invers matriks nya
  $A^{-1}=\frac{1}{det\,A}Adjoin(A)$
  $A^{-1}=\frac{1}{-1}\begin{bmatrix} 2 & 7 \\ 1 & 3 \end{bmatrix}$
  $A^{-1}=-1\begin{bmatrix} 2 & 7 \\ 1 & 3 \end{bmatrix}$
  $A^{-1}=\begin{bmatrix} -2 & -7 \\ -1 & -3 \end{bmatrix}$
