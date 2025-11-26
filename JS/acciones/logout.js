import { borrarCookie } from "../cookies/cookies.js";
//se elimina la cookie
onload=()=>{
    borrarCookie();
    window.location.href='dashboardHabitaciones.html';
}
