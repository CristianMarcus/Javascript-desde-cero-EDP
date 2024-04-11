/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
let bienvenida = (nombre, apellido) => {
    console.log("bienvenido,que tal," + nombre + " " + apellido);
};
    bienvenida("cristian", "marcus");


//imprime por consola bienvenido,que tal cristian marcus

/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
/*Esta función calc acepta tres parámetros: num1, operador y num2. El operador
 puede ser +, -, * o /. Dependiendo del operador proporcionado, la función
 realizará la operación correspondiente entre num1 y num2 y devolverá el 
resultado. Si el operador no es válido o se intenta dividir por cero, se devuelve 
un mensaje de error apropiado.
*/
function calc(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: división por cero';
            }
        default:
            return 'Operador inválido';
    }
}
//llamada a la funcion. paso el nombre de la funcion,seguido y entre parentesis
//los parametros,en este caso el operador pasa como string para poder compararlo
//con los valores literales dentro del switch(ejemplo:"+","-","*","/" = (literales
                                                                    //de cadena))
calc(8, "-",1 )

/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
/*Esta función temp acepta tres parámetros: max (temperatura máxima), 
min (temperatura mínima) y porcentajeLluvia (porcentaje de lluvia). Según los 
valores proporcionados, la función determina el mensaje adecuado que debe 
devolver.
*/
function temp(max, min, porcentajeLluvia) {
    let resultado = temp;
    let mensaje = '';

    if (max < 15) {
        mensaje = 'Es recomendable salir con abrigo';
    } else if (max < 26 && min > 17) {
        mensaje = 'El día está lindo';
    } else if (min > 25) {
        mensaje = 'El día estará caluroso';
    }

    if (porcentajeLluvia > 50) {
        mensaje += ', recomendable un paraguas';
     
    }

    return mensaje;
}

 console.log(temp(14,9,50))

/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:
/**
*Instruccion:
*Esta función checkPassword acepta un parámetro password, que representa la
*contraseña a verificar. Luego, verifica si la longitud de la contraseña es
*mayor o igual a 8 caracteres. Si es así, devuelve el mensaje "La contraseña
*es segura"; de lo contrario, devuelve el mensaje "La contraseña es insegura".
*/ 
function checkPassword(password){
    if(password.length >= 8){
        return "la constraseña es segura";
    }else {
        return "la contraseña es insegura";
    }

}
console.log(checkPassword("contraseña2005"));


/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:
/** 
* En esta versión simplificada, utilizamos un bucle for para iterar sobre el
* array de palabras en orden inverso. Dentro del bucle, agregamos cada palabra 
* al string resultado, seguida de un espacio. Al final, utilizamos el método 
* trim() para eliminar el espacio extra al final del string resultado antes de
* devolverlo.
*/
function stringInverso(str) {
    // Dividir el string en un array de palabras utilizando el espacio como separador
    let palabras = str.split(" ");
    // Inicializar una variable para almacenar el string invertido
    let resultado = "";
    // Iterar sobre el array de palabras en orden inverso
    for (let i = palabras.length - 1; i >= 0; i--) {
        // Agregar cada palabra al string resultado, seguida de un espacio
        resultado += palabras[i] + " ";
    }
    // Devolver el string resultado sin el espacio extra al final
    return resultado.trim();
}




/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}