(async () => {
  const res = await fetch("./json/data.json");
  if (!res.ok) {
    throw new Error("Impossible de fetch");
  }
  const data = await res.json();
  // console.log(data);
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
    // console.log(this);
    // console.log(mediaPhotographer);
    let imgId = this.getAttribute("data-img-id");
    // console.log(mediaPhotographer[imgId]);
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
