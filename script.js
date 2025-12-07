// Data mobil yang sudah kamu coba
const mobilData = [
    {
        nama: "Honda Freed GB3",
        tahun: 2012,
        gambar: "https://i.ibb.co/GV1zWxS/honda-freed.jpg",
        mesin: "1.5L i-VTEC",
        tenaga: "118 hp",
        transmisi: "Automatic 5-speed",
        konsumsi: "12-14 km/L",
        rating: 4,
        catatan: "Kabinnya lega, nyaman untuk keluarga. Sliding door praktis banget!"
    },
    {
        nama: "TOYOTA CAMRY XV50",
        tahun: 2016,
        gambar: "https://i.ibb.co/1n0cKL4/camry.png",
        mesin: "2.5L",
        tenaga: "178 hp",
        transmisi: "Automatic 6-speed",
        konsumsi: "10-12 km/L",
        rating: 5,
        catatan: "Mewah, nyaman, dan halus banget. Cocok buat perjalanan jauh."
    }
];

// Render ke halaman
const list = document.getElementById("mobil-list");

mobilData.forEach(mobil => {
    list.innerHTML += `
        <div class="card">
            <img src="${mobil.gambar}" alt="${mobil.nama}">
            <h2>${mobil.nama} (${mobil.tahun})</h2>
            <p><strong>Mesin:</strong> ${mobil.mesin}</p>
            <p><strong>Tenaga:</strong> ${mobil.tenaga}</p>
            <p><strong>Transmisi:</strong> ${mobil.transmisi}</p>
            <p><strong>Konsumsi BBM:</strong> ${mobil.konsumsi}</p>
            <p class="rating">⭐ ${mobil.rating}/5</p>
            <p><i>${mobil.catatan}</i></p>
        </div>
    `;
});
