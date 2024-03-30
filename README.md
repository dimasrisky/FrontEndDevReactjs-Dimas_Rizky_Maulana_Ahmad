```markdown
# Restaurant

adalah sebuah proyek website Technical Test yang memungkinkan pengguna untuk menemukan daftar restoran lengkap beserta dengan fitur filtering, rating restoran, nama, cuisine, dan lainnya.

## Penjelasan Proyek

## Versi

- **ReactJS**: 18.2.0
- **Node.js**: 20.11.1

## Dependensi beserta penjelasannya

### js-cookie ^3.0.5

Digunakan untuk menyimpan status login yang disimpan dalam cookie, jadi selama status login di dalam cookie belum hilang, maka pengguna bisa mengakses website, status login akan didapatkan jika input Email dan Password benar

### react-router-dom ^6.22.3

Digunakan untuk membuat Route, dan untuk navigasi antar halaman/route pada react

### dotenv ^16.4.5

Digunakan untuk membuat env variabel untuk menyimpan API_KEY dan API_HOST

### fakerjs ^8.4.1

Umumnya digunakan untuk membuat random dummy data, namun pada project ini dikarenakan API yang saya gunakan tidak menyediakan foto profile pengguna pada bagian review di halaman detail restoran, jadi saya memakai fakerjs untuk sebagai foto profile dari review pengguna

### 

## Menjalankan Proyek pada komputer anda

Sebelum memulai, pastikan di komputer anda sudah terinstall nodeJs dan npm

1. **Clone Repositori:**

   ```bash
   git clone https://github.com/dimasrisky/FrontEndDevReactjs-Dimas_Rizky_Maulana_Ahmad.git
   ```

2. **Pindah ke Direktori Proyek:**

   ```bash
   cd FrontEndDevReactjs-Dimas_Rizky_Maulana_Ahmad
   ```

3. **Instal Semua Dependensi:**

   ```bash
   npm install
   ```

4. **Menjalankan Aplikasi:**

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di localhost anda.

## Informasi Login

Meskipun projek ini tidak menggunakan backend, namun penggunaan authentikasi seperti login tetap dibutuhkan sesuai dengan requirement:

- **Email**: user
- **Password**: user123

## Note

- Projek ini masih belum sepenuhnya responsive di beberapa device dan juga tidak disebutkan di requirement, jadi disarankan untuk membukanya pada laptop/desktop
- Batas maksimal request yang bisa diterima yaitu 500, dikarenakan RestAPI yang saya gunakan bersifat FREEMIUM.
- Jika sudah melebihi 500 request, wajib mengganti API_KEY di file .env
- saya kurang paham pada bagian server search filter, yang saya lakukan yaitu ketika user memilih kategori, otomatis akan meminta request lagi ke server untuk mendapatkan restoran dengan kategori tertentu
- Pada bagian daftar restoran, dikarenakan restoran bisa memiliki lebih dari satu Cuisine, jadi yang ditampilkan pada card restoran nya yaitu index pertama dari Cuisine, untuk lebih lengkapnya bisa di cek pada halaman detail restoran

## Cara mendapatkan API_KEY

 - klik link berikut [Travel Advisor API](https://rapidapi.com/apidojo/api/travel-advisor/pricing)
 - pilih paket Basic
 - masuk ke bagian Endpoints
 - copy X-RapidAPI-Key dan X-RapidAPI-Host
 - paste di file .env

```