import { renderCard, refs, handlerError } from './js/render-function';
import { fetchImage, searchSettings } from './js/paxabey-api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

refs.searchForm.addEventListener('submit', handlerSearchButton);

let currentPage;
let totalPage;

function handlerSearchButton(event) {
  event.preventDefault();
  currentPage = 1;
  totalPage = 1;

  const searchText = event.target.searchtext.value.trim();
  if (!searchText) {
    handlerError('outdata');
    return;
  }

  searchSettings.q = searchText;
  searchSettings.page = currentPage;

  refs.gallery.innerHTML = '';
  refs.loader.classList.add('loader');

  fetchImage()
    .then(image => {
      refs.loader.classList.remove('loader');
      totalPage = Math.ceil(image.totalHits / searchSettings.per_page);
      if (totalPage === 0) {
        handlerError('nodata');
        return;
      }

      refs.gallery.insertAdjacentHTML('beforeend', renderCard(image.hits));
      galleryBigImage.refresh();

      if (totalPage > currentPage) {
        currentPage += 1;
        pagination();
      }
    })

    .catch(error => {
      refs.loadmore.classList.remove('loader');
      handlerError(error);
    })
    .finally(refs.searchForm.reset());
}

function pagination() {
  refs.loadmore.addEventListener('click', () => {
    refs.loader.classList.add('loader');
    searchSettings.page = currentPage;
    fetchImage()
      .then(image => {
        refs.loader.classList.remove('loader');
        refs.gallery.insertAdjacentHTML('beforeend', renderCard(image.hits));
        galleryBigImage.refresh();
      })
      .catch(error => {
        refs.loadmore.classList.remove('loader');
        handlerError(error);
      });

    if (totalPage === currentPage) {
      console.log('vse');
      return;
    } else {
      currentPage += 1;
    }
  });
}

const galleryBigImage = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.8,
  scrollZoom: false,
});

galleryBigImage.on('show.simplelightbox', function () {});