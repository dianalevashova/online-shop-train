//Логіка сторінки Home

import {
  handleaddToCartBtnClick,
  handleCategoriesListClick,
  handleProductListClick,
  handleSearchClearBtnClick,
  handleSearchSubmit,
  initHomePage,
} from './js/handlers';
import { getCategories } from './js/products-api';
import { refs } from './js/refs';
import { renderCategoties } from './js/render-function';

document.addEventListener('DOMContentLoaded', initHomePage);
refs.categoriesList.addEventListener('click', handleCategoriesListClick);
refs.productList.addEventListener('click', handleProductListClick);
refs.searchForm.addEventListener('submit', handleSearchSubmit);
refs.searchFormClearBtn.addEventListener('click', handleSearchClearBtnClick);
refs.addToCartBtn.addEventListener('click', handleaddToCartBtnClick);
