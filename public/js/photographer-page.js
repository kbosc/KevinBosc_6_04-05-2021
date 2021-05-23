const modal = document.getElementById("modal1");

function openModal() {
  modal.style.display = "block";
}
document
  .querySelector(".photographer__section__btn")
  .addEventListener("click", openModal);

function closeModal() {
  console.log("closeModal");
  modal.style.display = "none";
}
document.querySelectorAll(".out").forEach((element) => {
  element.addEventListener("click", closeModal);
});
// -----------modal img------------
const modalImg = document.getElementById("modal2");

function openModalImg() {
  modalImg.style.display = "block";
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
