# Portfolio Website Design Document

**Project:** Personal Portfolio  
**Framework:** Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion  
**Style:** Simple • Minimalist • Modern • Elegant

---

# Design Philosophy

Website ini tidak menggunakan banyak warna.

Fokus utama adalah:

- Bersih
- Mudah dibaca
- Banyak whitespace
- Smooth animation
- Professional
- Terlihat premium

Inspirasi:

- Vercel
- Linear
- Apple
- Raycast

---

# Color Palette

Background

```css
#FAFAFA
```

Card

```css
#FFFFFF
```

Text

```css
#111827
```

Secondary Text

```css
#6B7280
```

Border

```css
#E5E7EB
```

Primary Accent

```css
#2563EB
```

Hover Accent

```css
#1D4ED8
```

Success

```css
#22C55E
```

---

# Font

Heading

```
Inter ExtraBold
```

Body

```
Inter Regular
```

Alternative

```
Geist
```

---

# Layout

Lebar maksimal

```
1200px
```

Container

```
mx-auto
px-6
```

Section Spacing

```
py-28
```

Card Radius

```
20px
```

Shadow

```
shadow-sm
hover:shadow-xl
```

Transition

```
300ms ease
```

---

# Navbar

Minimal

```
Logo

About
Projects
Skills
Experience
Contact

Resume Button
```

Navbar selalu berada di atas.

Saat scroll:

- Background menjadi putih transparan
- Blur
- Shadow tipis

---

# HERO SECTION

Layout:

```
-----------------------------------------------------

Hello, I'm

ALFIN SYAHRIN

Full Stack Developer
&
AI Enthusiast

Saya membangun website modern,
AI application,
dan IoT Project.

[Contact Me]

[Download CV]

                FOTO

-----------------------------------------------------
```

Foto berada di sebelah kanan.

Foto berbentuk

```
Rounded Full
```

Di belakang foto ada lingkaran blur biru tipis.

Tambahkan animasi floating yang sangat halus.

Di bawah nama terdapat badge:

```
Available for Freelance
```

warna hijau.

---

# ABOUT SECTION

Layout 2 kolom

Kiri

Judul

```
About Me
```

Kanan

Penjelasan singkat.

Contoh

> Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan pada Full Stack Development, Artificial Intelligence, Machine Learning, dan Internet of Things. Saya senang membangun solusi digital yang sederhana namun bermanfaat untuk menyelesaikan permasalahan nyata.

Di bawahnya

Quick Info

```
📍 Indonesia

🎓 Informatics Student

💼 Freelance Developer

🚀 AI Enthusiast
```

---

# SKILLS SECTION

Gunakan card kecil.

Grid

```
4 kolom
```

Isi

Frontend

- HTML
- CSS
- Tailwind
- React
- Next.js

Backend

- Node.js
- Express
- Laravel

Database

- MySQL
- PostgreSQL
- MongoDB

AI

- Python
- TensorFlow
- Scikit Learn
- OpenCV

IoT

- ESP32
- Raspberry Pi
- MQTT

Tools

- Git
- Docker
- Figma
- VS Code

Setiap card memiliki icon.

Hover

Naik sedikit

```
translateY(-6px)
```

---

# FEATURED PROJECTS

Section paling menarik.

Judul

```
Featured Projects
```

Subtitle

> Beberapa project yang telah saya selesaikan.

Gunakan layout bergantian.

Project 1

```
-------------------------------------------------

GAMBAR PROJECT

                    Smart Poultry Coop

                    AI + IoT

                    Deskripsi singkat

                    ✔ Edge AI

                    ✔ ESP32

                    ✔ Raspberry Pi

                    ✔ Dashboard

                    [Github]

                    [Live Demo]

-------------------------------------------------
```

Project 2

Posisi dibalik.

```
Text

                Image
```

Project 3

Image kiri lagi.

Semua gambar

```
Rounded 24px
```

Hover

Sedikit zoom

```
scale 1.03
```

---

# PROJECT CARD CONTENT

Setiap project berisi

Nama

Kategori

Tech Stack

