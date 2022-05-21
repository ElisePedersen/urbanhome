import { displayMessage } from "../common/displayMessage.js";
import { saveToken, saveUser } from "../adminFunctions/localStorage.js";
import { baseUrl } from "../settings/api.js";

export async function doLogin(adminEmail, adminPassword) {
    
    const cors = "https://noroffcors.herokuapp.com/";
    const url = cors + baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: adminEmail, password: adminPassword});

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    }

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)
        if (json.user) {
            displayMessage("success", "successfully logged in", "#login__message");

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "admin.html";
        }
        if(json.error) {
            console.log(error)
            displayMessage("error", "Email or password invalid", "#login__message");
        }
         
    } catch (error) {
        console.log(error)
        displayMessage("error", "Email or password invalid", "#login__message");
    }
}