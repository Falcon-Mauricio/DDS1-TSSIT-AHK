/** Ejercicio 1: Convertir una cadena de texto a formato de título.
 * Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
 * título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula
 *  */

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
console.log(convertirEnFormatoDeTitulo(textoParaModificar));
/*****************************************************************************************************/

/**Ejercicio 2:Concatenar elementos de un array con un separador personalizado:
 * Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
 * texto que contenga todos los elementos del array concatenados con el separador especificado.
 */
