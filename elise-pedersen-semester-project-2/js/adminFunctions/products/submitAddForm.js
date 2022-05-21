import { displayMessage } from "../../common/displayMessage.js";
import { addProduct } from "./addProducts.js"

export function submitAddForm(event) {

    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const message = document.querySelector(".add__message");
// const featured = document.querySelector("#featured");

    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    // const featuredValue = featured.value;

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("error", "invalid values", ".add__message");
    }

    // if(featuredValue === true ) {
    //     return true
    // } 
    // else if (featuredValue === false) {
    //     return false
    // }
    

    addProduct(titleValue, priceValue, descriptionValue);
}