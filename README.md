# QUEST

### RPG Marketplace for One-Time Tasks

## Deskripsi

**Quest** adalah aplikasi marketplace untuk pekerjaan sekali selesai (*one-time tasks*) yang mengadopsi konsep **Role Playing Game (RPG)**.

Alih-alih menampilkan pekerjaan sebagai "job", Quest menghadirkan pengalaman seperti seorang petualang (*Adventurer*) yang mengambil misi dari sebuah **Guild Hall**.

Pendekatan ini bertujuan membuat proses mencari maupun menawarkan pekerjaan menjadi lebih menarik dan lebih mudah dipahami oleh pengguna.

Contoh Quest:

* Membantu instalasi komputer
* Mendesain poster
* Membersihkan rumah
* Mengantar barang
* Mengajar privat satu kali
* Merakit furnitur
* Memotong rumput
* Edit video
* Membuat website sederhana

Semua pekerjaan diperlakukan sebagai sebuah **Quest**.

---

# Latar Belakang

Sebagian besar platform freelance berfokus pada pekerjaan kontrak atau proyek jangka panjang.

Sementara itu, kebutuhan masyarakat sehari-hari sering kali hanya berupa pekerjaan yang selesai dalam satu kali transaksi.

Quest dikembangkan sebagai solusi terhadap kebutuhan tersebut dengan pendekatan gamifikasi sehingga pengguna memperoleh pengalaman yang lebih menyenangkan dibandingkan marketplace konvensional.

---

# Tujuan Proyek

Proyek ini dikembangkan sebagai tugas akhir mata kuliah **Pemrograman Web 2**.

Selain memenuhi kebutuhan akademik, arsitektur aplikasi dirancang agar dapat dikembangkan menjadi produk nyata pada masa mendatang tanpa harus melakukan perubahan besar pada struktur sistem.

---

# Teknologi yang Digunakan

## Frontend

* React
* React Router
* React Query
* Axios
* Tailwind CSS
* shadcn/ui
* Lucide React

## Backend

* Node.js
* Express.js
* Prisma ORM

## Database

* PostgreSQL (Supabase)

---

# Arsitektur

Aplikasi menggunakan pendekatan pemisahan tanggung jawab (*Separation of Concerns*).

```
React
        ↓
Axios
        ↓
Express API
        ↓
Controller
        ↓
Service
        ↓
Prisma ORM
        ↓
PostgreSQL
```

Struktur tersebut dipilih agar setiap lapisan memiliki tanggung jawab yang jelas sehingga aplikasi lebih mudah dikembangkan dan dipelihara.

---

# Struktur Backend

```
backend
│
├── src
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── services
│   ├── utils
│   ├── lib
│   ├── app.js
│   └── server.js
│
└── prisma
    └── schema.prisma
```

---

# Struktur Frontend

```
frontend
│
├── src
│   ├── api
│   ├── components
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── router
│   ├── services
│   └── utils
```

---

# Fitur yang Telah Diimplementasikan

## Backend

* REST API menggunakan Express
* Routing modular
* Controller & Service Layer
* Integrasi Prisma ORM
* PostgreSQL Database
* Dashboard Statistics
* CRUD Quest (tahap awal)
* Authentication (Register & Login)
* Error Response terstandarisasi

---

## Frontend

* React Router
* React Query
* Axios API Client
* Login
* Register
* Guild Hall
* Hero Dashboard
* Quest Board
* Quest Detail
* Create Quest
* Protected Route
* Penyimpanan sesi menggunakan Local Storage

---

# Database

Database terdiri dari dua entitas utama.

## Users

Menyimpan data pengguna.

Contoh atribut:

* id
* name
* email
* password_hash
* reputation_score

## Quests

Menyimpan data pekerjaan.

Contoh atribut:

* title
* description
* reward
* location
* status
* giver
* adventurer

Status Quest terdiri dari:

* OPEN
* IN_PROGRESS
* COMPLETED
* CANCELLED

---

# Konsep RPG

| Marketplace Umum | Quest         |
| ---------------- | ------------- |
| Dashboard        | Guild Hall    |
| Job              | Quest         |
| Employer         | Quest Giver   |
| Worker           | Adventurer    |
| Salary           | Reward        |
| Rating           | Reputation    |
| Completed Job    | Quest Cleared |
| History          | Adventure Log |

Pendekatan ini merupakan identitas utama aplikasi dan menjadi pembeda dibandingkan marketplace pekerjaan konvensional.

---

# Alur Sistem

### Register

Pengguna membuat akun baru.

↓

Password di-*hash* menggunakan bcrypt.

↓

Data disimpan ke PostgreSQL.

---

### Login

Pengguna memasukkan email dan password.

↓

Backend memverifikasi password menggunakan bcrypt.

↓

Jika valid, data pengguna dikirim ke frontend.

↓

Frontend menyimpan sesi pengguna.

---

### Membuat Quest

Adventurer membuat Quest.

↓

Frontend mengirim data ke Express API.

↓

Backend memvalidasi data.

↓

Prisma menyimpan data ke PostgreSQL.

↓

Guild Hall diperbarui menggunakan React Query.

---

# Prinsip Pengembangan

Selama pengembangan proyek digunakan beberapa prinsip berikut.

* Modular Architecture
* Separation of Concerns
* REST API
* Component-Based UI
* Reusable Components
* Responsive Interface
* Clean Folder Structure
* Scalable Architecture

Pendekatan tersebut dipilih agar aplikasi mudah dikembangkan apabila di masa depan ditambahkan fitur baru.

---

# Fitur yang Direncanakan

Beberapa fitur berikut belum diimplementasikan karena berada di luar ruang lingkup UAS.

* JWT Authentication
* Role Authorization
* Quest Acceptance
* Payment
* Escrow
* Chat
* Achievement
* Reputation System
* Ranking
* Notification
* AI Recommendation
* Mobile Application

---

# Alasan Memilih Proyek Ini sebagai UAS

Proyek ini dipilih karena mampu menggabungkan seluruh materi utama pada mata kuliah Pemrograman Web 2 ke dalam satu aplikasi yang saling terintegrasi.

Materi yang diterapkan meliputi:

* Node.js
* Express.js
* REST API
* HTTP Request & Response
* Middleware
* PostgreSQL Database
* Prisma ORM
* React
* React Components
* React Router
* React Query
* Axios
* State Management
* Authentication
* CRUD

Selain memenuhi capaian pembelajaran mata kuliah, aplikasi ini juga dirancang dengan arsitektur yang cukup baik untuk dikembangkan menjadi produk nyata di masa depan.

---

# Penutup

Quest bukan hanya sekadar prototype antarmuka, tetapi sebuah aplikasi web full-stack yang mengintegrasikan frontend React, backend Express, Prisma ORM, dan PostgreSQL dalam satu sistem yang saling terhubung.

Melalui proyek ini, penulis menerapkan konsep perancangan perangkat lunak modern, pemisahan arsitektur, integrasi database, autentikasi pengguna, serta komunikasi client-server menggunakan REST API sebagai implementasi nyata dari materi yang telah dipelajari selama perkuliahan.
