const submit = document.getElementById('submit');
const username = document.getElementById('Username');
const password = document.getElementById('Password');

submit.addEventListener('click', () => {
    const data = {
        usernameOrEmail: username.value,
        plainPassword: password.value
    };

    // Validasi formulir
    if (!username.checkValidity() || !password.checkValidity() ){
        // Validasi gagal, tampilkan pesan atau lakukan sesuatu
        alert('Silakan isi semua field dengan benar.');
        return; // Hentikan proses submit formulir
    }

    fetch('https://be-balikpapan-9-production.up.railway.app/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.message === 'Login Success') {
            // Login berhasil, arahkan pengguna ke Google.com
            window.location.href = 'https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-9/admin-dashboard';
        } else {
            // Login gagal, tampilkan pesan kesalahan
            alert('Login gagal. Periksa kembali username dan password Anda.');
            // Login gagal atau respons tidak sesuai
            console.error('Login failed:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});