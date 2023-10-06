const popup = document.querySelector(".popup")
// Pop Up Dashboard
function popupOpenForm() {
    popup.style.display = "block";
}

function popupCloseForm() {
    popup.style.display = "none";
}


const tBody = document.querySelector('.materiTable');

const READ = () => {
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



// POST CREATE Method
const course = document.querySelector('#Course');
const materi = document.querySelector('#Materi');
const submitForm = document.querySelector('.sendForm');

submitForm.addEventListener('click', popupCloseForm);

submitForm.addEventListener('click', () => {
    const data = {
        materi: materi.value,
        title: course.value
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
        READ()
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
