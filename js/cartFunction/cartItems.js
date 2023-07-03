import { getExistingCart } from "./getExistingCart.js";

export function cartItems() {
  let cartProducts = getExistingCart();
  const cartContainer = document.querySelector(".cart__container");
  const totalContainer = document.querySelector(".cart__information p");

  if (cartProducts.length === 0) {
    return (cartContainer.innerHTML = "Your cart is empty");
  }

  let total = 0;
  cartContainer.innerHTML = "";

  cartProducts.forEach(function (products) {
    total = total + parseFloat(products.price);
    console.log(products);

    cartContainer.innerHTML += `<div class="row cart__items">
                                        <div class="col">
                                            <a href="product-specific.html?id=${products.id}"><img src="${products.image_url}"></a>
                                        </div>
                                        <div class="col">
                                            <p>${products.name}</p>
                                        </div>
                                        <div class="col">
                                            <p>$${products.price}</p>
                                        </div>
                                        <div class="col">
                                            <i class="fa-solid fa-trash" data-name="${products.name}"></i>
                                        </div>
                                    </div>`;

    // const removeIcon = document.querySelectorAll(".cart__items i");

    // removeIcon.forEach(function(trash) {
    //     trash.addEventListener("click", removeFromList);
    // });
  });

  totalContainer.innerHTML += total;
}
