"use strict";
const elemProduct = document.querySelectorAll('.product');                   // Все продукты
const elemControl = document.querySelectorAll('.product__quantity-control'); // Все кнопки плюс и минус
const elemCartProducts = document.querySelector('.cart__products');          // Корзина с продуктами
const elemProductAdd = document.querySelectorAll('.product__add');           // Все кнопки Добавить в корзину
let cartProduct = function(id, img, count) {
  let cartProductString =
    `<div class="cart__product" data-id="${id}">
       <img class="cart__product-image" src="${img}">
       <div class="cart__product-count">${count}</div>
     </div>`;
   return cartProductString;
}

Array.from(elemControl).forEach(a => {
  a.addEventListener('click', (event) => {
    if (event.target.classList.contains('product__quantity-control_dec')) {
      if (Number(event.target.nextElementSibling.textContent) > 1) {
        event.target.nextElementSibling.textContent = Number(event.target.nextElementSibling.textContent) - 1;
      } else {
        alert('Количество товаров не может быть меньше 1');
      }
    }
    
    if (event.target.classList.contains('product__quantity-control_inc')) {
      event.target.previousElementSibling.textContent = Number(event.target.previousElementSibling.textContent) + 1;
    }
  });
});

Array.from(elemProductAdd).forEach(a => {
  a.addEventListener('click', (event) => {
    let id = event.target.closest('.product').dataset.id;
    let img = event.target.closest('.product').children.item(1).getAttribute('src');
    let count = Number(event.target.closest('.product__quantity').children.item(1).children.item(1).textContent);
    if (document.querySelectorAll('.cart__product-count').item(id - 1)) {
      let cartProductItem = document.querySelectorAll('.cart__product-count').item(id - 1);
      cartProductItem.textContent = Number(cartProductItem.textContent) + count;
    } else {
      elemCartProducts.insertAdjacentHTML('beforeend', cartProduct(id, img, count));
    } 
  });
});