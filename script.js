const tombol = document.getElementById('magic-btn');

const daftarWarna = ['#121212', '#1a1a2e', '#2d3436', '#4834d4', '#6ab04c', '#eb4d4b'];
let indexWarna = 0;

tombol.addEventListener('click', function () {

    indexWarna++;

    if (indexWarna >= daftarWarna.length) {
        indexWarna = 0;
}

document.body.style.backgroundColor = daftarWarna[indexWarna];

console.log("Warna berubah ke: " + daftarWarna[indexWarna]);
});
