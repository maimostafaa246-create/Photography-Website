/* =========================================================
   SERVICES.JS — behaviour for services.html
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---- Footer year ---- */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Navbar solid-on-scroll ---- */
    var header = document.getElementById("siteHeader");
    function toggleHeader() {
        if (window.scrollY > 60) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }
    toggleHeader();
    window.addEventListener("scroll", toggleHeader);

});
