// no js? what

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const dropdown = document.getElementById("dropdown-menu");

    menuBtn.addEventListener("click", () => {
        dropdown.classList.toggle("show-menu");
    });
});