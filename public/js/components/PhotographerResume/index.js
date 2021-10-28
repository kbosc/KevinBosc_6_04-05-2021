function PhotographerResumeFactory(photographers, medias) {
  // --------------parse ID------------
  const parsed = parseInt(photographerId, 10);
  const found = photographers.find(
    (photographer) => photographer.id === parsed
  );
  if (!found) {
    // window.location = "/public";
    window.open("index.html", "_self");
  }
  // console.log(found);
  currentPhotographer = found;

  //  // Utilisation du currentPhotographer pour le nom dans la modal 1
  photographerNameModal1 = document.querySelector(
    ".modal__wrapper__title span"
  );
  photographerNameModal1.textContent = currentPhotographer.name;
  // // Utilisation du currentPhotographer pour le nom dans l'enchoche en bas à droite (daly-rate)
  photographerDailyRate = document.querySelector(".daily-rate");
  photographerDailyRate.lastElementChild.textContent =
    currentPhotographer.price + "€ / jour";

  const arrayTags = found.tags;
  const photographerHtml = `
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
      alt="Portrait du photographe ${found.name}"
      id="photographer__img"
    />`;

  let portfolioHtml = "";
  let totalLikes = 0;
  medias.forEach((media) => {
    const photographerIdMedia = media.photographerId;
    const parsedMedia = parseInt(photographerIdMedia, 10);
    if (parsed == parsedMedia) {
      mediaPhotographer[media.id] = media;
      portfolioHtml += MediaFactory(media, found);
      totalLikes += media.likes;
    }
  });
  document.querySelector(".daily-rate p span").innerHTML = totalLikes;
  return {
    portfolioHtml,
    photographerHtml,
  };
}
