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

document.addEventListener(onFetchData.name, (e) => {
  const { data } = e;
  // console.log(data);
  const galleryWrapper = document.getElementById("gallery-wrapper");
  galleryWrapper.innerHTML = PhotographerCardsFactory(data.photographers);

  document.querySelectorAll(".navigation-filter li").forEach((element) => {
    // console.log(element);
    element.addEventListener("click", function () {
      // console.log("click");
      displayPhotographersByTag.call(this, data.photographers);
    });
  });
});
