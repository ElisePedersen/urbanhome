import { getExistingCart } from "./getExistingCart.js";
import { saveCart } from "./saveCart.js";

export function handleClick() {
    this.classList.toggle("cta");
    this.classList.toggle("cta-clicked");

    const id = this.dataset.id;
    const name = this.dataset.name;
    const image = this.dataset.image;
    const price = this.dataset.price;

    const currentCart = getExistingCart();

    const productExists = currentCart.find(function (fav) {
        return fav.id === id;
    });

    if(productExists === undefined) {
        const product = {id: id, name: name, image: image, price: price};
        currentCart.push(product);
        saveCart(currentCart);
    } else {
        const newCart = currentCart.filter(fav => fav.id !== id);
        saveCart(newCart);
    }
}

