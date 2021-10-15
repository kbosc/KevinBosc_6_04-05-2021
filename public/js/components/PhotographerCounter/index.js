function generateCounterLike() {
  totalLikes = document.querySelector(".daily-rate p span");
  let likes = parseInt(this.textContent, 10);
  let incrementLikes = likes + 1;
  let decrementLikes = likes - 1;
  let Count = this.firstElementChild;
  let heart = this.lastElementChild.firstElementChild;

  if (this.classList.contains("liked")) {
    this.classList.remove("liked");
    Count.innerHTML = decrementLikes;
    totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) - 1;
    heart.classList.add("empty-heart");
    heart.classList.remove("fully-heart");
  } else {
    this.classList.add("liked");
    Count.innerHTML = incrementLikes;
    totalLikes.innerHTML = parseInt(totalLikes.textContent, 10) + 1;
    heart.classList.remove("empty-heart");
    heart.classList.add("fully-heart");
  }
}
