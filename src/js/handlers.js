import { getCategories, getProducts } from './products-api';
import { renderCategoties, renderProducts } from './render-function';

export function initHomePage() {
  getCategories()
    .then(data => renderCategoties(data))
    .catch(error => {
      console.log('помидка запиту сторінки Home', error);
    });
  getProducts()
    .then(products => {
      console.log(products);
      renderProducts(products);
    })
    .catch(error => {
      console.log('помилка рендеру продуктів', error);
    });
}
export function onCategoriesListClick(event) {
  const allCategoryButtons = document.querySelectorAll('.categories__btn');
  const categoryBtn = event.target.closest('.categories__btn');
  if (!categoryBtn) return;
  toggleActiveClass(allCategoryButtons, categoryBtn, 'categories__btn--active');
}
