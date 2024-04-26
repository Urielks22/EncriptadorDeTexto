function encriptarTexto(texto) {

     // Convertir el texto a minúsculas para asegurar la consistencia
    texto = texto.toLowerCase();

    // Reemplazar cada letra del texto según las reglas de encriptación

    // */g* Esto es una bandera de modificador que se coloca al final de la expresión regular. 
    //En este caso, /g es el modificador global, que significa que la búsqueda se realizará 
    //globalmente en todo el texto. Sin este modificador, solo se realizaría la primera coincidencia 
    //encontrada en el texto.
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    // Retornar el texto encriptado
    return texto;
}

function desencriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function encriptarMensaje() {

    // Obtener el elemento del DOM que representa el cuadro de texto de entrada donde el usuario ingresa su mensaje
    let mensajeInput = document.getElementById("mensaje");
    // Obtener el elemento del DOM que representa el párrafo donde se mostrará el resultado encriptado o desencriptado
    let resultadoOutput = document.getElementById("resultado");

    // Obtener el valor del mensaje original ingresado por el usuario
    let mensajeOriginal = mensajeInput.value;

    // Llamar a la función 'encriptarTexto' con el mensaje original como argumento
    // Esta función toma el mensaje original y lo encripta según las reglas especificadas
    let mensajeEncriptado = encriptarTexto(mensajeOriginal);

    // Mostrar el resultado encriptado dentro del área de texto 'resultado'
    resultadoOutput.value = mensajeEncriptado;
    
    // Borrar el mensaje original después de encriptar
    mensajeInput.value = "";
}


function desencriptarMensaje() {

    // Obtener el elemento del DOM que representa el cuadro de texto de entrada donde el usuario ingresa el mensaje
    let mensajeInput = document.getElementById("mensaje");

    // Obtener el elemento del DOM que representa el párrafo donde se mostrará el resultado encriptado o desencriptado
    let resultadoOutput = document.getElementById("resultado");

    // Obtener el valor actual del mensaje encriptado ingresado por el usuario
    let mensajeEncriptado = mensajeInput.value;
    
    // Llamar a la función 'desencriptarTexto' con el mensaje encriptado como argumento
    // Esta función toma el mensaje encriptado y lo desencripta según las reglas especificadas
    let mensajeDesencriptado = desencriptarTexto(mensajeEncriptado);

    // Mostrar el resultado desencriptado dentro del área de texto 'resultado'
    resultadoOutput.value = mensajeDesencriptado;
    
    // Borrar el mensaje encriptado después de desencriptar
    mensajeInput.value = "";
}


function copiarResultado() {
    let resultadoOutput = document.getElementById("resultado");

    // Obtener el resultado encriptado o desencriptado mostrado
    let resultado = resultadoOutput.value;

    // Crear un elemento de texto temporal y copiar el resultado
    let tempInput = document.createElement("textarea"); // Creamos un nuevo elemento <textarea> en el documento
    tempInput.value = resultado; // Asignamos el valor del resultado al atributo value del elemento <textarea>
    document.body.appendChild(tempInput); // Agregamos el <textarea> al final del cuerpo del documento
    tempInput.select(); // Seleccionamos todo el contenido del <textarea> temporal
    document.execCommand("copy"); // Ejecutamos el comando de copiado en el navegador
    document.body.removeChild(tempInput); // Eliminamos el <textarea> temporal del DOM después de copiar el texto

    // Notificar al usuario que el resultado ha sido copiado
    alert("El mensaje ha sido copiado al portapapeles.");
}



// Ejemplo de uso:
let textoOriginal = "Hola, este es un ejemplo";
let textoEncriptado = encriptarTexto(textoOriginal);
let textoDesencriptado = desencriptarTexto(textoEncriptado);

console.log("Texto Original: " + textoOriginal);
console.log("Texto Encriptado: " + textoEncriptado);
console.log("Texto Desencriptado: " + textoDesencriptado);
