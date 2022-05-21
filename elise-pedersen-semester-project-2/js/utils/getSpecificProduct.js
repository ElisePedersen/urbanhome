import { handleClick } from "../cartFunction/addToCart.js"

export function getProduct(product) {
    const specificProduct = document.querySelector(".specific__product");


    document.title = `UrbanHome | ${product.title}`;
    specificProduct.innerHTML = "";
    
    specificProduct.innerHTML = `<div class="row specific__container">
                                    <div class="col-sm-12 col-md-5 specific__image">
                                        <img src="${product.image.url}" class="card-img-top" alt="${product.title}">
                                    </div>    
                                    <div class="col-sm-12 col-md-7">
                                        <h5 class="card-title">${product.title}</h5>
                                        <p>$${product.price}</p>
                                        <button class="btn cta" data-id="${product.id}" data-name="${product.title}" data-image="${product.image.url}" data-price="${product.price}">Add to cart</button>
                                        <p>Description</p>
                                        <p>${product.description}</p>
                                    </div>
                                </div>`;
    const cartButton = document.querySelectorAll(".specific__container button");

    cartButton.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    
};