const popup = document.querySelector(".popup");
const addData = document.querySelector(".add");
const cancel = document.querySelector(".cancelForm");

// Pop Up Form
function popupOpenForm() {
    popup.style.display = "block";
}
function popupCloseForm() {
    popup.style.display = "none";
}

// Show Popup Add Data
addData.addEventListener('click', popupOpenForm);
// Close Popup
cancel.addEventListener('click', popupCloseForm);



// POST - CREATE Method
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const submitForm = document.querySelector('.sendForm');

submitForm.addEventListener('click', popupCloseForm);

submitForm.addEventListener('click', () => {
    const data = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    fetch('https://be-balikpapan-9-production.up.railway.app/user', {
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



// READ - GET Method
const tBody = document.querySelector('.userTable');

fetch('https://be-balikpapan-9-production.up.railway.app/user')
.then(response => response.json())
.then(data => {
    
    const Data = data.data;
    for (let i = 0; i < Data.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'userData');
        tBody.appendChild(tableRow);
        const userData = document.getElementsByClassName('userData');
        userData[i].innerHTML = `
            <td>${[i + 1]}</td>
            <td>${Data[i].username}</td>
            <td>${Data[i].email}</td>
            <td>${Data[i].password}</td>
            <td>
                <div class="table-btn">
                    <button data-id="${Data[i].id}" class="fa fa-pen edit"></button>
                    <button data-id="${Data[i].id}" class="fa fa-trash delete"></button>
                </div>
            </td>
        `
        // Delete
        deleteButton()
    };
})
.catch(error => {
    console.error('Error:', error);
})



// DELETE Method
function deleteButton() {
    const deleteData = document.querySelectorAll('.delete');
    deleteData.forEach((e) => {
        e.addEventListener('click', function() {
            // GET ID 
            const dataId = this.getAttribute('data-id');

            fetch(`https://be-balikpapan-9-production.up.railway.app/user/${dataId}`, {
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
