const materiAjar = document.querySelector('.materialCourse');

const GET = () => {
    fetch ('https://be-balikpapan-9-production.up.railway.app/materi/course/1')
    .then((response) => response.json())
    .then(data => {
        const list = data.data;
        
        for (let i = 0; i < list.length; i++) {
            let ulMateri = document.createElement('ul');
            ulMateri.setAttribute('class', 'listMateri');
            materiAjar.appendChild(ulMateri);
            let listMateri = document.getElementsByClassName('listMateri');
            listMateri[i].innerHTML = `
                <li>${list[i].materi}</li>
            `
        }
    })
.   catch(error => {
        console.log(error);
    })
}

GET()