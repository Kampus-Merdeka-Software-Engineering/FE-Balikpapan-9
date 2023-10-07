let popup = document.getElementById("popup");

// Pop Up Confirmation + Discord
function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}

// POST - CREATE Method
const nama = document.getElementById('Name');
const gender = document.getElementById('Gender');
const age = document.getElementById('Age');
const email = document.getElementById('Email');
const no_telepon = document.getElementById('WhatsApp');
const course = document.getElementById('Course');
const submitForm = document.querySelector('.sendForm');

submitForm.addEventListener('click', () => {
    // Validasi formulir
    if (!nama.checkValidity() || !gender.checkValidity() || !age.checkValidity() || !email.checkValidity() || !no_telepon.checkValidity() || !course.checkValidity()) {
        // Validasi gagal, tampilkan pesan atau lakukan sesuatu
        alert('Silakan isi semua field dengan benar.');
        return; // Hentikan proses submit formulir
    }
    
    const data = {
        nama: nama.value,
        gender: gender.value,
        usia: parseInt(age.value),
        email: email.value,
        no_telepon: no_telepon.value,
        title: course.value 
    }

    fetch('https://be-balikpapan-9-production.up.railway.app/peserta', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Success POST/CREATE Peserta') {
            // Daftar berhasil, tampilkan popup berhasil dan link join discord
            openPopup();
        } else {
            // Daftar gagal atau respons tidak sesuai
            console.error('Daftar Course Failed:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})