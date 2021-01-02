const btnCargarListado = document.querySelector("#btn-cargar-listado");
const contenedorSpinner = document.querySelector("#spinner");
const listadoGifs = document.querySelector("#listado-gifs");

btnCargarListado.addEventListener("click", cargarListadoGifs);

const apiKey = "khYjRcs5FrIybMjGIbhp6kFiKG09W8Xt";
const url = "https://api.giphy.com/v1/gifs/search";

async function getGifs() {
    let terminoBuscado = document.querySelector("#txt-busqueda").value;

    mostrarSpinner();

    let response = await fetch(
        url + `?api_key=${apiKey}&q=${terminoBuscado}&limit=12`
    );

    if (response.status === 200) {
        limpiarPantalla(contenedorSpinner);
        esconder(contenedorSpinner);

        let datos = await response.json();

        return datos;
    } else {
        alert("Algo salio mal");
    }
}

function cargarListadoGifs() {
    getGifs().then(mostrarGifs);
}

function mostrarGifs(gifs) {
    limpiarPantalla(listadoGifs);

    for (gif of gifs.data) {
        listadoGifs.innerHTML += `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <img class="w-100" src="${gif.images.original.url}">
            </div>
        `;
    }
}

function limpiarPantalla(param) {
    param.innerHTML = "";
}

function esconder(param) {
    param.classList.add("esconder");
}

function mostrarSpinner() {
    limpiarPantalla(listadoGifs);

    if (contenedorSpinner.classList.contains("esconder")) {
        contenedorSpinner.classList.remove("esconder");
    }

    contenedorSpinner.innerHTML = `
    <div
    class="d-flex justify-content-center align-items-center h-100"
>
    <div
        class="spinner-border text-white"
        role="status"
    >
        <span class="sr-only">Loading...</span>
    </div>
</div>
    `;
}
