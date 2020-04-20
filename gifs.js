let btnCargarListado = document.getElementById('btn-cargar-listado');
btnCargarListado.addEventListener('click', cargarListadoGifs);

let apiKey = 'khYjRcs5FrIybMjGIbhp6kFiKG09W8Xt';

let url = 'https://api.giphy.com/v1/gifs/search';

async function getGifs(){

	let terminoBuscado = document.getElementById('txt-busqueda').value;

	url += `?api_key=${apiKey}&q=${terminoBuscado}&limit=16`;

	let response = await fetch( url );
	let datos    = await response.json();
	
	return datos;
}

function cargarListadoGifs(){
	
	getGifs().then(	mostrarGifs );
}
				
function mostrarGifs( gifs ){

	let listadoGifs = document.getElementById('listado-gifs');

	listadoGifs.innerHTML = ''; 

	for( gif of gifs.data){
		listadoGifs.innerHTML += `<img class="img-buscador" src="${gif.images.original.url}">`;
	}
	
}



