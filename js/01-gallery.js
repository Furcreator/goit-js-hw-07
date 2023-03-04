// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onClickGalleryItem);


function onClickGalleryItem(evt){
    evt.preventDefault();
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">`)
	instance.show()
}

function createGalleryItems(items) {
  return galleryItems.map(
    ({ preview, description, original }) => {
        return  `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`    
    }).join('');
}




// const instance = basicLightbox.create(`<img width="1140" height="720" src="#">`, {onShow: (instance) => {window.addEventListener('keydown', onEscPress)},
// onClose: (instance) => {window.removeEventListener('keydown', onEscPress)}});

// function onLinkClick(event) {
//   event.preventDefault();
//   instance.element().querySelector('img').src = event.target.dataset.source;
//   instance.show(); 
// }