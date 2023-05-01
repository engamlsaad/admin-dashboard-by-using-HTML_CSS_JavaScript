let lis = document.querySelectorAll(".top li");
lis.forEach((e) => {
    e.addEventListener("click", function () {
        lis.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.classList.add("active");
    })
})

let bars = document.querySelector(".bars");
let sidebar = document.getElementById("sidebar");
bars.addEventListener("click", function () {
    sidebar.classList.toggle("hide");
})
if (this.innerWidth < 768) {
    sidebar.classList.add("hide");
}

let button = document.querySelector(".search-btn");
let svg = document.querySelector(".search-btn .ser");
let svgIcon = document.querySelector(".fa-magnifying-glass");
let notification = document.querySelector(".notification");
let profile = document.querySelector(".profile");
let form = document.querySelector("form");
button.addEventListener("click", function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        form.classList.toggle("show");
        if (form.classList.contains("show")) {
            notification.style.display = "none";
            profile.style.display = "none";
            button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            button.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
        }
    }
})

window.addEventListener("resize", function () {
     if (this.innerWidth < 576) {
        form.classList.remove("show"); 
    }
})

let switched = document.querySelector(".switch");
let page = document.querySelector(".page");
switched.onclick = function () {
    page.classList.toggle("dark");
}