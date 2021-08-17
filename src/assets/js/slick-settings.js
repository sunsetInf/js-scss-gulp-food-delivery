const slideLinks = document.querySelectorAll("[data-go-to-slide]");
for (link of slideLinks) {
  link.onclick = function () {
    for (link2 of slideLinks) link2.style.border = "none";

    const sliderArr = document.querySelectorAll(
      `[data-category-slide-id="${this.dataset.goToSlide}"]`
    );
    const sliderValues = [
      sliderArr[0].dataset.slickIndex,
      sliderArr[1].dataset.slickIndex,
    ];
    sliderValues[0] = Math.abs(sliderValues[0]);
    sliderValues[1] = Math.abs(sliderValues[1]);
    $(".dishes__inner").slick("slickGoTo", Math.min(sliderValues));

    link.style.borderBottom = "3px solid #EA7C69";
    link.style.color = "#EA7C69";
  };
}

$(".dishes__inner").slick({
  arrows: false,
  slidesToScroll: 1,
  slidesToShow: 1,
});