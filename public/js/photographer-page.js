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
  // document.querySelectorAll(".count-like span").forEach((e) => {
  //   e.addEventListener("click", function () {
  //     counterLike.call(this, data.media);
  //     console.log("click");
  //   });
  // });
  console.log(data);
  console.log(data.media[0].likes);
  console.log(data.media);
  console.log(data.media.likes);
});

function generateCounterLike() {
  console.log(this);
  console.log(this.textContent);
  let likes = parseInt(this.textContent, 10);
  let incrementLikes = likes + 1;
  let decrementLikes = likes - 1;

  if (this.classList.contains("liked")) {
    this.classList.remove("liked");
    this.innerHTML = decrementLikes;
  } else {
    this.classList.add("liked");
    this.innerHTML = incrementLikes;
  }

  // let input = document.getElementById("compteur");
  // let counter = document.querySelectorAll(".count-like span").forEach((e) => {
  // return e;
  // });
  // let text = counter.textContent;
  // let input = document.querySelectorAll(".count-like span");
  // let text = input.textContent;
  // text.innerHtml = 36;
  // console.log(counter);
  // return text;
}

// function displayMediasByTag(medias) {
//   let tag = this.innerHTML.replace("#", "");
//   let portfolioWrapper = document.querySelector("#portfolio-wrapper");
//   portfolioWrapper.innerHTML = generatePortfolioHtml(medias, tag);
//   document.querySelectorAll(".portfolio__card__img").forEach((element) => {
//     element.addEventListener("click", openModalImg);
//   });
// }

// function counterLike(media, likes) {
//   let count = this;
//   let counter = media.likes;
//   count.textContent = 32;
//   // let elt.innerHTML = elt.textContent;
//   console.log(counter);
// }

// function generatePortfolioHtml(photographers, tag) {
//   const photographerFilters = photographers.filter((photographer) => {
//     // console.log(photographer.tags);
//     // console.log(tag);
//     return photographer.tags.includes(tag.toLowerCase());
//   });
//   // console.log(tag);
//   // console.log(photographerFilters);
//   // console.log(photographers);
//   return PhotographerCardsFactory(photographerFilters);
// }

// function generatePortfolioHtml(medias, tag) {
//   let portfolioHtml = "";
//   medias.forEach((media) => {
//     const photographerIdMedia = parseInt(media.photographerId, 10);
//     if (
//       photographerId == photographerIdMedia &&
//       ("all" == tag || media.tags.includes(tag))
//     ) {
//       portfolioHtml += MediaFactory(media, currentPhotographer);
//     }
//   });

//   return portfolioHtml;
// }

// function generateCounterLike(medias, likes) {
//   let likeHTML = "";
//   medias.forEach((media, medialike) => {
//     let input = document.getElementById("compteur");
//     let text = input.textContent;
//     const photographerIdMedia = parseInt(media.photographerId, 10);
//     if (
//       photographerId == photographerIdMedia &&
//       parseInt(media.like, 10) == text
//     ) {
//       likeHTML = media.like + 1;
//     }
//     // console.log(input);
//     // console.log(likeHTML);
//     // console.log(photographerId);
//     // console.log(photographerIdMedia);
//     console.log(media.like);
//     return likeHTML;
//   });

// const photographerLikes = medias.filter((media, like) => {
//   // console.log(photographer.tags);
//   return media.like;
// });
// console.log(photographerLikes);
// return (photographerLikes.textContent += 1);
