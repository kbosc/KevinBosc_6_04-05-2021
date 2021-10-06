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

  document.querySelectorAll("#filter li").forEach((element) => {
    element.addEventListener("click", function () {
      displayMediasByTag.call(this, data.media);
    });
  });

  document.querySelectorAll(".count-like span").forEach((e) => {
    e.addEventListener("click", generateCounterLike);
  });
});

document.querySelector("#modal-btn").addEventListener("click", validateForm);

//  // Utilisation du currentPhotographer pour le nom dans la modal 1
//  photographerNameModal1 = document.querySelector(
//   ".modal__wrapper__title span"
// );
// photographerNameModal1.textContent = currentPhotographer.name;
// // Utilisation du currentPhotographer pour le nom dans l'enchoche en bas à droite (daly-rate)
// photographerDailyRate = document.querySelector(".daily-rate");
// photographerDailyRate.lastElementChild.textContent =
//   currentPhotographer.price + "€ / jour";
