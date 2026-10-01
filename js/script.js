// Fungsi untuk melakukan pencarian data kendaraan
function cariData() {
    // Mengambil nilai input dari elemen dengan ID searchInput
    const input = document.getElementById('searchInput');
    const keyword = input.value.trim();

    // Validasi jika inputan kosong
    if (keyword === '') {
        alert('Silakan masukkan kata kunci pencarian terlebih dahulu!');
        input.focus();
        return;
    }

    // Proses pencarian
    console.log('Mencari data kendaraan dengan kata kunci:', keyword);
    alert('Memproses pencarian untuk: "' + keyword + '"');
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const userIcon = document.getElementById('userIcon');

    // 1. Event Listener untuk Tekan ENTER pada Input Pencarian
    if (searchInput) {
        searchInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Mencegah form reload halaman
                cariData(); // Memanggil fungsi pencarian
            }
        });
    }

    // 2. Event Listener untuk Pindah Halaman saat Gambar Orang/User Klik
    if (userIcon) {
        userIcon.addEventListener('click', function () {
            // Ganti 'login.html' sesuai nama file halaman login Anda
            window.location.href = 'login.html'; 
        });
    }
});