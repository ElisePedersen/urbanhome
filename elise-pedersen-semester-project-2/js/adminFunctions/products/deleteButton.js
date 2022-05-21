import { baseUrl } from "../../settings/api.js";
import { getToken } from "../localStorage.js";

export default function deleteButton(id) {
    const deleteContainer = document.querySelector(".delete__container");

    deleteContainer.innerHTML = `<button type="button" class="delete cta">Delete product</button>`;

    const button = document.querySelector("button.delete");

    button.onclick = async function() {
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this product?");
        console.log(doDelete);

        if(doDelete) {
            const url = baseUrl + "products/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "edit.html";

                console.log(json);
                
            } catch (error) {
                console.log(error);
                
            }

        }

        
    };
}