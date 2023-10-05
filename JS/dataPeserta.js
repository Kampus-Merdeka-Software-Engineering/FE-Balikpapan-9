// Pop Up Dashboard
function popupOpenForm() {
    document.getElementById("addForm").style.display = "block";
}
  
function popupCloseForm() {
    document.getElementById("addForm").style.display = "none";
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
                <td>${Data[i].usia}</td>
                <td>${Data[i].gender}</td>
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