Penjelasan

Screenshot besar

Button

Github

Demo

Durasi pengerjaan

Status

---

Contoh

Nama

```
Smart Poultry Coop
```

Kategori

```
Edge AI + IoT
```

Stack

```
Next.js
Python
YOLOv8
ESP32
MQTT
Raspberry Pi
```

Deskripsi

Sistem kandang ayam cerdas berbasis Edge AI yang mampu memonitor kondisi ayam secara real-time menggunakan Computer Vision, sensor lingkungan, dan dashboard monitoring untuk membantu peternak mengambil keputusan lebih cepat.

Status

```
Completed
```

---

# CURRENT PROJECT

Section baru.

Berbeda dengan Featured Project.

Judul

```
Currently Building
```

Subtitle

> Project yang sedang saya kerjakan saat ini.

Gunakan timeline.

Contoh

```
● Smart Bus Arrival Prediction

Sedang mengembangkan sistem prediksi kedatangan bus menggunakan GPS, IoT, MQTT, dan Machine Learning.


-----------------------------

● AI Attendance System

Mengembangkan sistem absensi berbasis Face Recognition.


-----------------------------

● Personal AI Assistant

Mengembangkan AI Assistant berbasis LLM menggunakan Next.js dan Python.
```

Setiap item memiliki progress bar.

Contoh

```
██████████░░░░░ 65%
```

Status badge

```
In Progress
```

warna biru.

---

# PROJECT GALLERY

Tambahkan gallery sederhana.

Grid

```
3 kolom
```

Semua gambar memiliki

Hover

```
Zoom

Overlay

View Project
```

Klik

Masuk ke detail project.

---

# EXPERIENCE

Timeline vertical.

```
2026

Freelance Developer

----------------

2025

Full Stack Projects

----------------

2024

Started Learning Programming
```

---

# CERTIFICATES

Card horizontal.

Isi

Logo

Nama Sertifikat

Institusi

Tanggal

Button

View Certificate

---

# CONTACT

Simple.

```
Let's Build Something Together.
```

Email

LinkedIn

Github

Instagram

Button

```
Send Message
```

---

# FOOTER

```
© 2026 Alfin Syahrin

Designed & Built using Next.js
```

Tambahkan icon Github.

---

# Animation

Gunakan

Framer Motion

Animasi

- Fade Up
- Fade Left
- Fade Right
- Scale
- Smooth Hover
- Blur Reveal

Saat membuka website

Hero muncul perlahan.

Saat scroll

Setiap section muncul dengan fade.

Project image

Zoom sedikit ketika hover.

Button

Ada ripple effect.

Card

Naik 6px.

---

# Responsive

Desktop

2 Column

Tablet

2 Column

Mobile

1 Column

Navbar berubah menjadi

Hamburger Menu

---

# Folder Structure

```
app/

components/

Navbar.tsx

Hero.tsx

About.tsx

Skills.tsx

FeaturedProjects.tsx

CurrentProjects.tsx

Gallery.tsx

Experience.tsx

Certificates.tsx

Contact.tsx

Footer.tsx

components/ui/

Button.tsx

Badge.tsx

Card.tsx

Progress.tsx

Timeline.tsx

lib/

constants.ts

public/

projects/

project-1.jpg

project-2.jpg

project-3.jpg

profile.jpg

styles/

globals.css
```

---

# UI Feeling

Website harus memberikan kesan:

- Modern
- Premium
- Minimalis
- Elegan
- Cepat
- Bersih
- Tidak ramai warna
- Fokus pada isi project
- Nyaman dibaca
- Banyak whitespace
- Animasi halus
- Profesional seperti portfolio software engineer kelas internasional.

```
**Catatan tambahan:** Untuk implementasi di Next.js, gunakan **App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, serta komponen UI seperti **shadcn/ui** agar tampilan konsisten, modern, dan mudah dikembangkan. Untuk gambar project, gunakan rasio **16:9** dengan screenshot berkualitas tinggi sehingga setiap project terasa seperti sebuah studi kasus (case study), bukan sekadar kartu project biasa.
```
