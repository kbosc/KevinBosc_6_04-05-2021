function displayMediasByOption(medias) {
  let portfolioWrapper = document.querySelector("#portfolio-wrapper");
  portfolioWrapper.innerHTML = generatePortfolioHtmlByOption.call(this, medias);
  document.querySelectorAll(".portfolio__card__img").forEach((element) => {
    element.addEventListener("click", openModalImg);
  });
  document.querySelectorAll(".count-like").forEach((e) => {
    e.addEventListener("click", generateCounterLike);
  });
}

function generatePortfolioHtmlByOption(medias, like) {
  let mediasPhotographer = medias.filter((media) => {
    const photographerIdMedia = parseInt(media.photographerId, 10);
    return photographerId == photographerIdMedia;
  });

  // Trie des medias en fonction de l'option
  const opt = this.nextElementSibling.textContent;
  let mediasFiltered = [];
  switch (opt) {
    case "Titre":
      mediasFiltered = mediasPhotographer.sort(function (mediaUn, mediaDeux) {
        if (mediaUn.title < mediaDeux.title) {
          return -1; // Permet de placer la valeur mediaUn AVANT mediaDeux
        } else if (mediaUn.title > mediaDeux.title) {
          return 1; // Permet de placer la valeur mediaUn APRES mediaDeux
        }
        return 0;
      });
      break;
    case "Date":
      mediasFiltered = mediasPhotographer.sort(function (mediaUn, mediaDeux) {
        const mediaDateUn = new Date(mediaUn.date);
        const mediaDateDeux = new Date(mediaDeux.date);
        if (mediaDateUn < mediaDateDeux) {
          return 1; // Permet de placer la valeur mediaUn APRES mediaDeux
        } else if (mediaDateUn > mediaDateDeux) {
          return -1; // Permet de placer la valeur mediaUn AVANT mediaDeux
        }
        return 0;
      });
      break;
    case "Popularité":
      mediasFiltered = mediasPhotographer.sort(function (mediaUn, mediaDeux) {
        if (mediaUn.likes < mediaDeux.likes) {
          return 1; // Permet de placer la valeur mediaUn APRES mediaDeux
        } else if (mediaUn.likes > mediaDeux.likes) {
          return -1; // Permet de placer la valeur mediaUn AVANT mediaDeux
        }
        return 0;
      });
      break;
  }

  // Création des cards en fonction du tableau des medias triés
  let textPortfolio = "";
  mediasFiltered.forEach((media) => {
    textPortfolio += MediaFactory(media, currentPhotographer);
  });

  return textPortfolio;
}
