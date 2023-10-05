
const courseContainer = document.querySelectorAll('.itemCourse');

const GET = () => {
    fetch ('https://be-balikpapan-9-production.up.railway.app/course')
    .then((response) => response.json())
    .then(data => {
        const aCourse = data.data;

        for (let i = 0; i < courseContainer.length; i++) {
            courseContainer[i].innerHTML = `
                    <img src="img/course ${aCourse[i].id}.png" alt="${aCourse[i].title}">
                    <h3>${aCourse[i].title}</h3>
                    <p>Sudah 100+ Alumni!</p>
                    <div class="date">
                        <img src="img/CalendarCheck.png" alt="">
                        <h6>${aCourse[i].start_date}</h6>
                    </div>
                `;
            }
        }
    
    )
    .catch(error => {
        console.log(error);
    })
};

GET()