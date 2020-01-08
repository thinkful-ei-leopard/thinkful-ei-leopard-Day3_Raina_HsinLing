/* eslint-disable strict */
function catCarousel() {
    $('.thumbnail').on('click', event => {
      const imgs = $(event.currentTarget).find('img');
      const imgsSrc = imgs.attr('src');
      const imgsAlt = imgs.attr('alt');
      $('.hero img').attr('src', imgsSrc).attr('alt', imgsAlt);
    });
  }
  $(catCarousel);