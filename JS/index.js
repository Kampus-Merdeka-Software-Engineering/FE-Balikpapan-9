// Slide Home Alumni

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("testimonials");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  x[slideIndex-1].style.display = "block";
}


// Coba Events Listener
// const openHamburger = document.querySelector("#openNav img")
// const navHamburger = document.querySelector("#sideNav")

// openHamburger.addEventListener("click" , (event) => {
//   navHamburger.style.width = "360px";
// });

// Hamburger Button
function openNav() {
  document.getElementById("sideNav").style.width = "360px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


// Pop Up Dashboard
function popupOpenForm() {
  document.getElementById("addForm").style.display = "block";
}

function popupCloseForm() {
  document.getElementById("addForm").style.display = "none";
}