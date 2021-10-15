const modal = document.getElementById("modal1");
const modalImg = document.getElementById("modal2");

function openModal() {
  modal.style.display = "block";
  document.getElementById("firstname").focus();
}

function closeModal() {
  modal.style.display = "none";
}

document.querySelectorAll(".out").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.querySelectorAll(".chevron-next").forEach((element) => {
  element.addEventListener("click", nextModal);
});

document.querySelectorAll(".chevron-prev").forEach((element) => {
  element.addEventListener("click", prevModal);
});

function openModalImg(e) {
  e.preventDefault();
  modalImg.style.display = "block";
  // console.log(this);
  // console.log(mediaPhotographer);
  let imgId = this.getAttribute("data-img-id");
  // console.log(mediaPhotographer[imgId]);
  if (mediaPhotographer[imgId] != undefined) {
    // Supprime la classe "active" sur l'ancien élément (s'il y en a un)
    removeActive();
    // Ajout de la classe "active" sur l'élément en cours
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

function closeModalImg() {
  modalImg.style.display = "none";
}

function nextModal(event) {
  let nextPortfolioCard = document
    .querySelector(".active")
    .closest(".portfolio__card").nextSibling;
  if (!nextPortfolioCard) {
    nextPortfolioCard = document.querySelector("#portfolio-wrapper").firstChild;
  }
  let nextPortfolioCardImg = nextPortfolioCard.querySelector(
    ".portfolio__card__img"
  );
  removeActive();
  nextPortfolioCardImg.classList.add("active");
  openModalImg.call(nextPortfolioCardImg, event);
}

function prevModal(event) {
  let prevPortfolioCard = document
    .querySelector(".active")
    .closest(".portfolio__card").previousSibling;
  if (!prevPortfolioCard) {
    prevPortfolioCard = document.querySelector("#portfolio-wrapper").lastChild;
  }
  let prevPortfolioCardImg = prevPortfolioCard.querySelector(
    ".portfolio__card__img"
  );
  removeActive();
  prevPortfolioCardImg.classList.add("active");
  openModalImg.call(prevPortfolioCardImg, event);
}

function removeActive() {
  let elementActive = document.querySelector(".portfolio__card__img.active");
  if (elementActive) {
    elementActive.classList.remove("active");
  }
}

document
  .querySelectorAll(".modal-img__wrapper__card__cross")
  .forEach((element) => {
    element.addEventListener("click", closeModalImg);
  });

function keyUpModal(e) {
  if (isVisible(modalImg) && e.code == "ArrowRight") {
    nextModal(e);
  }
  if (isVisible(modalImg) && e.code == "ArrowLeft") {
    prevModal(e);
  }
  if (isVisible(modalImg) && e.code == "Escape") {
    closeModalImg(e);
  }
  if (isVisible(modal) && e.code == "Escape") {
    closeModal(e);
  }
}
function isVisible(el) {
  return window.getComputedStyle(el).display != "none";
}

document.addEventListener("keydown", keyUpModal);
