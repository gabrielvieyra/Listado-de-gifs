const btnCargarListado = document.querySelector("#btn-cargar-listado");

btnCargarListado.addEventListener("click", cargarListadoGifs);

const apiKey = "khYjRcs5FrIybMjGIbhp6kFiKG09W8Xt";
const url = "https://api.giphy.com/v1/gifs/search";

async function getGifs() {
    let terminoBuscado = document.querySelector("#txt-busqueda").value;

    let response = await fetch(
        url + `?api_key=${apiKey}&q=${terminoBuscado}&limit=10`
    );

    if (response.status === 200) {
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
    let listadoGifs = document.querySelector("#listado-gifs");
    listadoGifs.innerHTML = "";

    for (gif of gifs.data) {
        listadoGifs.innerHTML += `<img class="m-2" src="${gif.images.original.url}">`;
    }
}
