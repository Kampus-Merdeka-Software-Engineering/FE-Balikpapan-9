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
const course = document.querySelector('#Course');
const materi = document.querySelector('#Materi');
const submitForm = document.querySelector('.sendForm');

submitForm.addEventListener('click', popupCloseForm);

submitForm.addEventListener('click', () => {
    const data = {
        materi: materi.value,
        title: course.value
    }

    // Validasi sebelum mengirim formulir
    if (!validateForm()) {
        submitForm.preventDefault(); // Mencegah pengiriman formulir jika tidak valid
        return;
    }

    fetch('https://be-balikpapan-9-production.up.railway.app/materi', {
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
const tBody = document.querySelector('.materiTable');

fetch('https://be-balikpapan-9-production.up.railway.app/materi')
.then(response => response.json())
.then(data => {

    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr'); 
        tableRow.setAttribute('class', 'materiData');
        tBody.appendChild(tableRow);
        const materiData = document.getElementsByClassName('materiData');
        materiData[i].innerHTML = `
            <td>${[i + 1]}</td>
            <td>${Data[i].course.title}</td>
            <td>${Data[i].materi}</td>
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

            // Validasi sebelum mengirim formulir
            if (!validateForm()) {
                submitForm.preventDefault(); // Mencegah pengiriman formulir jika tidak valid
                return;
            }

            // Element Data
            const course = document.querySelector('#editCourse');
            const materi = document.querySelector('#editMateri');
            const submitForm = document.querySelector('.sendEdit');

            submitForm.addEventListener('click', popupCloseEdit);

            submitForm.addEventListener('click', function() {
                const data = {
                    materi: materi.value,
                    title: course.value
                }
            
                fetch(`https://be-balikpapan-9-production.up.railway.app/materi/${dataId}`, {
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

            fetch(`https://be-balikpapan-9-production.up.railway.app/materi/${dataId}`, {
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

// Validasi Formulir
function validateForm() {
    if (materi.value.trim() === '') {
        alert('Materi harus diisi.');
        return false;
    }

    if (course.value === '') {
        alert('Pilih course.');
        return false;
    }

    return true;
}