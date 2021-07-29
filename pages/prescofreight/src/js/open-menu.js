const nav = document.querySelector("header nav");

document.querySelector(".burger-menu").addEventListener("click", function(){
    if(!nav.classList.contains("nav-active")){
        nav.classList.add("nav-active")
    }
    else{
        nav.classList.remove("nav-active")
    }
})