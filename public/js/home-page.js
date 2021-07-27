// ------------CONTENT BTN----------------
window.addEventListener("scroll", (e) => {
  last_known_scroll_position = window.scrollY;
  const btn = document.getElementById("content");
  if (btn.offsetTop < last_known_scroll_position) {
    btn.style.opacity = 1;
  } else {
    btn.style.opacity = 0;
  }
});
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     btn.classList.add(".active");
//     btn.style.opacity = 0.1;
//   }
// });

(async () => {
  const res = await fetch("./json/data.json");
  if (!res.ok) {
    throw new Error("Impossible de fetch");
  }
  const data = await res.json();
  console.log(data);
  addPhotographerCard(data.photographers);
})();

function addPhotographerCard(photographers) {
  const galleryWrapper = document.getElementById("gallery-wrapper");
  const html = photographers.reduce((acc, photographer) => {
    const arrayTags = photographer.tags; // tableaux des tags des photographes
    console.log(arrayTags);
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
             <h3 class="gallery__card__about__location">${photographer.city}, ${
      photographer.country
    }</h3>
             <p class="gallery__card__about__text">
             ${photographer.tagline}
             </p>
             <p class="gallery__card__about__rates">${
               photographer.price
             }€/jour</p>
           </section>
           <ul>
             ${arrayTags
               .map((element) => {
                 return `<li>#${element}</li>`;
               })
               .join("")}
           </ul>
         </div>`;

    return acc;
  }, "");
  // console.log(html);
  galleryWrapper.innerHTML = html;
}
