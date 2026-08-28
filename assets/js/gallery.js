/* =========================================================
   GALLERY.JS — behaviour for gallery.html
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // /* ---- Footer year ---- */
    // var yearEl = document.getElementById("year");
    // if (yearEl) yearEl.textContent = new Date().getFullYear();

    // /* ---- Navbar solid-on-scroll ---- */
    // var header = document.getElementById("siteHeader");
    // function toggleHeader() {
    //     if (window.scrollY > 60) {
    //         header.classList.add("is-scrolled");
    //     } else {
    //         header.classList.remove("is-scrolled");
    //     }
    // }
    // toggleHeader();
    // window.addEventListener("scroll", toggleHeader);

    /* ---- Filter menu ---- */
    var filterButtons = document.querySelectorAll(".filter-btn");
    var galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filterButtons.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");

            var filter = btn.getAttribute("data-filter");

            galleryItems.forEach(function (item) {
                var category = item.getAttribute("data-category");
                var matches = filter === "all" || category === filter;
                item.classList.toggle("is-hidden-filter", !matches);
            });
        });
    });

    /* ---- View more ---- */
    var viewMoreBtn = document.getElementById("viewMoreBtn");
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener("click", function () {
            document.querySelectorAll(".gallery-item.is-hidden").forEach(function (item) {
                item.classList.remove("is-hidden");
            });
            viewMoreBtn.style.display = "none";
        });
    }

    /* ---- Lightbox ---- */
    var overlay = document.getElementById("lightboxOverlay");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxCaption = document.getElementById("lightboxCaption");
    var closeBtn = document.getElementById("lightboxClose");

    document.querySelectorAll(".gallery-link").forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var imgSrc = link.getAttribute("data-img");
            var title = link.getAttribute("data-title") || "";
            lightboxImg.setAttribute("src", imgSrc);
            lightboxImg.setAttribute("alt", title);
            lightboxCaption.textContent = title;
            overlay.classList.add("is-open");
        });
    });

    function closeLightbox() {
        overlay.classList.remove("is-open");
        lightboxImg.setAttribute("src", "");
    }

    closeBtn.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
    });

});
