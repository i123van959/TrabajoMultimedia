document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("side-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});