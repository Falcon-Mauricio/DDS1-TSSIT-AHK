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
//console.log(contarUsoDeLaPalabraEnTexto(textoParaLeer, palabraClave));
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

/** Ejercicio 6: Eliminar los espacios en blanco al inicio y final de una cadena
 * Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
 * final de la misma.
 */
function eliminarEspaciosDelInicioYFinal(cadena){
    let palabraEncontrada = "";
    let palabrasAlmacenadas = [];

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] != " ") {
            palabraEncontrada += cadena[i];
        } else if (palabraEncontrada != "") {
            palabrasAlmacenadas.push(palabraEncontrada); 
            palabraEncontrada = "";
        }
    }

    if (palabraEncontrada != "") {
        palabrasAlmacenadas.push(palabraEncontrada);
    }

    return concatenarElementosConSeparador(palabrasAlmacenadas, " ")
}

let cadenaDeEjemplo = "    JavaScript es divertido   ";
//console.log(eliminarEspaciosDelInicioYFinal(cadenaDeEjemplo));
/****************************************************************************************************************/

/** Ejercicio 7: Extraer el dominio de una dirección de correo electrónico.
 * Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el dominio de la misma.
 */

function extraerDominio(correoElectronico){
    let dominio = "";
    let correoElectronicoValido = false;
    let i = 0;

    for (let j = 0; j < correoElectronico.length; j++){
        if(correoElectronico[j] == "@"){
            correoElectronicoValido = true;
            i = j + 1;
        }
    }

    if (correoElectronicoValido){
        for (; i < correoElectronico.length; i++) {
            dominio += correoElectronico[i];
        }
    }
    return dominio;
}

let correoDePrueba = "correo.genial@argentina.campeon"
//console.log(extraerDominio(correoDePrueba));
/****************************************************************************************************************/

/** Ejercicio 8: Combinar dos arrays alternando sus elementos.
 * Crear una función que reciba dos arrays y devuelva un nuevo array 
 * con los elementos de ambos arrays combinados alternativamente
 */

function combinarArrays(primerArray, segundoArray){
    let arrayCombinado = [];
    let cantidadDeElentos = 0;

    if (primerArray.length > segundoArray.length) {
        cantidadDeElentos = primerArray.length;
    } else {
        cantidadDeElentos = segundoArray.length;
    }

    for (let i = 0; i < cantidadDeElentos; i++) {
        if (i < array1.length) {
            arrayCombinado.push(primerArray[i]);
        }
        if (i < array2.length) {
            arrayCombinado.push(segundoArray[i]);
        }
    }

    return arrayCombinado;
}

let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c', 'd'];
//console.log(combinarArrays(array1, array2));
/****************************************************************************************************************/

/** Ejercicio 9: Calcular impuestos.
 * Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
 * su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
 * es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
 * todo el resto un 40%. Los menores de edad no abonan impuestos.
 */

function calcularImpuestos(edad, ingresos){
    let impuestos = 0;

    if (edad < 18){
        return impuestos;
    }

    if (edad >= 18 && edad <= 20){
        impuestos = ingresos * 0.1;
    }else if(edad >= 21 && edad <= 30){
        impuestos = ingresos * 0.15;
    }
    else impuestos = ingresos * 0.40;

    return impuestos;
}

let edadDelTrabajador = 40;
let ingresosDelTrabajador = 1000;
//console.log(calcularImpuestos(edadDelTrabajador, ingresosDelTrabajador));
/****************************************************************************************************************/

/** Ejercicio 10: Resumen de cantidad de likes
 * Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
 * de la cantidad de likes en formato de “K” para miles y “M” para millones.
 */

function resumenLikes(likes){
    if (likes >= 1000000) {
        let decimalesDepuesDelMillon = likes % 100000;
        let likesEnMillones = (likes - decimalesDepuesDelMillon) / 1000000;
        return likesEnMillones + "M";
    } else if (likes >= 1000){
        let decimalesDespuesDeMil = likes % 100;
        let likesEnMiles = (likes - decimalesDespuesDeMil) / 1000;
        return likesEnMiles + "K";
    } else {
        return likes;
    }
}

//console.log(resumenLikes(34567));