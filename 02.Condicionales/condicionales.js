// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:
let edad = prompt("Ingrese su edad(la condicion es ser mayor de 18 años)")
if (edad >= 18) {
        console.log("puede inscribirse")
} else
        console.log("no puede inscribirse,es menor de edad")


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:
let calificacion = prompt("ingrese una calificacion de 0 al 100")
if(calificacion >=90){
        console.log("Exelente")
}else if(calificacion=70 || calificacion<=89){
        console.log("Bueno")
}else if(calificacion = 60 || calificacion <= 69){
        console.log("suficiente")
}else if(calificacion < 60){
        console.log("insuficiente")
}else{
        console.log("ingrese un caracter valido")
}


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:
let numero = prompt("ingrese un numero")
if (numero % 2) {
        console.log("su numero es par")
} else {
        console.log("su numero es imoapar")

}
//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:
let dias = prompt("ingrese un numero del 1 al 7 para elegir un dia(lunes=1 y viernes=7)")
switch (parseInt(dias)) {
        case 1:
                console.log("lunes");
                break;
        case 2:
                console.log("martes");
                break;
        case 3:
                console.log("miercoles");
                break;
        case 4:
                console.log("jueves");
                break;
        case 5:
                console.log("viernes");
                break;
        case 6:
                console.log("sabado");
                break;
        case 7:
                console.log("domingo");
                break;
        default:
                console.log("ingrese un dia o caracter correcto")        
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:


//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:
let edadd = prompt("ingrese su edad")
if(edadd <= 18){
        console.log("menor de edad")
}else if(edadd > 18 && edadd <= 65){
        console.log("adulto")
}else if(edadd > 65){
        console.log("senior")
}else{
        console.log("ingrese un caracter o numero correcto")
}

//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)