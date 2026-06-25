import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const d="https://dummyjson.com",a={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};r.defaults.baseURL=d;function g(){return r.get(a.CATEGORIES).then(({data:t})=>t)}function p(){return r.get(a.PRODUCTS).then(({data:t})=>t.products)}const n={categoriesList:document.querySelector(".categories"),productList:document.querySelector(".products")};function _(t){const e=["All",...t].map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");n.categoriesList.innerHTML=e;const s=document.querySelector(".categories__btn");s&&s.classList.add("categories__btn--active")}function m(t){const o=t.map(({id:e,thumbnail:s,title:c,brand:i,category:l,price:u})=>`<li class="products__item" data-id="${e}">
    <img class="products__image" src="${s}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${i}</span></p>
    <p class="products__category">Category:${l} </p>
    <p class="products__price">Price:${u} $</p>
 </li>`).join("");n.productList.insertAdjacentHTML("beforeend",o)}function b(){g().then(t=>_(t)).catch(t=>{console.log("помидка запиту сторінки Home",t)}),p().then(t=>{console.log(t),m(t)}).catch(t=>{console.log("помилка рендеру продуктів",t)})}function L(t){const o=document.querySelectorAll(".categories__btn"),e=t.target.closest(".categories__btn");e&&toggleActiveClass(o,e,"categories__btn--active")}document.addEventListener("DOMContentLoaded",b);n.categoriesList.addEventListener("click",L);
//# sourceMappingURL=index.js.map
