/* =========================================================
   ABOUT.JS — Layout behavior (sticky header, mobile nav,
   dropdown, back-to-top) + About page interactions only.
   No page "business logic" here — this is pure UI-state code.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');
  const navToggler = document.getElementById('navToggler');
  const navbarCollapse = document.getElementById('navbarCollapse');
  const dropdownParent = document.querySelector('.nav-item-dropdown');
  const searchToggle = document.getElementById('searchToggle');

  /* 1) Sticky header — header state depends on scroll position only.
        (No fetch, no server state: pure client UI state.) */
  const SCROLL_THRESHOLD = 50;
  const BACK_TO_TOP_THRESHOLD = 400;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
    backToTop.classList.toggle('show', window.scrollY > BACK_TO_TOP_THRESHOLD);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case the page opens mid-scroll (refresh case)

  /* 2) Back to top */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* 3) Mobile nav toggle (hamburger) */
  navToggler.addEventListener('click', () => {
    const isOpen = navbarCollapse.classList.toggle('show');
    navToggler.setAttribute('aria-expanded', String(isOpen));
  });

  /* 4) "Pages" dropdown:
        - Desktop: CSS :hover already handles it (see about.css)
        - Mobile: needs a click/tap toggle because there's no hover */
  if (dropdownParent) {
    const dropdownLink = dropdownParent.querySelector('.nav-link');
    dropdownLink.addEventListener('click', (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        dropdownParent.classList.toggle('open');
      }
    });
  }

  /* 5) Search icon — placeholder toggle (extension point) */
  if (searchToggle) {
    searchToggle.addEventListener('click', () => {
      // TODO: wire this to a real search overlay/input when the
      // search feature is scoped. Kept as a no-op stub on purpose.
      console.log('Search icon clicked — hook a real search UI here.');
    });
  }

  /* 6) Decorative "play" button on the About hero image.
        Left as an explicit extension point instead of faking a
        working video player. */
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      console.log('TODO: open a real video modal/lightbox here.');
    });
  }
});
