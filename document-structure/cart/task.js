"use strict";
const elemProduct = document.querySelectorAll('.product');                     // Все продукты
const elemControl = document.querySelectorAll('.product__quantity-control');   // Все кнопки плюс и минус
const elemCartProducts = document.querySelector('.cart__products');            // Корзина с продуктами
const elemProductAdd = document.querySelectorAll('.product__add');             // Все кнопки Добавить в корзину

let addCartProduct = function(id, img, count) {
   return `<div class="cart__product" data-id="${id}">
             <img class="cart__product-image" src="${img}">
             <div class="cart__product-count">${count}</div>
           </div>`;
}

Array.from(elemControl).forEach(a => {
  a.addEventListener('click', (event) => {
    if (event.target.classList.contains('product__quantity-control_dec')) {
      if (Number(event.target.nextElementSibling.textContent) > 1) {
        event.target.nextElementSibling.textContent = Number(event.target.nextElementSibling.textContent) - 1;
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
    let elemCartProduct = Array.from(document.querySelectorAll('.cart__product'));      // Все добавленные продукты
    let cartProductItem = Array.from(document.querySelectorAll('.cart__product-count')) // Массив с количеством продуктов

    if (elemCartProduct.find(a => {
      return a.dataset.id == id;
    })) {
      function getIndex() {
        return elemCartProduct.findIndex(i => {
          return i.dataset.id == id;
        })
      }

      cartProductItem[getIndex()].textContent = Number(cartProductItem[getIndex()].textContent) + count;
    } else {
      elemCartProducts.insertAdjacentHTML('beforeend', addCartProduct(id, img, count));
    } 
  });
});