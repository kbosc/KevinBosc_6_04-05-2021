function generatePortfolioHtml(medias, tag) {
  let portfolioHtml = "";
  medias.forEach((media) => {
    const photographerIdMedia = parseInt(media.photographerId, 10);
    if (
      photographerId == photographerIdMedia &&
      ("all" == tag || media.tags.includes(tag))
    ) {
      portfolioHtml += MediaFactory(media, currentPhotographer);
    }
  });

  return portfolioHtml;
}
