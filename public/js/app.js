const modal = document.getElementById("modal1");

function openModal() {
  console.log("OpenModal");
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
