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

  function openModalImg(e) {
    e.preventDefault();
    modalImg.style.display = "block";
    console.log(this);
    console.log(mediaPhotographer);
    let imgId = this.getAttribute("data-img-id");
    console.log(mediaPhotographer[imgId]);
    if (mediaPhotographer[imgId] != undefined) {
      this.classList.add("active");
      let x = "";
      if (mediaPhotographer[imgId].video) {
        x = video({
          controls: true,
          src: `img/photos/${currentPhotographer.name}/${mediaPhotographer[imgId].video}`,
        });
      }
      if (mediaPhotographer[imgId].image) {
        x = image({
          src: `img/photos/${currentPhotographer.name}/${mediaPhotographer[imgId].image}`,
        });
      }
      document.getElementById("lightbox").innerHTML = x;
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
        cards += videoCard({
          found,
          media,
        });
      }
      if (media.image) {
        cards += imageCard({
          found,
          media,
        });
      }
      // test-------------
    }
  });
  portfolioWrapper.innerHTML = cards;
}
