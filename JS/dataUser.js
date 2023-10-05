const popup = document.querySelector(".popup")
// Pop Up Dashboard
function popupOpenForm() {
    popup.style.display = "block";
}

function popupCloseForm() {
    popup.style.display = "none";
}



// READ - GET Method
const tBody = document.querySelector('.userTable');

const READ = () => {
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
                        <button id="${Data[i].id}" class="fa fa-pen"></button>
                        <button id="${Data[i].id}" class="fa fa-trash"></button>
                    </div>
                </td>
            `
        };
    })
    .catch(error => {
        console.error('Error:', error);
    })
};

READ()



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
        READ()
    })
    .catch(error => {
        console.error('Error:', error);
    });
})