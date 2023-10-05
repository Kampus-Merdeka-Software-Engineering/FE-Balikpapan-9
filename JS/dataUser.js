// Pop Up Dashboard
function popupOpenForm() {
    document.getElementById("addFormUser").style.display = "block";
}
  
function popupCloseForm() {
    document.getElementById("addFormUser").style.display = "none";
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
 