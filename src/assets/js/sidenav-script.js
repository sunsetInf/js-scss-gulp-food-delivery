//settings for selected/around links
const linkRegEx = /\w+[-]*\w*.html/gm;
var currentHref = window.location.href;
currentHref = currentHref.match(linkRegEx)[0];

var linkSelect = document.querySelector(`a.sidenav__menu-link[href="${currentHref}"]`);
linkSelect = linkSelect.closest(".sidenav__menu-item");
linkSelect.classList.add("sidenav__menu-item--selected");
//SET "around select" class for around items
linkSelect.previousElementSibling.classList.add("sidenav__menu-item--around-top-select");
linkSelect.nextElementSibling.classList.add("sidenav__menu-item--around-bot-select");


const sidenavLinks = document.querySelectorAll("a.sidenav__menu-link");
for (link of sidenavLinks) {
  // inserting the load-screen before folow to link
  link.addEventListener("click", function (e) {
    const href = e.target.parentNode.getAttribute("href");
    e.preventDefault();
    const loadscreen = document.querySelector(".load-screen__wrapper");
    loadscreen.classList.add("load-screen__wrapper--spawn");
    if (href === "#")
      setTimeout(() => {
        loadscreen.classList.remove("load-screen__wrapper--spawn");
      }, 5000);
    else {
      setTimeout(() => (window.location = href), 250);
    }
  });
}
