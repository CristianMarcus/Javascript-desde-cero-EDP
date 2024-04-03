// Aprendiendo a usar nuestras herramientas y lo aprendido hasta ahora!!
// Para ver el resultados de los siguientes ejercicio tendras que tener abierto la pagina/archivo index.html



// Resuelve los siguientes problemas, el resultado tiene que estar dentro dentro de document.write() - NO MODIFICAR LOS TITULOS.
alert("Bienvenidos,contesten a las siguientes preguntas para ver la pagina completa en su totalidad");

// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - '+
'En una tienda, se vendieron 5 camisetas en un día y luego se vendieron otras 3 camisetas. ¿Cuántas camisetas se vendieron en total?--Resultado:</p></div>')
// Tu codigo 👇:
    document.write("Se vendieron en total: ")
    document.write(5+3)
//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Promedio del Estudiante | '+
'Ejercicio N° 1:'+
'Un estudiante obtuvo calificaciones de 8, 7 y 9 en tres exámenes respectivamente. ¿Cuál es el promedio de sus calificaciones?--Resultado:</p></div>')
// Tu codigo 👇:
    document.write("El promedio de su calificacion es: ")
    document.write((7+8+9)/3)


//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Longitud de una cadena |'+
'Ejercicio N° 2:'+
'Juan quiere saber cuántas letras tiene su nombre. ¿Cuál es la longitud del nombre "Juan"?-- Resultado:</p></div>')
// Tu codigo 👇
  let nombre = "juan"
  document.write("La longitud del nombre de juan es de: " + nombre.length + " Caracteres " )  
 

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Metros a Pies |'+
'Ejercicio N° 3:'+
'Si una distancia se mide en metros y se desea conocer su equivalencia en pies, donde 1 metro equivale a 3.281 pies, ¿cuántos pies son 10 metros?-- Resultado:</p></div>')
// Tu codigo 👇:

document.write("Diez metros son: " + Math.round(10*3.281/1) + " pies ") 

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Descuentos | '+
'Ejercicio N° 4:'+
'Un producto tiene un precio original de $100. Si hay un descuento del 20%, ¿cuál es el precio final del producto después del descuento?--Resultado:</p></div>')
// Tu codigo 👇:
document.write("El precio final con descuanto es de : ")
document.write(100-20)

//_________________________________________


'⚠️⚠️ Resuelve los siguientes problemas, el resultado tiene que estar dentro dentro de console.log() ⚠️⚠️'+
'⚠️⚠️ Los resultados los podrás ver dentro del panel de desarrollador del mismo index.html en consola ⚠️⚠️'+
/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Bienvenida | '+
'Ejercicio N° 5:'+
'Pidele al usuario que ingrese su Nombre y Apellido - luego devuelve por consola un saludo de bienvenida concatenando su nombre y apellido.'+
'Ejemplo: Lionel Messi -> Bienvenido Lionel Messi--Resultado:</p></div>')
// Tu codigo 👇:
let saludo = "Bienvenida/o"
let nomyape 
nomyape = prompt("ingrese su nombre y apellido")
console.log(saludo + " " + nomyape)
document.write(saludo+" "+nomyape)

//_________________________________________
/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 6 - Bienvenida al curso| '+
'Ejercicio N° 6:'+
'Pedir al usuario nombre y apellido, darle la bienvenida al curso de JAVA.Resultado:</p></div>')
// Tu codigo 👇:
    let nombreyapellido = prompt("ingrese su nombre y apellido")
    let saludos = "bienvenida/o"
    document.write(saludos + " " + nombreyapellido + " al curso de JavaScript ")

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 7 - Par o impar |'+
 'Ejercicio N° 7:'+
 'Pedirle al usuario que ingrese un numero, y el programa determine si es par'+
' o impar. Resultado:</p></div>')
// Tu codigo 👇:
let numero = prompt("ingrese un numero ")
if(numero % 2===0)
    document.write("El numero que ingreso es par")
else {
    document.write ("el numero que ingreso es impar")
}
//_________________________________________________________
/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 8 - Metros a pulgadas | '+
'Ejercicio 8-'+
' Pasar de metros ingresados por el usario a pulgadas.-Resultado:</p></div>')
// Tu codigo 👇:

let metrosIngresados = prompt("ingrese los metros a convertir en pulgadas")
let metropul = metrosIngresados*39.37/1
document.write("Los metros ingresados por el usuario convertidos a pulgadas son: " + metropul) 

