// --------------récupération photographerid in url -----------------
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get("photographerid");
console.log(photographerId);
if (!photographerId) {
  window.location = "/public";
}
let mediaPhotographer = [];
let currentPhotographer;
// -----------------Test---------------------
(async () => {
  const res = await fetch("./json/data.json");
  if (!res.ok) {
    throw new Error("Impossible de fetch");
  }
  const data = await res.json();
  console.log(data);
  addPhotographerResume(data.photographers, data.media);
  // addPhotographerImg(data.media, data.photographers);

  const modal = document.getElementById("modal1");
  const modalImg = document.getElementById("modal2");

  function openModal() {
    modal.style.display = "block";
  }
  document
    .querySelector(".photographer__section__btn")
    .addEventListener("click", openModal);

  function closeModal() {
    modal.style.display = "none";
  }
  document.querySelectorAll(".out").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  function openModalImg() {
    modalImg.style.display = "block";
    console.log(this);
    console.log(mediaPhotographer);
    let imgId = this.getAttribute("data-img-id");
    console.log(mediaPhotographer[imgId]);
    if (mediaPhotographer[imgId] != undefined) {
      this.classList.add("active");
      document
        .getElementById("modal-img")
        .setAttribute(
          "src",
          `img/photos/${currentPhotographer.name}/${mediaPhotographer[imgId].image}`
        );
      document.getElementById("modal-title").innerHTML =
        mediaPhotographer[imgId].alt;
    }
  }
  document.querySelectorAll(".portfolio__card__img").forEach((element) => {
    element.addEventListener("click", openModalImg);
  });

  function closeModalImg() {
    modalImg.style.display = "none";
  }
  document
    .querySelectorAll(".modal-img__wrapper__card__cross")
    .forEach((element) => {
      element.addEventListener("click", closeModalImg);
    });
})();

function addPhotographerResume(photographers, media) {
  // --------------parse ID------------
  const parsed = parseInt(photographerId, 10);
  const found = photographers.find(
    (photographer) => photographer.id === parsed
  );
  if (!found) {
    // window.location = "/public";
    window.open("index.html", "_self");
  }
  console.log(found);
  currentPhotographer = found;
  const photographerWrapper = document.getElementById("photographer-wrapper");
  const arrayTags = found.tags;
  photographerWrapper.innerHTML = `
    <div class="photographer__section">
    <div class="photographer__section__about">
      <h2 class="photographer__section__about__artist">${found.name}</h2>
      <h3 class="photographer__section__about__location">${found.city}, ${
    found.country
  }</h3>
      <p class="photographer__section__about__text">
      ${found.tagline}
      </p>
      <ul id="filter">
      ${arrayTags
        .map((element) => {
          return `<li>#${element}</li>`;
        })
        .join("")}
      </ul>
    </div>
    <button class="photographer__section__btn btn" type="button">
      Contactez-moi
    </button>
  </div>
  <img
    src="img/photos/Photographers/${found.portrait}"
    alt=""
    id="photographer__img"
  />`;

  const portfolioWrapper = document.getElementById("portfolio-wrapper");
  let cards = "";
  media.forEach((media) => {
    const photographerIdMedia = media.photographerId;
    const parsedMedia = parseInt(photographerIdMedia, 10);
    if (parsed == parsedMedia) {
      mediaPhotographer[media.id] = media;
      if (media.video) {
        cards += `<div class="portfolio__card">
        <a href="#" class="portfolio__card__img" data-img-id="${media.id}">
          <video
          controls
            src="img/photos/${found.name}/${media.video}"
            alt=""
            class="portfolio-card-img"
          /video>
        </a>
        <div class="portfolio__card__about">
          <p>${media.title}</p>
          <div class="count-like">
            <span>${media.likes}</span>
            <!-- <p>12</p> -->
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="like"
              aria-label="like"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </div>
        </div>
      </div>`;
      }
      if (media.image) {
        cards += `<div class="portfolio__card">
        <a href="#" class="portfolio__card__img" data-img-id="${media.id}">
          <img
            src="img/photos/${found.name}/${media.image}"
            alt=""
            class="portfolio-card-img"
          />
        </a>
        <div class="portfolio__card__about">
          <p>${media.title}</p>
          <div class="count-like">
            <span>${media.likes}</span>
            <!-- <p>12</p> -->
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="like"
              aria-label="like"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </div>
        </div>
      </div>`;
      }
      // test-------------
    }
  });
  portfolioWrapper.innerHTML = cards;
}
