const submit = document.getElementById('submit');
const username = document.getElementById('Username');
const password = document.getElementById('Password')

submit.addEventListener('click', () => {
    const data = {
        usernameOrEmail: username.value,
        plainPassword: password.value
    };

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
            // Login gagal atau respons tidak sesuai
            console.error('Login failed:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});