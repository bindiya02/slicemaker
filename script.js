window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 920 || document.documentElement.scrollTop > 420) {
    document.getElementById("move_btn").style.display = "block";
  } else {
    document.getElementById("move_btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
