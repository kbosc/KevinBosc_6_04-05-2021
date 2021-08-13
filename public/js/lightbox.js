class Lightbox {
  static init() {
    // const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
    const links = document
      .querySelectorAll('img[src$=".jpg"], img[src$=".mp4"]')
      // .querySelectorAll('portfolio-card-img[src$=".jpg"]')
      .forEach((link) =>
        link.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(e);
          //   new Lightbox(e.currentTarget.getAttribute("href"));
          new Lightbox(e.currentTarget.getAttribute("src"));
        })
      );
  }

  // @param {string} url Url de l'image
  constructor(url) {
    const element = this.buildDom(url);
    document.body.appendChild(element);
  }
  // @param {string} url Url de l'image
  // @return {HTMLElement}
  buildDom(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `<button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précédent</button>
    <div class="lightbox__container">
      <img src="https://picsum.photos/900/1800" alt="" />
    </div>`;
    return dom;
  }
}

/* 
    <div class="lightbox">
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
        <img src="https://picsum.photos/900/1800" alt="" />
      </div>
    </div> 
*/

Lightbox.init();
