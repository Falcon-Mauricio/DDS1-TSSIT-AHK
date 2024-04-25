/** Ejercicio 1: Convertir una cadena de texto a formato de título.
 * Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
 * título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula
 */

function convertirEnFormatoDeTitulo(texto){
    let textoEnFormatoDeTitulo = texto[0].toUpperCase();
    for(let i = 1; i < texto.length; i++){
        if(texto[i - 1] == ' ') {
            textoEnFormatoDeTitulo += texto[i].toUpperCase();
        } else {
            textoEnFormatoDeTitulo += texto[i].toLowerCase();
        }
    }
    return textoEnFormatoDeTitulo;
}

let textoParaModificar = "este texto es increiblemente bueno";
//console.log(convertirEnFormatoDeTitulo(textoParaModificar));
/****************************************************************************************************************/

/** Ejercicio 2: Concatenar elementos de un array con un separador personalizado:
 * Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
 * texto que contenga todos los elementos del array concatenados con el separador especificado.
 */

function concatenarElementosConSeparador(elementos, separador){
    let elementosConcatenados = "";
    for (let i = 0; i < elementos.length; i++){
        elementosConcatenados += elementos[i];
        if(i != elementos.length - 1){
            elementosConcatenados += separador;
        }
    }
    return elementosConcatenados;
}

let elementosParaConcatenar = ["Hola", "soy", "Mauricio", "Falcon", "y", "este", "texto", "es", "increible"];
let elementoSeparador = "-"
//console.log(concatenarElementosConSeparador(elementosParaConcatenar, elementoSeparador))
/****************************************************************************************************************/

/** Ejercicio 3: Revertir las palabras de una frase.
 * Crear una función que reciba una cadena de texto 
 * y devuelva la misma cadena con las palabras en orden inverso
 */

function revertirPalabras(frase) {
    let palabra = "";
    let palabrasInvertidas = [];
    for (let i = frase.length - 1; i >= 0; i--) {
        if (frase[i] != " ") {
            palabra = frase[i] + palabra;
        } else if (palabra != "") {
            palabrasInvertidas.push(palabra); 
            palabra = "";
        }
    }

    if (palabra != "") {
        palabrasInvertidas.push(palabra);
    }

    let fraseInvertida = "";
    for (let i = 0; i < palabrasInvertidas.length; i++) {
        fraseInvertida += palabrasInvertidas[i];
        if (i != palabrasInvertidas.length - 1) {
            fraseInvertida += " ";
        }
    }

    return fraseInvertida;
}

let fraseOriginal = "Soy Mauricio Falcon y estoy estudiando";
//console.log(revertirPalabras(fraseOriginal));
/****************************************************************************************************************/

/** Ejercicio 4: Contar la cantidad de veces que aparece una palabra en una cadena:
 * Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
 * veces que aparece esa palabra en la cadena.
 */

function contarUsoDeLaPalabraEnTexto(texto, palabraParaBuscar){
    let vecesQueSeRepiteLaPalabra = 0;
    let palabraEncontrada = "";

    texto = texto.toLowerCase();
    palabraParaBuscar = palabraParaBuscar.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            palabraEncontrada += texto[i];
        }
        else if (palabraEncontrada == palabraParaBuscar) {
            vecesQueSeRepiteLaPalabra++; 
            palabraEncontrada = "";
        }
        else palabraEncontrada = "";
    }

    if (palabraEncontrada == palabraParaBuscar) {
        vecesQueSeRepiteLaPalabra++;
    }

    return vecesQueSeRepiteLaPalabra;
}

let textoParaLeer = "El dia de hoy me ecuentro leyendo el libro de el escritor James Clear el de Habitos Atomicos";
let palabraClave = "El";
console.log(contarUsoDeLaPalabraEnTexto(textoParaLeer, palabraClave));
/****************************************************************************************************************/

/** Ejercicio 5: Comprobar si una cadena de texto termina con un determinado sufijo
 * Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
 * termina con ese sufijo, false en caso contrario.
 */

function terminaConSufijo(cadena, sufijo) {
    if (sufijo.length > cadena.length) {
        return false;
    }

    let sufijoIndex = sufijo.length - 1;
    let cadenaIndex = cadena.length - 1;

    while (sufijoIndex >= 0) {
        if (cadena[cadenaIndex] !== sufijo[sufijoIndex]) {
            return false;
        }
        sufijoIndex--;
        cadenaIndex--;
    }

    return true;
}

const ejemploCadena = "JavaScript es un lenguaje de programación";
const sufijoUsado = "ón";
//console.log(terminaConSufijo(ejemploCadena, sufijoUsado));
/****************************************************************************************************************/