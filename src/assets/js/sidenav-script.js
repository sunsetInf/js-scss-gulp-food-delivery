const sidenavLinks = document.querySelectorAll("a.sidenav__menu-link");

for (link of sidenavLinks) {
  const currentHref = window.location.href;
  const linkHref = link.getAttribute("href").replace("#", "");
  console.log(currentHref == linkHref);
  // console.log(linkHref);

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
