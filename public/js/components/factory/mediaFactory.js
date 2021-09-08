const MediaFactory = (media, found) => {
  let cards = "";
  if (media.video) {
    cards = videoCard({
      found,
      media,
    });
  }
  if (media.image) {
    cards = imageCard({
      found,
      media,
    });
  }
  return cards;
};
