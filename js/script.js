// Change Background Header
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 vh, add the scroll-header class to the header tag
  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
