import { refs } from './refs';

export function renderCategoties(categories) {
  const categorWithAll = ['All', ...categories];
  const markup = categorWithAll
    .map(
      category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`
    )
    .join('');
  refs.categoriesList.innerHTML = markup;
  const firstCategoryBtn = document.querySelector('.categories__btn');
  if (firstCategoryBtn) {
    firstCategoryBtn.classList.add('categories__btn--active');
  }
}
export function renderProducts(products) {
  const markup = products
    .map(
      ({
        id,
        thumbnail,
        title,
        brand,
        category,
        price,
      }) => `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category:${category} </p>
    <p class="products__price">Price:${price} $</p>
 </li>`
    )
    .join('');
  refs.productList.insertAdjacentHTML('beforeend', markup);
}

export function renderProductInModul({
  id,
  thumbnail,
  title,
  brand,
  category,
  price,
  description,
  shippingInformation,
  returnPolicy,
  tags,
}) {
  const tagsMarkup = tags
    ? tags.map(tag => `<li class="modal-product__tag" > ${tag}</li>`).join('')
    : '';
  const markup = `<img class="modal-product__img" src="${thumbnail}" alt="${title}" />

<div class="modal-product__content"> <p class="modal-product__title">${title}</p>
<ul class="modal-product__tags">${tagsMarkup}</ul> <p class="modal-product__description">${description}</p>
<p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
<p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
<p class="modal-product__price">Price: ${price}$</p>
<button class="modal-product__buy-btn" type="button">Buy</button> </div>
`;
  refs.modalProduct.innerHTML = markup;
  //додати функціонал перевіркии присутності даного продукта в наших списках кошика і списку бажаного для оновлення статусу кнопок
}
export function hideNotFound() {
  refs.notFound.classList.remove('not-found--visible');
}
export function showNotFound() {
  refs.notFound.classList.add('not-found--visible');
}
export function clearProductList() {
  refs.productList.innerHTML = '';
}
