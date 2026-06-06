const tombol = document.getElementById('magic-btn');

const daftarWarna = ['#0f172a', '#1e293b', '#312e81', '#4c1d95', '#134e4a', '#111827'];
let indexWarna = 0;

tombol.addEventListener('click', function () {

    indexWarna++;

    if (indexWarna >= daftarWarna.length) {
        indexWarna = 0;
}

document.body.style.backgroundColor = daftarWarna[indexWarna];

console.log("Warna berubah ke: " + daftarWarna[indexWarna]);
});
