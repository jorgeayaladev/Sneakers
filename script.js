const myslide = document.querySelectorAll(".vim"),
  dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 4000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 4000);
}
function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }

  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}


// document.getElementById("buttonlogin").addEventListener( "click", function(){ 

//     console.log('button login clicked');

//     let boxLogin =  document.getElementById('login')

//     console.log(boxlogin.display);

//     boxLogin.display = "block" 

//  } )