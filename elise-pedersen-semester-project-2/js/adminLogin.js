
import { adminLinks } from "./adminLinks.js";
import { doLogin } from "./adminFunctions/doLogin.js";

const adminForm = document.querySelector("#admin__form");
const adminEmail = document.querySelector("#admin__email");
const adminPassword = document.querySelector("#admin__password");

adminLinks();

adminForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    console.log(event);

    const emailValue = adminEmail.value.trim();
    const passwordValue = adminPassword.value.trim();

    doLogin(emailValue, passwordValue);
}