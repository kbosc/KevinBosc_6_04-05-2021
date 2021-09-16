document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  const { portfolioHtml, photographerHtml } = PhotographerResumeFactory(
    data.photographers,
    data.media
  );
  const photographerWrapper = document.getElementById("photographer-wrapper");
  const portfolioWrapper = document.getElementById("portfolio-wrapper");
  photographerWrapper.innerHTML = photographerHtml;
  portfolioWrapper.innerHTML = portfolioHtml;

  document
    .querySelector(".photographer__section__btn")
    .addEventListener("click", openModal);

  document.querySelectorAll(".portfolio__card__img").forEach((element) => {
    element.addEventListener("click", openModalImg);
  });
});
// --------------récupération photographerid in url -----------------
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get("photographerid");
// console.log(photographerId);
if (!photographerId) {
  window.location = "/public";
}
let mediaPhotographer = [];
let currentPhotographer;
