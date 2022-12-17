const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("click", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "false")
        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.querySelector("i").classList.toggle("fa-sun");
    document.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        document.querySelector("i").classList.add("fa-sun");
    }
    else {
        document.querySelector("i").classList.add("fa-moon");
    }

})