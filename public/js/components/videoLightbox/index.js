function videoCard(props) {
  const { found, media } = props;
  return `<div class="portfolio__card">
        <a href="#" class="portfolio__card__img" data-img-id="${media.id}">
            <video
            src="img/photos/${found.name}/${media.video}"
            alt=""
            class="portfolio-card-img"
            /video>
        </a>
        <div class="portfolio__card__about">
            <p>${media.title}</p>
            <div class="count-like">
            <span>${media.likes}</span>
            <!-- <p>12</p> -->
            <svg
                aria-hidden="true"
                focusable="false"
                data-icon="heart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="like"
                aria-label="like"
            >
                <path
                fill="#fafafa"
                stroke="#901c1c"
                stroke-width="1rem"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                ></path>
            </svg>
            </div>
        </div>
    </div>`;
}
