class Menu extends HTMLElement{
    constructor(){
        super();
        // contenido no accesible
        let shadowRoot=this.attachShadow({mode: 'open'});
        // creamos parametros
        this.colorFondo=this.getAttribute("fondo");
        // hacemos que no sea accesible
        shadowRoot.innerHTML=this.template;
    }
    get template(){
        let color="white";
        switch(this.colorFondo){
            case "verde":
                color="green";
                break;
            case "azul":
                color="blue";
                break;
            case "amarillo":
                color="yellow";
                break;
            default:
                break;
        }
        return `
        <style>
            nav {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #2c3e50;
                padding: 10px 0;
                z-index: 1000;
            }

            /* Centrado del contenido */
            nav>ul {
                display: flex;
                justify-content: center;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            /* Estilos de los enlaces */
            nav>ul>li {
                margin: 0 20px;
            }

            nav>ul>li>a {
                color: #ecf0f1;
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                transition: color 0.3s ease;
            }

            nav>ul>li>a:hover {
                color: #f39c12;
            }
        </style>
            <nav>
                <ul>
                    <li><a href="../HTML/dashboardEmpleados.html">Empleados</a></li>
                    <li><a href="../HTML/dashboardHabitaciones.html">Habitaciones</a></li>
                </ul>
            </nav>
        `;
        // con slot obtenemos el contenido que hay entre las etiquetas de inicio y fin
    }

    // creamos los metodos para poder modificar
    static get observedAttributes(){
        return ["fondo"];
    }
    attributeChangedCallback(attr, oldVal, newVal){
        console.log(attr);
        console.log(oldVal);
        console.log(newVal);
        if(attr=="fondo" && oldVal!= newVal){
            this.colorFondo=newVal;
            this.shadowRoot.innerHTML=this.template;
        }
    }



}
let etiquetaMiMenu=window.customElements.define('mi-menu', Menu);
export { etiquetaMiMenu };