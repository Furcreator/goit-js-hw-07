import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onClickGalleryItems);

function createGalleryItems() {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li> `;
    })
    .join("");
}

function onClickGalleryItems(e){
    blockStandartAction(e);
    if(e.target.nodeName !== 'IMG'){
        return;
    }
}
var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

function blockStandartAction(e){
    e.preventDefault()
}
