//! All logic for Web-Site

import { getImages } from './js/pixabay-api';
import { cardsTemplate } from './js/render-functions';

//*======================================= Library

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import cssLoader from 'css-loader';

//*======================================= ELEMENTS

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  list: document.querySelector('.gallery'),
  load: document.querySelector('.loader'),
  btnMore: document.querySelector('.load-more-btn'),
  preLoader: document.querySelector('.pre-loader'),
};

//*======================================= ADDITIONAL

const lightbox = new SimpleLightbox('.gallery a ', {
  captionDelay: 250,
  captionsData: 'alt',
});

const param = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 15,
  maxPage: 0,
};

//!======================================= SUBMIT ================

refs.form.addEventListener('submit', btnEvent);

async function btnEvent(e) {
  e.preventDefault();
  refs.list.innerHTML = '';
  refs.btnMore.classList.add('hidden');
  param.page = 1;
  const userValue = refs.input.value.trim();
  if (userValue.length !== 0 && userValue !== '') {
    refs.load.classList.remove('hidden');

    param.q = userValue;
    await getImages(param)
      .then(data => {
        if (data.total === 0) {
          refs.load.classList.add('hidden');
          refs.input.value = '';
          refs.list.textContent = '';

          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#EF4040',
            messageColor: 'white',
            position: 'topRight',
            class: 'error',
          });
        } else {
          const markUp = cardsTemplate(data.hits);
          refs.list.innerHTML = markUp;

          param.maxPage = Math.ceil(data.totalHits / param.per_page);

          lightbox.refresh();

          refs.input.value = '';

          refs.load.classList.add('hidden');
          refs.btnMore.classList.remove('hidden');
        }
      })
      .catch(err => console.error(err));
  }
}

//!======================================= LOAD-MORE ==========================

refs.btnMore.addEventListener('click', toDoLoadMore);

async function toDoLoadMore() {
  param.page += 1;

  refs.preLoader.classList.remove('hidden');
  refs.btnMore.disabled = true;

  await getImages(param)
    .then(data => {
      const markUp = cardsTemplate(data.hits);
      refs.list.insertAdjacentHTML('beforeend', markUp);

      lightbox.refresh();

      if (param.page === param.maxPage) {
        refs.btnMore.classList.add('hidden');

        iziToast.show({
          message: `We're sorry, but you've reached the end of search results`,
          backgroundColor: '#EF4040',
          messageColor: 'white',
          position: 'topRight',
          class: 'error',
        });
      } else {
        refs.btnMore.disabled = false;
        refs.preLoader.classList.add('hidden');
      }
      const card = document.querySelector('.image');
      let cardSize = card.getBoundingClientRect();
      const cardHeight = cardSize.height;

      window.scrollBy({
        top: cardHeight * 2.5,
        behavior: 'smooth',
      });
    })
    .catch(err => console.error(err));
}
