function generatePortfolioHtml(photographers, tag) {
  const photographerFilters = photographers.filter((photographer) => {
    // console.log(photographer.tags);
    // console.log(tag);
    return photographer.tags.includes(tag.toLowerCase());
  });
  // console.log(tag);
  // console.log(photographerFilters);
  // console.log(photographers);
  return PhotographerCardsFactory(photographerFilters);
}
