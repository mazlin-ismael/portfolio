var nav = document.querySelector("nav")
var x3Bars = document.getElementById("bars-3-icon")
var xIcon = document.getElementById("x-icon")

x3Bars.onclick = () => nav.classList.toggle("hidden")
xIcon.onclick = () => nav.classList.toggle("hidden")


var swiperDesktop = document.querySelector(".swiper-desktop")

if (window.innerHeight > window.innerWidth) {
    swiperDesktop.style.width = (window.innerWidth * 0.5) + "px"
    swiperDesktop.style.height = (window.innerHeight * 0.5) + "px"
}
