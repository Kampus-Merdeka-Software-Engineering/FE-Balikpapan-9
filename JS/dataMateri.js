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