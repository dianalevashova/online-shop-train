import { showToast, toggleActiveClass } from './helpers';
import { openModal } from './modal';
import {
  getCategories,
  getProductById,
  getProductBySearchValue,
  getProducts,
  getProductsByCategory,
} from './products-api';
import { refs } from './refs';
import {
  clearProductList,
  hideNotFound,
  renderCategoties,
  renderProductInModul,
  renderProducts,
  showNotFound,
} from './render-function';
import { isInCart } from './storage';

let currentProductId = null;

export function initHomePage() {
  getCategories()
    .then(data => renderCategoties(data))
    .catch(error => {
      console.log('помидка запиту сторінки Home', error);
    });
  getProducts()
    .then(products => {
      renderProducts(products);
    })
    .catch(error => {
      console.log('помилка рендеру продуктів', error);
    });
}
export function handleCategoriesListClick(event) {
  const allCategoryButtons = document.querySelectorAll('.categories__btn');
  const categoryBtn = event.target.closest('.categories__btn');
  if (!categoryBtn) return;
  clearProductList();
  toggleActiveClass(allCategoryButtons, categoryBtn, 'categories__btn--active');

  const categorySlag = categoryBtn.textContent.trim();
  if (categorySlag === 'All') {
    getProducts()
      .then(products => {
        renderProducts(products);
        hideNotFound();
      })
      .catch(error => {
        console.log('помилка рендеру продуктів', error);
      });
  } else {
    getProductsByCategory(categorySlag)
      .then(({ products }) => {
        if (products.length > 0) {
          renderProducts(products);
          hideNotFound();
        } else {
          showNotFound();
        }
      })
      .catch(error => {
        console.log('помилка рендеру продуктів', error);
        showNotFound();
      });
  }
}
export function handleProductListClick(event) {
  const productItem = event.target.closest('.products__item');

  if (!productItem) return;

  const productId = Number(productItem.dataset.id);
  currentProductId = productId;
  getProductById(productId).then(product => {
    openModal();
    renderProductInModul(product);
  });
}
export function handleSearchSubmit(event) {
  event.preventDefault();
  const searchValue = event.target.elements.searchValue.value.trim();
  if (!searchValue) {
    showToast('Please enter valid search query', 'warning');
    return;
  }
  getProductBySearchValue(searchValue)
    .then(({ products }) => {
      clearProductList();
      if (products.length > 0) {
        renderProducts(products);
        hideNotFound();
      } else {
        showNotFound();
      }
    })
    .catch(error => {
      console.log(error);
      showNotFound();
    });
}

export function handleSearchClearBtnClick(event) {
  refs.searchForm.reset();
  clearProductList();
  getProducts()
    .then(({ products }) => {
      renderProducts(products);
      hideNotFound();
    })
    .catch(e => console.log('Error on handleSearchClear'), e);
}
export function handleaddToCartBtnClick(event) {
  if (!currentProductId) return;
  if (isInCart(currentProductId)) {
  }
}
