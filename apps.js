// Navbar Background

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".custom-navbar");

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach(element=>{

const windowHeight = window.innerHeight;

const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);

revealElements();


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});