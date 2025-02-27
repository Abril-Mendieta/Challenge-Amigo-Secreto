var listaDeNombres = [];
let resultadoDeAmigo = document.getElementById("resultado")

var listaAmigosPantalla = document.getElementById("listaAmigos")

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

//Función de nombre vacío.
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo").value;
    let result = document.querySelector("resultado");
    if (inputAmigo=="") {
        alert ("Por favor, inserte un nombre.");
    } else {
        listaDeNombres.push(inputAmigo);
        listaAmigosPantalla.innerHTML = listaAmigosPantalla.innerHTML + `<li> ${inputAmigo} </li> `;
        limpiarCaja();
    }
}

function sortearAmigo() {
    // Verificar si la lista de nombres está vacía
    if (listaDeNombres.length === 0) {
      resultadoDeAmigo.innerHTML = "Por favor, inserte un nombre.";
    } else {
      // Generar un número aleatorio dentro del rango de la lista de nombres
      let random = Math.floor(Math.random() * listaDeNombres.length);
  
      // Obtener el nombre del amigo secreto
      let amigoSecreto = listaDeNombres[random];
  
      // Eliminar el nombre sorteado de la lista de nombres
      listaDeNombres.splice(random, 1);
  
      // Actualizar la lista de amigos en la pantalla
      listaAmigosPantalla.innerHTML = "";
      for (let i = 0; i < listaDeNombres.length; i++) {
        listaAmigosPantalla.innerHTML += `<li>${listaDeNombres[i]}</li>`;
      }
  
      // Mostrar el amigo secreto
      resultadoDeAmigo.innerHTML = `<li>El amigo secreto que te asignaron es: ${amigoSecreto}</li>`;
  
      // Verificar si ya se han sorteado todos los nombres
      if (listaDeNombres.length === 0) {
        asignarTextoElemento("p", "Ya se sortearon todos los nombres disponibles");
      }
    }
  }

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function Reiniciar() {
   //limpiar caja
    limpiarCaja();

    //limpiar lista de nombres
    listaDeNombres = [];

    //limpiar lista de amigos en la pantalla
    listaAmigosPantalla.innerHTML = "";

    resultadoDeAmigo.innerHTML = ""

    if (listaDeNombres.length === 0) {
        asignarTextoElemento("p","")
    } 
}
