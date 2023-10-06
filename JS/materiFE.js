const materialCourse = document.querySelector('.materialCourse');
const upperInformation = document.querySelector('.informationCourse')

const GET = () => {
    
    fetch ('https://be-balikpapan-9-production.up.railway.app/course')
    .then((response) => response.json())
    .then(data => {
        const information = data.data
        const courseId = 3
        
        const courseData = information.find(course => course.id === courseId);

        upperInformation.innerHTML = `
        <div class="leftImages" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="800">
            <img src="${courseData.image}" alt="${courseData.title}">
            <div class="dateInformation">
                <img src="img/CalendarCheck.png" alt="Icon">
                <p>${courseData.start_date} - ${courseData.end_date} (16 Sesi Live)</p>
            </div>
        </div>
        <div class="rightTitleInformation" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="800">
            <p>EduNine Course</p>
            <h1>${courseData.title}</h1>
            <h4>${courseData.content}</h4>
            <a href="daftar.html">Daftar Sekarang</a>
        </div>`;
    })
    .catch(error => {
        console.log(error);
    })

    fetch ('https://be-balikpapan-9-production.up.railway.app/materi/course/3')
    .then((response) => response.json())
    .then(data => {
        const list = data.data;
        
        for (let i = 0; i < list.length; i++) {
            const ulMateri = document.createElement('ul');
            const liMateri = document.createElement('li');
            liMateri.textContent = list[i].materi;
            ulMateri.appendChild(liMateri);
            materialCourse.appendChild(ulMateri);
        }
    })
.    catch(error => {
        console.log(error);
    })

}

GET()