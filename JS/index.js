// Slide Home Alumni

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonials");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  x[slideIndex-1].style.display = "block";
}


// Hamburger Button

function openNav() {
  document.getElementById("sideNav").style.width = "380px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}