console.log('dashboard loaded');

// Data dummy untuk Chart.js (untuk keperluan demo)
const dataHarga = {
    labels: ['Agu 1', 'Agu 15', 'Sep 1', 'Sep 15', 'Okt 1', 'Okt 15', 'Nov 1', 'Nov 15 (Skrg)','Prediksi +10', 'Prediksi +20', 'Prediksi +30'],
    datasets: [{
        label: 'Harga Aktual (Rp/Kg)',
        data: [4900, 4850, 4950, 5000, 5100, 5150, 5200, 5250, null, null, null],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
        fill: false,
    }, {
        label: 'Prediksi (Rp/Kg)',
        data: [null, null, null, null, null, null, null, 5250, 5320, 5400, 5480],
        borderColor: 'rgb(255, 99, 132)',
        borderDash: [5, 5], // Garis putus-putus untuk prediksi
        tension: 0.2,
        fill: false,
    }]
};

// Konfigurasi Chart.js
const config = {
    type: 'line',
    data: dataHarga,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Prediksi Harga Harian Jagung'
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Harga (Rp)'
                }
            }
        }
    }
};

// Inisialisasi Chart saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('predictionChart');
    if (ctx) {
        new Chart(ctx, config);
        console.log('Chart prediksi berhasil diinisialisasi.');
    }
});
