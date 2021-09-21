function PhotographerCardsFactory(photographers) {
  const html = photographers.reduce((acc, photographer) => {
    const { tags } = photographer; // tableaux des tags des photographes
    acc += `
        <div class="gallery__card">
             <a href="photographer-page.html?photographerid=${
               photographer.id
             }" class="gallery__card__artist">
               <img
                 src="img/photos/Photographers/${photographer.portrait}"
                 alt=""
                 class="gallery__card__artist__img"
               />
               <h2 class="gallery__card__artist__name">${photographer.name}</h2>
             </a>
             <section class="gallery__card__about">
               <h3 class="gallery__card__about__location">${
                 photographer.city
               }, ${photographer.country}</h3>
               <p class="gallery__card__about__text">
               ${photographer.tagline}
               </p>
               <p class="gallery__card__about__rates">${
                 photographer.price
               }€/jour</p>
             </section>
             <ul>
               ${tags
                 .map((element) => {
                   return `<li>#${element}</li>`;
                 })
                 .join("")}
             </ul>
           </div>`;

    return acc;
  }, "");
  return html;
}
