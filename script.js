document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan');
    pesan.innerHTML = `<p>Selamat menghadapi UTS, ${nama}! Dari Bengkulu ke Rajabasa.</p><p>Semangat aja dulu, nanti juga bisa.</p>`;
});
