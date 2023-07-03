import { baseUrl } from "./settings/api.js";
import { getFeatured } from "./utils/getFeatured.js";
import { getBanner } from "./utils/getBanner.js";
import { displayMessage } from "./common/displayMessage.js";

const productsUrl = baseUrl + "products";

async function displayFavorites() {
  const response = await fetch(productsUrl);
  const featured = await response.json();

  try {
    // console.log(featured.data);
    getFeatured(featured.data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured__products");
  }
}
displayFavorites();
