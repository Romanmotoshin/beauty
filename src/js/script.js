// Hamburger 

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".navbar")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_close')
    menu.classList.toggle("show")
})
