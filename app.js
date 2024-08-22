import hamburgerMenu from "./functions/hamburger_menu.js";
import clock from "./functions/clock.js";
import getMotorcycle from "./functions/motorcycle_browser.js";
import getImg from "./functions/img_browser.js";

const d = document;

// variables del formulario del buscador
const $form = d.getElementById('form-browser');
const $resultsParagraph = d.getElementById('resultBrowser');
const $resultImage = d.getElementById('img-browser');

// APIKEY para la API de las motocicletas
const APIKEY = 'reYE6P5VdYgStLWxkKRxuw==9INg4zu6A1cFfSqS';

// Elementos o funciones a cargar al iniciar la pagina
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    clock("#clock");
});

// evento al envio del formulario
$form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let txtBrand = d.getElementById('txtBrand').value;
    let txtModel = d.getElementById('txtModel').value;
    $resultsParagraph.innerText = '';

    if(txtBrand === '' || txtModel === ''){
        $resultsParagraph.innerText = 'Favor de ingresar los datos solicitados';
    }else{
        let resultMotorcycle = await getMotorcycle(txtBrand, txtModel, APIKEY);
        if(resultMotorcycle === -1){
            // Error
            $resultsParagraph.innerHTML = '<ul><li><b>No se ha encontrado ningun resultado :(</b></li>';
        }else{
            // Mostrar resultados
            $resultsParagraph.innerHTML = `
                <ul>
                    <li><b>Marca:</b> ${resultMotorcycle.make}</li>
                    <li><b>Modelo:</b> ${resultMotorcycle.model}</li>
                    <li><b>Año:</b> ${resultMotorcycle.year}</li>
                    <li><b>Tipo:</b> ${resultMotorcycle.type}</li>
                    <li><b>Cilindrada:</b> ${resultMotorcycle.displacement}</li>
                    <li><b>Motor:</b> ${resultMotorcycle.engine}</li>
                    <li><b>HP:</b> ${resultMotorcycle.power}</li>
                    <li><b>Torque:</b> ${resultMotorcycle.torque}</li>
                    <li><b>Top de velocidad:</b> ${resultMotorcycle.top_speed}</li>
                    <li><b>Transmision:</b> ${resultMotorcycle.transmission}</li>
                    <li><b>Suspencion delantera:</b> ${resultMotorcycle.front_suspension}</li>
                    <li><b>Suspencion trasera:</b> ${resultMotorcycle.rear_suspension}</li>
                    <li><b>Llanta delantera:</b> ${resultMotorcycle.front_tire}</li>
                    <li><b>Llanta trasera:</b> ${resultMotorcycle.rear_tire}</li>
                    <li><b>Freno delantero:</b> ${resultMotorcycle.front_brakes}</li>
                    <li><b>Freno trasero:</b> ${resultMotorcycle.rear_brakes}</li>
                    <li><b>Peso en seco:</b> ${resultMotorcycle.dry_weight}</li>
                    <li><b>Altura del asiento:</b> ${resultMotorcycle.seat_height}</li>
                    <li><b>Alto:</b> ${resultMotorcycle.total_height}</li>
                    <li><b>Largo:</b> ${resultMotorcycle.total_length}</li>
                    <li><b>Ancho:</b> ${resultMotorcycle.total_width}</li>
                    <li><b>Capacidad de tanque:</b> ${resultMotorcycle.fuel_capacity}</li>
                    <li><b>Arranque:</b> ${resultMotorcycle.starter}</li>
                </ul>`;
            
            // Para mostrar la imagen de la moto buscada
            let query = `${txtBrand} ${txtModel}`;
            let resultImg;
            (async () => {
                resultImg = await getImg(query);
                if(resultImg === -1){
                    $resultImage.innerHTML = 'Sin imagenes disponibles';
                }else{
                    $resultImage.innerHTML = `<img src="${resultImg}" alt="${query}">`;
                }
            })();

            
        }
    }
});

document.getElementById('footer-p').innerHTML = `
    MotoShop &copy; ${new Date().getFullYear()} Manuel Rodriguez
`;