//________________________________________________________:
/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N°9- En la Escuela de Programación tienen'+
 ' como condicion para poder inscribirse a los cursos,que la persona tenga 18 '+
' años o más.Pidele al usuario que ingrese su edad usando prompt, y en caso '+
  ' que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.'+
  ' caso contrario se le indica que no puede inscribirse y la razón-Resultado:</p></div>')

// Tu codigo 👇:
let edad = prompt("Ingrese su edad")
if(edad >= 18){
    document.write("Puede inscribirse a la escuela de programacion, " + " su edad es de " + edad + " años ")
}else if(edad <= 17){
    document.write("Lo sentimos pero no puede inscribirse,tiene, " + edad + "" , " es menor de edad ")
}else {
   document.write("Por favor,ingrese un caracter valido") 
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 10 - Calificación | '+
' Ejercicio N° 10:'+
 'Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:'+
'Calificación de 90 o más: "Excelente"'+
 'Calificación entre 70 y 89: "Bueno"'+
 'Calificación entre 60 y 69: "Suficiente"'+
 'Calificación menor a 60: "Insuficiente" - Resultado:</p></div>')
// Tu codigo 👇:
let calificacion = prompt("'Ingrese una calificacion del 0 al 100'")
let calificacionabs = calificacion

if (calificacion >= 90){
    document.write("Excelente",",","su calificacion es de: " + calificacionabs);

}else if (calificacion >= 70 && calificacion < 90){
    document.write("'Bueno'",",","su calificacion es de: " + calificacionabs);

}else if (calificacion >= 60 && calificacion < 70){
    document.write("'Suficiente'",",","su calificacion es de: " + calificacionabs);

}else if (calificacion <= 59) {
    document.write("'Insuficiente'",",","su calificacion es de: " + calificacionabs)
}else{
    document.write("Ingrese una calificacion del 0 al 100, sin exepcion")
}   
  
//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 11 - Par o Impar |' +
' Ejercicio N° 11:'+
' Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar--Resultado:</p></div>')
// Tu codigo 👇:
let paroimpar = prompt("Ingrese un numero entero")
if (paroimpar %2 === 0){
    document.write("Su numero es par")    
}else if(paroimpar %2  > 0) {
    document.write("Su numero es impar")
}else {
    document.write("Ingrese un numero entero sin exepción")

}    
    


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 12 - Día de la Semana |'+
' Ejercicio N° 12:'+
 'Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.'+
 'Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes". Resultado:</p></div>')
// Tu codigo 👇:
let numeros = prompt("ingrese un numero del 1 al 7,donde 1 = lunes y 7 = domingo")

switch (numeros){
    case "1":
        document.write("Lunes");
        break;
    case "2":
        document.write("martes");
        break   
    case "3":
        document.write("miercoles");
        break;
    case "4":
        document.write("jueves");
        break;
    case "5":
        document.write("viernes");
        break;
    case "6":
        document.write("sabado");
        break;
    case "7":
        document.write("domingo");
        break;  
    default:
        document.write("ingrese un caracter valido");                      

}
//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 13 - Antigüedad laboral | '+
'Ejercicio N° 13:'+
' Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.'+
' Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,'+
' el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.--Resultado:</p></div>')
// Tu codigo 👇:
let antiguedadaños = prompt("Ingrese su antiguedad en años en la empresa")
let salarioactual = prompt("ingrese su salario actual en la empresa")
let salariobonificado = (10/100+1)*salarioactual

if (antiguedadaños >= 5 && salarioactual <= 500){
    document.write("Has sido elegido para una bonificacion del 10% en tu salario,por lo tanto tu salario actual quedaria en $ "+salariobonificado)
}else {
    document.write("Disculpe,su salario queda excento de la bonificacion,por lo tanto su salario es de $ " + salarioactual)
}
//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 14 - Rango de edad | '+
 'Ejercicio N° 14:'+
 'Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:-Resultado:</p></div>')
 'Menor de 18 años: "Menor de edad"'+
 'Entre 18 y 65 años: "Adulto"'+
 'Mayor de 65 años: "Senior"'
// Tu codigo 👇:
let edadd = prompt("Ingrese su edad")
if(edadd < 18){
    document.write("Menor de edad")
}else if(edadd >=18 && edadd <=65){
    document.write("Adulto")
}else
    document.write("Señor/a")
  




//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)