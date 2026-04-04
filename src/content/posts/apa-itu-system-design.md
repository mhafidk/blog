---
title: 01 - Apa Itu System Design?
date: 2026-04-05
image: /blog-images/apa-itu-system-design.webp
slug: apa-itu-system-design
description: "Pernah kepikiran ga, lu bisa ngescroll ratusan post tanpa masalah, nontoh puluhan story, ngirim dm. Semuanya itu terasa cepet bangetnya, ga ada error, ga ada lemot lemot, meskipun lu lakuin itu semua bersamaan dengan jutaan pengguna Instagram lainnya. Apa yang terjadi di belakang? Kok bisa gitu?"
tags:
  - programming
  - system-design
---

Di tahun 2026 ini Instagram kira kira punya 3 miliar pengguna, apa lu salah satunya? Kalau iya, pernah kepikiran ga, lu bisa ngescroll ratusan post tanpa masalah, nontoh puluhan story, ngirim dm. Semuanya itu terasa cepet bangetnya, ga ada error, ga ada lemot lemot, meskipun lu lakuin itu semua bersamaan dengan jutaan pengguna Instagram lainnya. Apa yang terjadi di belakang? Kok bisa gitu?

Jawabannya adalah karena **System Design**.

---

## Karena Masalah Ini Nih!

Bayangin, lu baru aja buat sebuah aplikasi web, ada satu server, satu database, dan satu user yang baru aja sign up. Semuanya berjalan dengan lancar, semuanya happy.

Terus, alhamdulillah, aplikasi lu viral. Tiba tiba aplikasi lu punya satu juta user. Satu juta user lu itu akses server aplikasi lu di waktu yang bersamaan. Apa yang terjadi?

Server lu kebakaran. Database lu meledak karena banyaknya query yang masuk. Responsenya melambat. Dan lama kelamaan crash... Error bermunculan, user pergi dan mungkin ga akan pernah kembali lagi.

Kok bisa gitu? Padahal code lu bagus bagus aja, logicnya bener. Semua featurenya berjalan lancar.

Tapi, system nya ga didesain untuk bisa ngehandle sekian banyak cobaan.

> **Code yang bener ga cukup. Lu perlu mikirin juga gimana system yang lu buat bisa menghandle sekian banyak request, data, dan user.**

Ini inti masalah yang diselesaikan sama **system design**.

---

## Apa Itu System Design?

System design adalah proses menentukan arsitektur, komponen, data flow, dan bagian bagian lainnya dari sebuah system supaya system tersebut menjadi scalable, reliable, dan maintainable

Bukan tentang bahasa pemrograman apa yang lu pake, bukan juga tentang framework. Tapi bagaiman setiap bagian dari system lu bisa saling terhubung dan melengkapi.

System design dibagi menjadi 2 bagian:
### High-Level Design (HLD)

Gambaran besar. Komponen-komponen apa yang system lu punya? Bagaimana setiap komponen itu komunikasi satu sama lain? Contoh, lu punya client, server, database, dan mungkin cache. Gimana caranya mereka semua itu terhubung?
### Low-Level Design (LLD)

Detail. Gimana data modelnya? API contract nya? Algoritma apa yang lu pake buat nyelesein suatu masalah?

Kedua bagian di atas penting. Tapi, lu harus selalu mulai dari gambaran besarnya dulu sebelum menyelam lebih dalam ke detailnya.

---

## 5 Inti Dari System Design

Sebuah system yang didesain dengan baik harus mengedepankan lima property ini:

**1. Scalability**
System harus bisa menghandle banyak user, data, dan traffic tanpa crash. Kenaikan dalam jumlah data harusnya adalah sesuatu yang aman terjadi.

**2. Reliability**
System harus bisa terus jalan meskipun ada sesuatu yang salah. System yang didesain dengan baik harus bisa menghandle kesalahan yang terjadi dengan baik, contoh server crash, network time out, dll.

**3. Availability**
System harus selalu bisa diakses kapanpun user butuh. Ga ada yang mau liat error "503 Service Unavailable".

**4. Performance**
System harus bisa meresponse dengan cepat. Bukan rahasia lagi, user akan pergi kalau system nya lemot, iya kan?

**5. Maintainability**
System harus bisa dengan mudah didebug, dirubah, ditambahkan sesuatu. Karena software ga akan pernah "selesai", requirement berubah, ada bug, features nambah lagi.

---

## Dipake Dimana System Design?

Penting ga sih system design itu? Kapan ilmu tentang system design ini kepake di keseharian professional kita? Paling engga, ada 3 waktu system design ini diperlukan:

### Keseharian Kerja Kita
Setiap lu butuh menentukan yang berkaitan dengan arsitektur di kerjaan, nah itu system design. Harus pake SQL atau NoSQL? Perlu cache? Tetep monolith atau perlu microservice? Itu semua contoh hal-hal yang berkaitan sama system design.

### Technical Interviews
Kalau lu apply ke perusahaan gede atau role senior, dapat dipastikan pas interviewnya pasti akan nyinggung soal system design.

### Project Pribadi
Kalau lu ada project pribadi, dimana lu buat sebuah aplikasi dari awal, system design ini membantu lu buat menentukan pilihan yang pas sesuai dengan kebutuhan project lu. Jadi pas udah viral nanti aplikasinya ga pusing mikirin user base yang naik terus.

---

## Apa Aja Yang Akan Dibahas di Series Ini?

Blog post ini adalah batu pertama dari rangkaian system design series yang akan mengcover semuanya, dari basic sampai advance. Begini roadmapnya:

- **Fase 1 — Foundations:** Latency, throughput, scaling, load balancing, APIs.
- **Fase 2 — Data & Storage:** Databases, indexing, caching, replication, sharding. 
- **Fase 3 — Distributed Systems:** Message queues, microservices, authentication, observability.
- **Fase 4 — Reliability & Scalability:** Circuit breakers, the Saga pattern, CQRS, event sourcing.
- **Fase 5 — Real-World Case Studies:** Praktek langsung nerapin teori yang udah dibahas.

Satu konsep, satu blog post. Dibahas dengan detail.

---

## Akhir Kata

System design intinya adalah membuat keputusan yang tepat supaya aplikasi lu bisa berkembang, handle error dengan baik, terus melayani user-user senyaman mungkin. System design penting dan diperlukan banget buat software engineer, apapun rolenya, baik untuk ningkatin karir, interview, atau personal project.

Di post selanjutnya, kita akan bahas tentang pendekatan yang bisa kita lakukan dalam menangani system design problem.

Psst, series ini nanti akan dibuat dalam bentuk video juga, cocok buat lu yang lebih suka nonton, tunggu aja yak!
