import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onClickGalleryItem);

function createGalleryItems() {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onClickGalleryItem(evt) {
  blockAction(evt);
  onOpenAndCloseGalleryItem(evt);
}

function blockAction(evt){
  evt.preventDefault();
}
function onOpenAndCloseGalleryItem(evt){
  if(evt.target.nodeName !== 'IMG'){
    return;
  }
  const instance = basicLightbox.create(`
  <img width="1400" height="900" src="${evt.target.dataset.source}">`);
  instance.show();
  
  gallery.addEventListener('keydown', evt => {
    if(evt.code === 'Escape'){
      instance.close();
    }
  })
}
