---
title: Polinomial (Suku Banyak)
slug: polinomial
umum: false
---

<div class="">
  <p class="font-medium text-lg text-black mb-1">Table of Content</p>
  <div class="flex flex-col">
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/polinomial#pengertian-polinomial">Pengertian Polinomial</a>
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/polinomial#derajat-suatu-polinomial">Derajat Suatu Polinomial</a>
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/polinomial#penjumlahan-dan-pengurangan-polinomial">Penjumlahan dan Pengurangan Polinomial</a>
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/polinomial#perkalian-polinomial">Perkalian Polinomial</a>
  </div>
</div>

## Pengertian Polinomial

Polinomial adalah **suatu bentuk persamaan atau ekspresi matematika** yang terdiri dari penjumlahan atau pengurangan beberapa suku (term), di mana setiap suku merupakan hasil perkalian **koefisien** dengan **variabel** yang berpangkat **bilangan bulat non-negatif**.

Secara umum bentuk polinomial:

$$
a_nx^n+a_{n-1}x^{n-1}+\dots+a_1x^1+a_n
$$

Keterangan:

- $a_n,a_{n−1},\dots,a_o$​ → **koefisien** (bisa bilangan real atau kompleks)
- $x$ → **variabel**
- $n$ → **derajat polinomial** (pangkat tertinggi dari variabel)
- Pangkat variabel **tidak boleh negatif** dan **tidak boleh pecahan**

Contoh polinomial

- $2x^5-x^3+2$
- $y^2-2$

Contoh bukan polinomial beserta alasannya

- $2x^{-1}-3x+2$ (bukan polinomial karena ada pangkat negatif)
- $x^\frac{1}{2}+1$ (bukan polinomial karena ada pangkat pecahan)
- $\sqrt{3x^2}+2x-1$ (bukan polinomial karena ada akar)

## Derajat Suatu Polinomial

Salah satu karakteristik polinomial adalah derajatnya. Untuk mengetahui derajat suatu polinomial, perhatikan gambar di bawah ini.

![Derajat polinomial](/materi-images/polinomial/Pasted-image-20250814173457.png)
![Derajat polinomial](/materi-images/polinomial/Pasted-image-20250814173519.png)

Apa yang dapat kalian simpulkan dari gambar di atas?

Pada monomial, untuk mengetahui derajatnya yaitu dengan cara menambahkan seluruh pangkat yang dimilikinya, contoh

Berapa derajat dari monomial $2x^2yz^3$?

Jawab,

- Variable-variable yang dimiliki oleh monomial tersebut ada $x$, $y$, dan $z$
- Pangkat setiap variable nya yaitu
  - $x$ berpangkat 2
  - $y$ berpangkat 1
  - $z$ berpangkat 3
- Sehingga derajat dari monomial tersebut adalah $2+1+3$ atau sama dengan $6$

Sedangkan pada polinomial, derajatnya ditentukan oleh derajat suku (monomial) yang tertingginya. Contoh,

Berapa derajat dari polinomial $8x^3-36x^2+54x-27$?

Jawab,

- Polinomial $8x^3-36x^2+54x-27$ memiliki suku suku:
  - $8x^3$
  - $-36x^2$
  - $54x$
  - $-27$
- Derajat dari setiap suku nya
  - $8x^3$ berderajat 3
  - $-36x^2$ berderajat 2
  - $54x$ berderajat 1
  - $-27$ berderajat 0
- Derajat tertinggi dari suku suku polinomial tersebut adalah 3, sehingga derajat dari polinomial tersebut ada 3.

## Penjumlahan dan Pengurangan Polinomial

Penjumlahan dan pengurangan polinomial dilakukan dengan menjumlahkan dan mengurangkan suku-suku yang sejenis. Suku-suku sejenis adalah suku-suku yang memiliki variabel sama dan eksponen dari variabelnya juga sama.

Contoh suku sejenis,

$$
3x,-7x\frac{1}{5}x
$$

Suku-suku diatas sama sama memiliki variable $x$, sehingga dikatakan suku sejenis.

$$
x^3y,5x^3y\frac{1}{2}yx^3
$$

Suku-suku diatas sama sama memiliki variable $x^3y$, sehingga dikatakan suku sejenis.

Contoh penjumlahan polinomial,

Tentukan hasil dari $(2x^3-4x^2+x-11)+(5x^3+x^2-3x-9)$!

Jawab,

- $(2x^3-4x^2+x-11)+(5x^3+x^2-3x-9)$
- Kelompokan suku sejenisnya
  - $2x^3+5x^3-4x^2+x^2+x-3x-11-9$
- Hitung suku yang sejenis
  - $7x^3-3x^2-2x-20$
- Sehingga hasil penjumlahannya adalah $7x^3-3x^2-2x-20$

Contoh pengurangan polinomial,

Tentukan hasil dari $(x^4-3x^2+4x-6)-(5x^3+2x^2-x-4)$!

Jawab,

- $(x^4-3x^2+4x-6)-(5x^3+2x^2-x-4)$
- Kelompokan suku sejenisnya
  - $x^4-5x^3-3x^2-2x^2+4x+x-6+4$
- Hitung suku yang sejenis
  - $x^4-5x^3-5x^2+5x-2$
- Sehingga hasil pengurangannya adalah $x^4-5x^3-5x^2+5x-2$

## Perkalian Polinomial

Perkalian polinomial dilakukan dengan melakukan kali silang antara 2 polinomialnya. Contoh, hitunglah $(x-5)(x^2+3x-1)$!

Jawab,

- $(x-5)(x^2+3x-1)$
- Lakukan kali silang
  - $(x\times x^2)+(x\times 3x)+(x\times (-1))+(-5\times x^2)+(-5\times 3x)+(-5\times (-1))$
  - $x^3+3x^2-x-5x^2-15x+5$
- Jumlahkan atau kurangkan suku yang sejenis
  - $x^3+3x^2-x-5x^2-15x+5$
  - $x^3+3x^2-5x^2-x-15x+5$
  - $x^3-2x^2-16x+5$
- Sehingga hasil perkaliannya adalah $x^3-2x^2-16x+5$
