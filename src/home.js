//Логіка сторінки Home

import { initHomePage, onCategoriesListClick } from './js/handlers';
import { getCategories } from './js/products-api';
import { refs } from './js/refs';
import { renderCategoties } from './js/render-function';
document.addEventListener('DOMContentLoaded', initHomePage);
refs.categoriesList.addEventListener('click', onCategoriesListClick);
