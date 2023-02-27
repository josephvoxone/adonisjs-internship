# Proyek Adonis

Proyek Adonis ini dibuat oleh seorang anak magang dari Universitas Negeri Surabaya yang bekerja di Japfa Comfeed Indonesia. Proyek ini bertujuan untuk mempelajari dan mengimplementasikan framework Adonis.

## Lingkungan Pengembangan

- Node.js v14.17.6
- Adonis CLI v4.1.0
- PostgreSQL 13.4

## Konfigurasi

1. Clone repositori ini.
2. Install dependency dengan menjalankan perintah `npm install`.
3. Buat file `.env` dengan mengcopy `.env.example`.
4. Sesuaikan konfigurasi database pada file `.env`.
5. Jalankan migrasi dengan perintah `adonis migration:run`.
6. Jalankan aplikasi dengan perintah `npm start`.

## Fitur

- Soft delete pada tabel Karyawan, PPL, Kandang, Laporan dan Log Harian.
- CRUD operasi pada tabel Karyawan, PPL, Kandang, Laporan dan Log Harian.
- Middleware untuk validasi input data Karyawan, PPL, Kandang, Laporan dan Log Harian.
- Middleware untuk autentikasi JWT.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Silakan lihat `LICENSE` untuk detailnya.