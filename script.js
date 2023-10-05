alert("Hola este es mi Javascript");
let nombre = "logo";
var nombre1 = "logo1";
const nombre2 = "logo2";

console.log("logo");
console.log("logo1");
console.log("logo2");
let textoTitulo = "nombre";
let titulo = document.getElementById(".logo");
if (textoTitulo === "logo") {
    titulo.innerHTML = "otro";
} else {
    console.log("no se cumple :(");
}
document.addEventListener("DOMContentLoaded", function() {

    let nombres1 = "zapatos animados";
    let ciudad = "Bogotá";

    function contenido(nombreEmpresa, ciudad) {
        return `Bienvenido a ${nombreEmpresa}, donde la magia de los zapatos cobra vida a través de la encantadora animación de dibujos animados! Nos enorgullece presentar una experiencia única en ${ciudad}, fusionando el arte del calzado con la creatividad y diversión de los dibujos animados. En nuestro universo, cada par de zapatos cuenta su propia historia animada, llevando consigo una narrativa única y lúdica que refleja tu estilo y personalidad. Únete a nosotros en este viaje mágico donde la moda se entrelaza con la imaginación, y cada paso que das es una aventura animada en sí misma.`;
    }
    let parrafo = document.querySelector(".pa");
    parrafo.innerText = contenido(nombres1, ciudad);
});

const form = document.getElementById("form");
const nombredeencuesta = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";
  
    if (nombre.value.length < 4) {
      warnings += `El nombre debe contener más de 4 caracteres`;
      valido = false;
    }
  
    if (!valido) {
      parrafo.innerHTML = warnings;
    } else {
      parrafo.innerHTML = "Enviado";
    }
    return valido;
  }
if (form){
  form.addEventListener("submit"(), (e) => {
    if (validarFormulario()) {
      formulario.submit();
    } else {
      e.preventDefault();
    }
  });
}