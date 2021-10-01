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

function generateCounterLike() {
  totalLikes = document.querySelector(".daily-rate p span");
  let likes = parseInt(this.textContent, 10);
  let incrementLikes = likes + 1;
  let decrementLikes = likes - 1;

  if (this.classList.contains("liked")) {
    this.classList.remove("liked");
    this.innerHTML = decrementLikes;
    totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) - 1;
  } else {
    this.classList.add("liked");
    this.innerHTML = incrementLikes;
    totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) + 1;
  }
}

// function generateCounterLike() {
//   totalLikes = document.querySelector(".daily-rate p span");

//   document.querySelectorAll(".count-like span").forEach((e) => {
//     let likes = parseInt(e.textContent, 10);
//     let incrementLikes = likes + 1;
//     let decrementLikes = likes - 1;
//     if (this.classList.contains("liked")) {
//       this.classList.remove("liked");
//       e.innerHTML = decrementLikes;
//       totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) - 1;
//     } else {
//       this.classList.add("liked");
//       e.innerHTML = incrementLikes;
//       totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) + 1;
//     }
//   });
// }
