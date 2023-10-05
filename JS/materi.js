fetch ('https://be-balikpapan-9-production.up.railway.app/materi/course/1')
.then((response) => response.json())
.then(data => {
    console.log('data');
})