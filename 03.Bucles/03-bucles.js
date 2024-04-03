function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
let count = 0; // Inicializa el contador de vocales en 0
for (let i = 0; i < phrase.length; i++) { // Recorre cada caracter de la frase
    const char = phrase[i].toLowerCase(); // Convierte el caracter a minúscula para comparar con las vocales
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') { // Comprueba si el caracter es una vocal
        count++; // Incrementa el contador si el caracter es una vocal
    }
}
return count; // Devuelve la cantidad total de vocales encontradas
}


function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇
let numero = divisor; // Inicializa el número con el divisor proporcionado
    while (numero % dividendo !== 0) { // Itera hasta encontrar el primer número divisible
        numero++; // Incrementa el número hasta encontrar un divisible
    }
    return numero; // Devuelve el primer número divisible encontrado

}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
function encuentraX(x){
    for (let i = 1; i <= 100; i++) { // Itera sobre los números del 1 al 100
        if (i === x) { // Comprueba si el número actual es igual a 'x'
            return "El numero " + x + " es: " + i; // Retorna un mensaje indicando que se encontró 'x'
        }
    }
}

}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇

    let suma = 0; // Inicializa la variable para almacenar la suma
    for (let i = 0; i <= num; i++) { // Recorre todos los números desde 0 hasta 'num'
        suma += i; // Suma el número actual al total
    }
    return suma; // Devuelve la suma total
}



function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
let decimal = 0; // Inicializa el número decimal resultante
for (let i = num.length - 1, j = 0; i >= 0; i--, j++) { // Recorre los dígitos binarios desde el último al primero
    if (num[i] === '1') { // Comprueba si el dígito actual es '1'
        decimal += Math.pow(2, j); // Agrega el valor correspondiente al dígito al número decimal
    }
}
return decimal; // Devuelve el número decimal resultante

}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
if (numero <= 1) { // Comprueba si el número es menor o igual a 1
    return numero + " no es primo"; // Si es menor o igual a 1, no es primo
}
for (let i = 2; i < numero; i++) { // Itera desde 2 hasta un número antes del número proporcionado
    if (numero % i === 0) { // Comprueba si el número es divisible por algún número en este rango
        return numero + " no es primo"; // Si es divisible, no es primo
    }
}
return numero + " es primo"; // Si no es divisible por ningún número en el rango, es primo
}



function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let invertida = ''; // Inicializa una cadena vacía para almacenar la cadena invertida
    for (let i = cadena.length - 1; i >= 0; i--) { // Recorre la cadena desde el último caracter al primero
        invertida += cadena[i]; // Agrega cada caracter al inicio de la cadena invertida
    }
    return invertida; // Devuelve la cadena invertida
}


  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}