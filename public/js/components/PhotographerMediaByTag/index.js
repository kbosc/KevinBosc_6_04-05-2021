function displayMediasByTag(medias) {
  let tag = this.innerHTML.replace("#", "");
  let portfolioWrapper = document.querySelector("#portfolio-wrapper");
  portfolioWrapper.innerHTML = generatePortfolioHtml(medias, tag);
  document.querySelectorAll(".portfolio__card__img").forEach((element) => {
    element.addEventListener("click", openModalImg);
  });
}
