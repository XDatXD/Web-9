'use strict';

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu=document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

const navElemArr = [menuBtn, closeBtn, overlay];

for(let i = 0 ; i<navElemArr.length;i++){
    navElemArr[i].addEventListener("click", ()=>{
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle('active');
    });
}


const header = document.querySelector(".header");
const goTopBtn = document.querySelector(".btn-top");
window.addEventListener("scroll", function(){
    if(this.window.scrollY>=200){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    }else{
        goTopBtn.classList.remove("active");
        header.classList.remove("active");
    }
});