# Alfin Syahrin — Portfolio

Website portfolio pribadi, dibangun sesuai `design.md`: Next.js 14 (App Router), TypeScript, Tailwind CSS, dan Framer Motion.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur proyek

```
app/
  layout.tsx        # Root layout + font Inter
  page.tsx           # Menyusun seluruh section
  globals.css
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
  ui/
    Button.tsx        # dengan ripple effect
    Badge.tsx
    Card.tsx           # hover naik + shadow
    Progress.tsx        # progress bar animasi
    SectionHeading.tsx
lib/
  constants.ts         # semua data (skills, projects, experience, dll)
public/
  profile.svg           # placeholder foto profil
  projects/*.svg          # placeholder gambar project
```

## Yang perlu kamu ganti

1. **Foto profil** — ganti `public/profile.svg` dengan foto asli kamu (`profile.jpg`, lalu update path di `components/Hero.tsx`).
2. **Screenshot project** — ganti file di `public/projects/` dengan screenshot asli (rasio 16:9, kualitas tinggi).
3. **Data pribadi** — semua teks, link Github/LinkedIn/Instagram, email, skill, project, sertifikat, dan pengalaman ada di satu tempat: `lib/constants.ts`. Tidak perlu menyentuh komponen untuk mengubah isi konten.
4. **Resume/CV** — tambahkan file `resume.pdf` ke folder `public/` supaya tombol "Download CV" dan "Resume" berfungsi.
5. **Form kontak** — tombol "Send Message" saat ini membuka email client (`mailto:`). Jika ingin form kontak sungguhan, tinggal ganti `components/Contact.tsx` dengan form + API route atau layanan seperti Resend/Formspree.

## Catatan implementasi

- Warna, font, radius, shadow, spacing mengikuti token di `design.md` secara persis, didefinisikan di `tailwind.config.ts`.
- Navbar berubah jadi putih transparan + blur + shadow tipis saat discroll, dan menjadi hamburger menu di mobile.
- Setiap section muncul dengan fade animation saat discroll (Framer Motion `whileInView`), dan Hero fade-in bertahap saat halaman dibuka.
- Featured Projects menggunakan layout bergantian kiri-kanan (image ↔ text) sesuai spesifikasi.
- Currently Building & Experience menggunakan timeline vertical dengan garis penghubung.
- Card skill & certificate naik 6px saat hover; gambar project di-zoom 1.03x saat hover; button punya ripple effect saat diklik.
- Semua gambar sudah pakai `next/image` untuk optimasi otomatis.

## Build untuk production

```bash
npm run build
npm run start
```
