import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./common/displayMessage.js";
import { productsToEdit } from "./adminFunctions/products/editProduct.js";

const productsUrl = baseUrl + "products/";

async function editProducts() {
  const response = await fetch(productsUrl);
  const products = await response.json();
  try {
    productsToEdit(products.data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product__container");
  }
}
editProducts();
