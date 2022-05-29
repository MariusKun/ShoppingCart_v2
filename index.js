"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.querySelector(".main");
const inCartCounter = document.querySelector(".inCart");
const totalSum = document.querySelector(".totalSum");
let products = [];
const shoppingCart = [];
function countCart() {
    let quantityCounter = 0;
    let priceTotal = 0;
    shoppingCart.map((x) => {
        // @ts-ignore
        quantityCounter += x.quantity;
        priceTotal += x.quantity * x.price;
    });
    inCartCounter.innerHTML = "In cart: " + quantityCounter;
    totalSum.innerHTML = `Total price: ${priceTotal.toFixed(2)} $`;
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    localStorage.getItem('cart');
}
function addToCart(e) {
    const id = Number(e.target.id);
    const current = products.find(x => x.id == id);
    const inCart = shoppingCart.find(x => x.id === id);
    if (inCart) {
        const index = shoppingCart.findIndex(x => x.id === id);
        // @ts-ignore
        shoppingCart[index].quantity++;
    }
    else {
        current.quantity = 1;
        shoppingCart.push(current);
    }
    countCart();
}
function appendProducts(data) {
    container.innerHTML = "";
    data.map(x => {
        container.innerHTML += `
            <div class="card">
                <img src="${x.image}" alt="${x.title}">
                <div class="title">${x.title}</div>
                <div>${x.category}</div>
                <div>${x.description}</div>
                <h4>Price: ${x.price}</h4>
                <button class="productButton" id="${x.id}">Add To Cart</button>
            </div>
        `;
    });
    const productButtons = document.querySelectorAll('.productButton');
    productButtons.forEach(x => x.onclick = addToCart);
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://fakestoreapi.com/products");
    products = yield res.json();
    appendProducts(products);
}))();
let goToCart = document.querySelector('.cartButton');
goToCart.addEventListener('click', function () {
    var opened = window.open("http://127.0.0.1:5500/cart.html");
});
