import { getUserName } from "./adminFunctions/localStorage.js";
import logoutButton from "./adminFunctions/adminLogout.js";

export function adminLinks() {
    const { pathname } = document.location;

    const container = document.querySelector("#admin__form");
    const navigationLink = document.querySelector(".navigation__link");
    const username = getUserName();

    // let authLink = `<a href="admin.html" class="${pathname === "/admin.html" ? "active" : ""}"></a>`;

    if (username) {

        navigationLink.innerHTML += `<li class="nav-item">
        <a href="admin.html" class="nav-link ${pathname === "/admin.html" ? "active" : ""}">Admin</a>
      </li>`;

        container.innerHTML = `<p>ADMIN LOGOUT</p>
        <button class="cta" id="logout__button">Logout</button>`
        
        console.log(username) //why is the user logged twice? is this why the admin link are written twice.

        logoutButton();
    }
    
   

}











