var input= document.getElementsByClassName('formulario__input');
for(i=0;i<input.length;i++){
   input[i].addEventListener('keyup',function(){
    if(this.value.length>=1){
        this.nextElementSibling.classList.add('fijar');
    }else{
        this.nextElementSibling.classList.remove('fijar');
    }
   });
}

function obtenerDatos() {
    var elemento1 = document.getElementById('elemento1').value;
    var elemento2 = document.getElementById('elemento2').value;
    var elemento3 = document.getElementById('elemento3').value;
    var elemento4 = document.getElementById('elemento4').value;

    var mensaje = `
        Nombre: ${elemento1}
        Celular : ${elemento2}
        Correo: ${elemento3}
        Edad : ${elemento4}
    `;

    // Llama a la función para enviar el correo
    enviarCorreo(elemento1, elemento2, elemento3, elemento4);
}

function enviarCorreo(elemento1, elemento2, elemento3, elemento4) {
    emailjs.send("cte", "template_au5ssb8", {
        elemento1: elemento1,
        elemento2: elemento2,
        elemento3: elemento3,
        elemento4: elemento4
    })
    .then(function(response) {
        console.log('Correo enviado correctamente', response.status, response.text);
        //alert('Correo enviado correctamente');
    }, function(error) {
        console.error('Error al enviar el correo', error);
       // alert('Hubo un error al enviar el correo');
    });
}

document.getElementById("buscador").addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
      evento.preventDefault(); // Prevenir el comportamiento predeterminado del enter.
  
      let busqueda = this.value.trim().toLowerCase(); // Definir la variable "busqueda" correctamente.
      console.log("Buscando la palabra: ", busqueda);
  
      if (busqueda !== "") {
        let encontrado = buscarPalabraEnPagina(busqueda); // Buscar la palabra en la página.
        if (!encontrado) {
          //alert("Palabra no encontrada");
          console.log("Palabra no encontrada");
        }
      }
    }
  });
  document.getElementById("buscador").addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
      evento.preventDefault(); // Prevenir el comportamiento predeterminado del Enter.
  
      let busqueda = this.value.trim().toLowerCase(); // Obtener la búsqueda.
      console.log("Buscando la palabra: ", busqueda); // Verificar que la búsqueda funcione correctamente.
  
      if (busqueda !== "") {
        let encontrado = buscarPalabraEnPagina(busqueda); // Llamar a la función para buscar la palabra.
        if (!encontrado) {
            console.log("Palabra no encontrada");
         // alert("Palabra no encontrada");
        }
      }
    }
  });
  
  // Función que busca la palabra en el contenido de la página.
  function buscarPalabraEnPagina(palabra) {
    let encontrado = false;
    let todasLasEtiquetas = document.body.getElementsByTagName("*"); // Obtener todas las etiquetas del cuerpo del documento.
  
    for (let i = 0; i < todasLasEtiquetas.length; i++) {
      let etiqueta = todasLasEtiquetas[i];
      
      // Comprobar si la etiqueta contiene texto y si la palabra buscada está en ese texto.
      if (etiqueta.textContent.toLowerCase().includes(palabra)) {
        etiqueta.scrollIntoView({ behavior: "smooth", block: "center" }); // Hacer scroll hasta el elemento encontrado.
        encontrado = true;
        break; // Detener la búsqueda después de encontrar la primera coincidencia.
      }
    }
  
    return encontrado;
  }
  
  