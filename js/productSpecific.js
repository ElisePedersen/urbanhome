import { baseUrl } from "./settings/api.js";
import { getProduct } from "./utils/getSpecificProduct.js";
import { displayMessage } from "./common/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const specificUrl = baseUrl + "products/" + id;

async function displayProduct() {
  const response = await fetch(specificUrl);
  const products = await response.json();
  console.log(products);
  try {
    getProduct(products.data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".specific__product");
  }
}
displayProduct();
