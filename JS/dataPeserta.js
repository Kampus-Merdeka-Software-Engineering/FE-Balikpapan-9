// Add Data
const popupAddData = document.querySelector(".addData");
const addData = document.querySelector(".add");
const cancelAdd = document.querySelector(".cancelForm");

// Edit Data
const popupEditData = document.querySelector(".editData");
const cancelEdit = document.querySelector('.cancelEdit');

// Pop Up Add Data
function popupOpenForm() {
    popupAddData.style.display = "block";
}
function popupCloseForm() {
    popupAddData.style.display = "none";
}

// Pop Up Edit Data
function popupCloseEdit() {
    popupEditData.style.display = "none";
}

// Show Popup Add Data
addData.addEventListener('click', popupOpenForm);
// Close Popup Add Data
cancelAdd.addEventListener('click', popupCloseForm);
// Close Popup Edit Data
cancelEdit.addEventListener('click', popupCloseEdit);


// POST - CREATE Method
const nama = document.getElementById('Name');
const gender = document.getElementById('Gender');
const age = document.getElementById('Age');
const email = document.getElementById('Email');
const no_telepon = document.getElementById('WhatsApp');
const course = document.getElementById('Course');
const submitForm = document.querySelector('.sendForm');

submitForm.addEventListener('click', popupCloseForm);

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
    .then(result => {
        console.log(result);
        location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
})



// GET - READ Method
const tBody = document.querySelector('.pesertaTable');

fetch('https://be-balikpapan-9-production.up.railway.app/peserta')
.then(response => response.json())
.then(data => {

    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'pesertaData');
        tBody.appendChild(tableRow);
        const pesertaData = document.getElementsByClassName('pesertaData');
        pesertaData[i].innerHTML = `
            <td>${[i + 1]}</td>
            <td>${Data[i].nama}</td>
            <td>${Data[i].gender}</td>
            <td>${Data[i].usia}</td>
            <td>${Data[i].email}</td>
            <td>${Data[i].no_telepon}</td>
            <td>${Data[i].course.title}</td>
            <td>
                <div class="table-btn">
                    <button data-id="${Data[i].id}" class="fa fa-pen edit"></button>
                    <button data-id="${Data[i].id}" class="fa fa-trash delete"></button>
                </div>
            </td>
        `
        // Update
        updateButton()
        // Delete
        deleteButton()
    };
})
.catch(error => {
    console.log(error);
})



// PATCH - UPDATE Method
function updateButton() {
    const updateData = document.querySelectorAll('.edit');
    updateData.forEach((e) => {
        e.addEventListener('click', function() {
            popupEditData.style.display = "block";
            // GET ID
            const dataId = this.getAttribute('data-id')

            // Element Data
            const nama = document.getElementById('editName');
            const gender = document.getElementById('editGender');
            const age = document.getElementById('editAge');
            const email = document.getElementById('editEmail');
            const no_telepon = document.getElementById('editWhatsApp');
            const course = document.getElementById('editCourse');
            const submitForm = document.querySelector('.sendEdit');
            
            submitForm.addEventListener('click', popupCloseEdit);

            submitForm.addEventListener('click', function() {               
                const data = {
                    nama: nama.value,
                    gender: gender.value,
                    usia: parseInt(age.value),
                    email: email.value,
                    no_telepon: no_telepon.value,
                    title: course.value 
                }
                
                // Validasi formulir
                if (!nama.checkValidity() || !gender.checkValidity() || !age.checkValidity() || !email.checkValidity() || !no_telepon.checkValidity() || !course.checkValidity()) {
                    // Validasi gagal, tampilkan pesan atau lakukan sesuatu
                    alert('Silakan isi semua field dengan benar.');
                    return; // Hentikan proses submit formulir
                }
                        
                fetch(`https://be-balikpapan-9-production.up.railway.app/peserta/${dataId}`, {
                    method: 'PATCH',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    location.reload();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            })
        })
    })
}



// DELETE Method
function deleteButton() {
    const deleteData = document.querySelectorAll('.delete');
    deleteData.forEach((e) => {
        e.addEventListener('click', function() {
            // GET ID 
            const dataId = this.getAttribute('data-id');

            fetch(`https://be-balikpapan-9-production.up.railway.app/peserta/${dataId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
    })
}

