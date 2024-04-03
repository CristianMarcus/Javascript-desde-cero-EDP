function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:
    let numero = prompt("ingrese un numero")
    if (numero <= 0) {
        console.log("es negativo")
    } else
        console.log("es positivo")




}


function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no. (true o false)
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:

}

function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Devolver "Aprobó" o "Reprobó"
    // Tu código 👇:
    let calificacion = prompt("ingrese su calificacion")
    if (calificacion >= 60) {
        console.log("aprobo")
    } else
        console.log("reprobo")

}

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Devolver el numero mayor
    // Tu código 👇:
    let num1, num2, num3 = prompt("ingrese un numero")
    if (num1 > num2 && num1 > num3) {
        console.log("el 1er numero es el mayor")
    } else if (num2 > num1 && num2 > num3) {
        console.log("el 2do numero es el mayor")

    } else
        console.log("el 3er numero es el mayor")

}

function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Devolver true o false
    // Tu código 👇:
    let verificarnumero = prompt("ingrese un numero")
    //los numeros menores o iguales a 1 no son primos
    if(verificarNumero <=1){
        console.log("el numero no es primo")
    }else
        console.log("el numero es primo")    

}

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}