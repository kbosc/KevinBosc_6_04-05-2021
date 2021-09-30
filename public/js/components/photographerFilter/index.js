function displayPhotographersByTag(photographers) {
  let tag = this.innerHTML.replace("#", "");
  let portfolioWrapper = document.querySelector("#gallery-wrapper");
  portfolioWrapper.innerHTML = generatePortfolioHtml(photographers, tag);
  document.querySelectorAll(".portfolio__card__img").forEach((element) => {
    element.addEventListener("click", openModalImg);
  });
}
