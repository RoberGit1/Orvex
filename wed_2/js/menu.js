// ===============================
//  NAV DESKTOP (Mega-Menu)
// ===============================
const menuProductos = document.querySelector(".productos");
const megaMenu = document.querySelector("#mega-menu");

// Cuando el mouse entra a "Productos"
menuProductos.addEventListener("mouseenter", () => {
    megaMenu.classList.add("show");
});

// Cuando el mouse entra al mega menu
megaMenu.addEventListener("mouseenter", () => {
    megaMenu.classList.add("show");
});

// Cuando el mouse sale de "Productos"
menuProductos.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!megaMenu.matches(":hover")) {
            megaMenu.classList.remove("show");
        }
    }, 150);
});

// Cuando el mouse sale del mega menu
megaMenu.addEventListener("mouseleave", () => {
    megaMenu.classList.remove("show");
});

