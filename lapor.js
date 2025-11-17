console.log('lapor loaded');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('laporHargaForm');
    const alertDiv = document.getElementById('alertMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit default

            // Mengambil nilai dari form
            const komoditas = document.getElementById('komoditas').value;
            const lokasi = document.getElementById('lokasi').value;
            const harga = document.getElementById('harga').value;
            const tanggal = document.getElementById('tanggal').value;

            // Membuat pesan sukses
            const message = `
                <div class="alert alert-success" role="alert">
                    <strong>Laporan Berhasil Terkirim!</strong><br>
                    Komoditas: ${komoditas.toUpperCase()}<br>
                    Lokasi: ${lokasi}<br>
                    Harga: Rp ${parseInt(harga).toLocaleString('id-ID')}/Kg<br>
                    Tanggal: ${tanggal}
                </div>
            `;
            
            // Tampilkan pesan di halaman
            alertDiv.innerHTML = message;
            
            // Reset form setelah 3 detik
            setTimeout(() => {
                form.reset();
                alertDiv.innerHTML = '';
            }, 3000);

            console.log('Data Laporan Terkirim:', { komoditas, lokasi, harga, tanggal });
        });
    }
});
