// 1. Ambil tombol dari HTML
const tombol = document.getElementById('magic-btn');

// 2. Siapkan daftar warna keren
const daftarWarna = [
    '#121212',
        '#1a1a2e',
            '#2d3436',
                '#4834d4',
                    '#6ab04c',
                        '#eb4d4b'
                        ];

                        let indexWarna = 0;

                        // 3. Fungsi untuk ganti warna saat diklik
                        tombol.addEventListener('click', function () {

                            // Geser ke warna berikutnya
                                indexWarna++;

                                    // Kalau sudah sampai akhir, balik ke warna pertama
                                        if (indexWarna >= daftarWarna.length) {
                                                indexWarna = 0;
                                                    }

                                                        // Terapkan warna ke background body
                                                            document.body.style.backgroundColor = daftarWarna[indexWarna];

                                                                // Pesan di Console
                                                                    console.log("Warna berubah ke: " + daftarWarna[indexWarna]);
                                                                    });