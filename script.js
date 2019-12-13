const header = document.getElementsByClassName('header');
const nav = document.getElementsByClassName('nav');

const navHeight = nav.offsetHeight;
const headerHeight = header.offsetHeight;

header.style.height = screen.style.height - navHeight;

function init(){
 if(window.pageYOffset > headerHeight){
     nav.style.position ="fixed";
     nav.style.top = "0";
 }else{
    nav.style.position ="absolute";
    nav.style.top = "0";
 }
}

window.addEventListener("scroll", init);

