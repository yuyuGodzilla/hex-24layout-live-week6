import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// console.log("Hello world!");

// 搜尋欄

const searchInput = document.querySelector("#headerSearch");
const searchLabel = document.querySelector(".input-group-text");
const navbarContent = document.querySelector("#navbarSupportedContent");
const navbarMenuIcon = document.querySelector("#navbar-menu-icon");
const navbarCloseIcon = document.querySelector("#navbar-close-icon");

const navbarToggleBtn = document.querySelector("#navbar-toggle-btn");

// console.log(searchLabel);

searchInput.addEventListener("focus",function(e){
    // console.log("搜尋欄");
    searchLabel.classList.remove("text-gray-300");
    searchLabel.classList.add("text-gray-600");
})

searchInput.addEventListener("blur", function(e){
    // console.log("離開搜尋");
    searchLabel.classList.remove("text-gray-600");
    searchLabel.classList.add("text-gray-300");
})

navbarToggleBtn.addEventListener("click", function(e){
    if(navbarContent.classList.contains("show")){
        navbarContent.classList.remove("show");
        navbarMenuIcon.classList.remove("d-none");
        navbarCloseIcon.classList.add("d-none");
        navbarContent.classList.remove("navbar-hamburger")
    }else{
        navbarContent.classList.add("show");
        navbarCloseIcon.classList.remove("d-none");
        navbarMenuIcon.classList.add("d-none");
        navbarContent.classList.add("navbar-hamburger")
    }
})