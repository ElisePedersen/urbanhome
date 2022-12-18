import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./common/displayMessage.js";
import { getToken } from "./adminFunctions/localStorage.js";
import deleteButton from "./adminFunctions/products/deleteButton.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector(".edit__product");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".edit__message");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    idInput.value = details.id;

    deleteButton(details.id);

    console.log(details);
  } catch (error) {
    console.log(error);
  } finally {
    form.style.display = "block";
  }
})();

form.addEventListener("submit", submitEditForm);

function submitEditForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const idValue = idInput.value;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage("error", "invalid values", ".add__message");
  }

  editProduct(titleValue, priceValue, descriptionValue, idValue);
}

async function editProduct(title, price, description, id) {
  const url = baseUrl + "products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
  });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.updated_at) {
      displayMessage(
        "success",
        "Product successfully updated",
        ".edit__message"
      );
    }

    if (json.error) {
      displayMessage("error", "Something went wrong", ".edit__message");
    }
  } catch (error) {
    console.log(error);
    displayMessage("error", "an error occured", ".edit__message");
  }
}
