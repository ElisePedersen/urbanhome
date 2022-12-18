import { baseUrl } from "./settings/api.js";
import { cartItems } from "./cartFunction/cartItems.js";
import { displayMessage } from "./common/displayMessage.js";

const productsUrl = baseUrl + "products/";

async function createCart() {
  const response = await fetch(productsUrl);
  const cart = await response.json();

  try {
    cartItems(cart.data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".cart__container");
  }
}
createCart();
