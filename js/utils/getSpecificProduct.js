import { handleClick } from "../cartFunction/addToCart.js";

export function getProduct(product) {
  const specificProduct = document.querySelector(".specific__product");

  document.title = `UrbanHome | ${product.title}`;
  specificProduct.innerHTML = "";

  const { title, price, description, image_url } = product.attributes;

  specificProduct.innerHTML = `<div class="row specific__container">
                                  
                                    <div class="col-sm-12 col-md-7">
                                        <img src=${image_url}></img>
                                        <h5 class="card-title">${title}</h5>
                                        <p>$${price}</p>
                                        <button class="btn cta" data-id="${product.id}" data-name="${title}" data-price="${price}">Add to cart</button>
                                        <p>Description</p>
                                        <p>${description}</p>
                                    </div>
                                </div>`;
  const cartButton = document.querySelectorAll(".specific__container button");

  cartButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}
