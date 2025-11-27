import { getCookie } from "../cookies/cookies.js";
onload = () => {
    let login = getCookie("cargo");
    if (login != null) {
        login = "logout";
    } else {
        login = "login";
    }

    document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", "<mi-menu id='menu' login="+login+"></mi-menu>");
};