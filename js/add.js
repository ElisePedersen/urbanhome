
import { submitAddForm } from "./adminFunctions/products/submitAddForm.js";



const form = document.querySelector(".add__product");

form.addEventListener("submit", submitAddForm);

