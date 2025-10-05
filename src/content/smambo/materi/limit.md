---
title: Limit
slug: limit
umum: false
---

<div class="">
  <p class="font-medium text-lg text-black mb-1">Table of Content</p>
  <div class="flex flex-col">
    <a class="text-violet-600 hover:text-violet-700" href="/smambo/materi/limit#limit">Limit</a>
  </div>
</div>

## Limit

Limit dalam matematika adalah **nilai yang didekati oleh suatu fungsi atau barisan ketika variabelnya mendekati suatu titik tertentu**.

Jadi, limit bukan selalu nilai yang benar-benar dicapai, tapi lebih kepada **arah atau kecenderungan** suatu fungsi/barisan.

Contoh, kita mempunyai fungsi
$$f(x)=2x$$kalau kita ingin tahu limit dari $f(x)$ saat $x \rightarrow 3$:

$$
\lim_{x\to3}2x=2\cdot 3=6
$$

Artinya, ketika $x$ semakin mendekati 3 (baik dari kiri maupun kanan), nilai $f(x)$ semakin mendekati 6.

Kadang fungsi tidak didefinisikan di titik tertentu, tapi tetap ada limitnya. Contoh,

$$
\lim_{x\to1}\frac{x^2+1}{x-1}
$$

Kalau kita subtitusi $x=1$, hasilnya $\frac{0}{0}$ (tidak terdefinisi). Tapi kalau kita faktorkan:

$$
\frac{(x-1)(x+1)}{x-1}=x+1
$$

Maka:

$$
\lim_{x\to1}\frac{x^2+1}{x-1}=\lim_{x\to1}(x+1)=2
$$

Walau $f(1)$ tidak ada, limitnya tetap ada yaitu 2.
