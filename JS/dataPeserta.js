const popup = document.querySelector(".popup")
// Pop Up Dashboard
function popupOpenForm() {
    popup.style.display = "block";
}

function popupCloseForm() {
    popup.style.display = "none";
}


const tBody = document.querySelector('.pesertaTable');

const READ = () => {
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
                        <button id="${Data[i].id}" class="fa fa-pen"></button>
                        <button id="${Data[i].id}" class="fa fa-trash"></button>
                    </div>
                </td>
            `
        };
    })
    .catch(error => {
        console.log(error);
    })
};

READ()



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
        READ()
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

