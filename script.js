function ucapanSelamat() {
    var nama = document.getElementById("nama").value;
    var ucapanDiv = document.getElementById("ucapan");

    if (nama) {
        ucapanDiv.innerHTML = `<p>Halo ${nama}! Semangat menghadapi ujian!</p>`;
    } else {
        ucapanDiv.innerHTML = `<p>Masukkan nama Anda terlebih dahulu.</p>`;
    }
}
