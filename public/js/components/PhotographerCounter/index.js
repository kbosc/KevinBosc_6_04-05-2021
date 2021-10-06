function generateCounterLike() {
  totalLikes = document.querySelector(".daily-rate p span");
  let likes = parseInt(this.textContent, 10);
  let incrementLikes = likes + 1;
  let decrementLikes = likes - 1;

  if (this.classList.contains("liked")) {
    this.classList.remove("liked");
    this.innerHTML = decrementLikes;
    totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) - 1;
  } else {
    this.classList.add("liked");
    this.innerHTML = incrementLikes;
    totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) + 1;
  }
}

// function generateCounterLike() {
//   totalLikes = document.querySelector(".daily-rate p span");

//   document.querySelectorAll(".count-like span").forEach((e) => {
//     let likes = parseInt(e.textContent, 10);
//     let incrementLikes = likes + 1;
//     let decrementLikes = likes - 1;
//     if (this.classList.contains("liked")) {
//       this.classList.remove("liked");
//       e.innerHTML = decrementLikes;
//       totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) - 1;
//     } else {
//       this.classList.add("liked");
//       e.innerHTML = incrementLikes;
//       totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) + 1;
//     }
//   });
// }
