import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./common/displayMessage.js";
import { getProducts } from "./utils/getProducts.js";
import { searchProducts } from "./utils/searchProducts.js";


const productsUrl = baseUrl + "products/"



async function displayProducts () {
    const response = await fetch(productsUrl);
    const products = await response.json();
    try {
        getProducts(products);
        searchProducts(products);
    }
    catch(error) {
        console.log(error);
        displayMessage("error", error, ".product__container")
    }
}
displayProducts();