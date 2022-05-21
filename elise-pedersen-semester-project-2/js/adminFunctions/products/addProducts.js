import { displayMessage } from "../../common/displayMessage.js";
import { getToken } from "../localStorage.js";
import { baseUrl } from "../../settings/api.js";


export async function addProduct(title, price, description) {
    const form = document.querySelector(".add__product");

    const cors = "https://noroffcors.herokuapp.com/";
    const url = cors + baseUrl + "products";

    const data = JSON.stringify({ title: title, price: price, description: description});


    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Product successfully created", ".add__message");
            form.reset();
        }

        if(json.error) {
            displayMessage("error", "Something went wrong", ".add__message");
        }

        console.log(json);
    } catch (error) {
        console.log(error)
        displayMessage("error", "an error occured", ".add__message");
    }
    
}