// File: scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Menghindari halaman refresh

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        document.getElementById('contact-form').reset();  // Reset form
    } else {
        alert("Tolong isi semua kolom!");
    }
});
