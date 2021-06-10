//Ejercicios con condicionales (parte 1)://

/* 1) Agregar al ejercicio 5 de Variables un validador de datos. 
Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error.  */


/* let medida = parseInt (prompt("Ingrese una medida en metros: "));
let pies = 3
let centimetros = 100
let pulgadas = 39.3701
let respies = (medida*3);
let rescenti = (medida*100);
let respulga = (medida*39.3701);

if (isNaN(medida)){
    alert("ERROR. El dato ingresado no corresponde con ninguna medida");
}
else {
 alert(medida+" "+"metros equivalen a: "+respies+" pies"+" "+rescenti+" centímetros"+" "+respulga+" pulgadas.");
} */




/* 2) Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor. */

/* let edad = parseInt (prompt("Ingrese su edad"));
if (edad<18) {
    alert("Es menor de edad.");
}
else {
    alert("Es mayor de edad.")
} */

/* 3) Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. 
Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. 
En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150. */

/* let sabores = prompt("Ingrese sus sabores de helado");
let cobertura = prompt("¿Desea agregar cobertura de chocolate? si/no");
if (cobertura==="si") {
    alert("Su helado sabor "+sabores+" con cobertura de chocolate cuesta $180.");
}
else {
    alert("Su helado sabor "+sabores+" sin cobertura de chocolate cuesta $150.");
} */


/* 4) Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. 
Informar al usuario si el número resultante es par o impar. */

/* let numero1 = parseInt (prompt("Ingrese un número"));
let numero2 = parseInt (prompt("Ingrese otro número"));
let suma = (numero1+numero2);

if (suma%2===0){
    alert(suma+" este número es par.");
}
else {
    alert(suma+" este número es impar.");
} */



/* 5) Solicitar al usuario un número e indicar si es positivo, negativo o cero. */

/* let numero = parseFloat (prompt("Ingrese un número"));

if (numero===0) {
    alert("Este número es cero: "+numero);
}
else if (numero>0) {
    alert("Este número es positivo: "+numero);
}
else if (numero<0) {
    alert("Este número es negativo: "+numero)
} 
else if (isNaN(numero)) {
    alert("El dato ingresado no es un número.")
}
 */


/* 6) Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar. */


/* let monto = parseFloat (prompt("Ingrese un monto"));
let descuento = (monto*10)/100;
let total = (monto-descuento);


if (monto>2000) {
    alert("Se ha aplicado un descuento del %10 y el total a pagar es de: "+total);
}
else {
    alert("El monto a pagar es de: "+monto);
} */


/* 7) Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. 
(Puede ser consonante, espacio, comilla, etc.) */

/* let cadena = prompt("Ingrese una cadena de texto de su preferencia");
let posición = prompt("Ingrese un dígito para elegir una posición");

alert(cadena.charAt(posición));


if (cadena.charAt(posición) === "a") {
    alert("El dígito ingresado es una vocal.");
} else if (cadena.charAt(posición) === "e") {
    alert("El dígito ingresado es una vocal.");
} else if (cadena.charAt(posición) === "i") {
    alert("El dígito ingresado es una vocal.");
} else if (cadena.charAt(posición) === "o") {
    alert("El dígito ingresado es una vocal.");
} else if (cadena.charAt(posición) === "o") {
    alert("El dígito ingresado es una vocal.");
}

else {
    alert("El dígito ingresado no corresponde a una vocal.")
} */



/* 8) Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: 
Reprobado , y 6 o más aprobado.  */

/* let nota = parseFloat(prompt("Ingrese una nota del 1 al 10"));

if (nota>=1 && nota<=3 ) {
    alert("Aplazado");
} else if (nota>=4 && nota<=5) {
    alert("Reprobado");
} else if (nota>= 6) {
    alert("Aprobado");
} */

/* 9) Solicitar al usuario dos números e indicar cual es el mayor o si son iguales. */

/* let numero1 = parseFloat(prompt("Ingrese un número"));
let numero2 = parseFloat(prompt("Ingrese otro número"));

if (numero1===numero2) {
    alert("Los números: "+numero1+" y "+numero2+" son iguales.")
} else if (numero1>numero2) {
    alert("El número 1 de valor: "+numero1+" es mayor que el número 2: "+numero2);
} else if (numero1<numero2) {
    alert("El número 1 de valor: "+numero1+" es menor que el número 2: "+numero2);
} */

/* 10) Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días. */

/* let mes = parseInt(prompt("Ingrese un mes del 1 al 12"));

if (mes===1 || mes===3 || mes===5 || mes===7 || mes===8 || mes===10 || mes===12) {
    alert("El mes número: "+mes+" contiene 31 días.");
}

else if (mes===2) {
    alert("El mes número: "+mes+" contiene 28/29 días.");
}

else {
    alert("El mes número: "+mes+" contiene 30 días.");
} */

/* 11) Solicitar al usuario que ingrese 3 números e indicar cual es el mayor. */

/* let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let numero3 = parseFloat(prompt("Ingrese el tercer número"));

if (numero1>numero2 && numero1>numero3) {
    alert("El número 1 de valor: "+numero1+" es mayor que los números: "+numero2+" y "+numero3);
} else if (numero2>numero3 && numero2>numero1) {
    alert("El número 2 de valor: "+numero2+" es mayor que los números: "+numero1+" y "+numero3);
} else if (numero3>numero1 && numero3>numero2) {
    alert("El número 3 de valor: "+numero3+" es mayor que los números: "+numero1+" y "+numero2);
} */

/* 12) Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). 
Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. 
Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, 
indicar un error). */

/* let edad = parseInt(prompt("Ingrese su edad"));
let bebida = prompt("Ingrese la bebida que desea tomar: cerveza, jugo o agua.");
let cerveza = 150
let jugo = 100
let agua = 50
if (edad<18 && bebida==="cerveza") {
    alert("Su edad es menor a 18 años, por lo cual no puede comprar cerveza.")
} else if (bebida==="jugo") {
    alert("Usted ha solicitado una botella de jugo por el valor de $100")
    let pago = parseFloat(prompt("¿Con cuánto va a abonar?"));
    let vuelto = (pago-jugo);
    alert("Su vuelto es de: $"+vuelto+". Gracias por su compra.")
} else if (bebida==="agua") {
    alert("Usted ha solicitado una botella de agua por el valor de $50")
    let pago = parseFloat(prompt("¿Con cuánto va a abonar?"));
    let vuelto = (pago-agua);
    alert("Su vuelto es de: $"+vuelto+". Gracias por su compra.")
} else if (edad>=18 && bebida==="cerveza") {
    alert("Usted ha solicitado una botella de cerveza por el valor de $150")
    let pago = parseFloat(prompt("¿Con cuánto va a abonar?"));
    let vuelto = (pago-cerveza);
    alert("Su vuelto es de: $"+vuelto+". Gracias por su compra.")
}
 */

/* 13) Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”). */

/* let mes = parseInt(prompt("Ingrese un número de mes del 1 al 12"));
if (mes===1) {
    alert("El mes: "+mes+" corresponde al mes de Enero.");
} else if (mes===2) {
    alert("El mes: "+mes+" corresponde al mes de Febrero.");
} else if (mes===3) {
    alert("El mes: "+mes+" corresponde al mes de Marzo.");
} else if (mes===4) {
    alert("El mes: "+mes+" corresponde al mes de Abril.");
} else if (mes===5) {
    alert("El mes: "+mes+" corresponde al mes de Mayo.");
} else if (mes===6) {
    alert("El mes: "+mes+" corresponde al mes de Junio.");
} else if (mes===7) {
    alert("El mes: "+mes+" corresponde al mes de Julio.");
} else if (mes===8) {
    alert("El mes: "+mes+" corresponde al mes de Agosto.");
} else if (mes===9) {
    alert("El mes: "+mes+" corresponde al mes de Septiembre.");
} else if (mes===10) {
    alert("El mes: "+mes+" corresponde al mes de Octubre.");
} else if (mes===11) {
    alert("El mes: "+mes+" corresponde al mes de Noviembre.");
} else if (mes===12) {
    alert("El mes: "+mes+" corresponde al mes de Diciembre.");
} else {
    alert ("El dato ingresado no corresponde a un número de mes.")
}
 */




//BONUS://

/* Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. 
Si la clave es correcta y el monto mayor al balance, realizar la operación. 
Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible. */

/* let ingreseclave = parseInt(prompt("Ingrese su clave de cuatro dígitos"));
let montoretiro = parseFloat(prompt("Ingrese monto a retirar"));
const clave = 1030
let balance = 15000
let saldofinal = (balance-montoretiro);
if (ingreseclave === clave AND montoretiro<balance) {
    alert("La operación se ha realizado con éxito. Su saldo final es de: $"+saldofinal);
} else if () */


/* Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal. */

/* let mes = parseInt(prompt("Ingrese el número de mes de su nacimiento"));
let dia = parseInt(prompt("Ingrese el número de día de su nacimiento"));

if (mes===1 && dia>=1 && dia<=20) {
    alert("Su signo zodiacal es Capricornio")
} else if (mes===12 && dia>=22 && dia<=31) {
    alert("Su signo zodiacal es Capricornio") 
}
if (mes===1 && dia>=21 && dia<=31) {
    alert("Su signo zodiacal es Acuario")
} else if (mes===2 && dia>=1 && dia<=18) {
    alert("Su signo zodiacal es Acuario")
}
if (mes===2 && dia>=19 && dia<=29) {
    alert("Su signo zodiacal es Piscis");
} else if (mes===3 && dia>=1 && dia<=20) {
    alert("Su signo zodiacal es Piscis");
}
if (mes===3 && dia>=21 && dia<=31) {
    alert("Su signo zodiacal es Aries");
} else if (mes===4 && dia>=1 && dia<=20) {
    alert("Su signo zodiacal es Aries");
}

if (mes===4 && dia>=21 && dia<=30) {
    alert("Su signo zodiacal es Tauro");
} else if (mes===5 && dia>=1 && dia<=21) {
    alert("Su signo zodiacal es Tauro");
}
if (mes===5 && dia>=22 && dia<=31) {
    alert("Su signo zodiacal es Geminis");
} else if (mes===6 && dia>=1 && dia<=21) {
    alert("Su signo zodiacal es Geminis");
}
if (mes===6 && dia>=22 && dia<= 30) {
    alert("Su signo zodiacal es Cancer");
} else if (mes===7 && dia>=1 && dia<=22) {
    alert("Su signo zodiacal es Cancer");
}
if (mes===7 && dia>=23 && dia<=31) {
    alert("Su signo zodiacal es Leo");
} else if (mes===8 && dia>=1 && dia<=23) {
    alert("Su signo zodiacal es Leo");
}
if (mes===8 && día>=24 && dia<=31) {
    alert("Su signo zodiacal es Virgo");
} else if (mes===9 && dia>=1 && dia<=23) {
    alert("Su signo zodiacal es Virgo");
}
if (mes===9 && dia>=24 && dia<=30) {
    alert("Su signo zodiacal es Libra");
} else if (mes===10 && dia>=1 && dia<=23) {
    alert("Su signo zodiacal es Libra");
}
if (mes===10 && dia>=24 && dia<=31) {
    alert("Su signo zodiacal es Escorpio"); 
} else if (mes===11 && dia>=1 && dia<=22) {
    alert("Su signo zodiacal es Escorpio");
}
if (mes===11 && dia>=23 && dia<=30) {
    alert("Su signo zodiacal es Sagitario");
} else if (mes===12 && dia>=1 && dia<=21) {
    alert("Su signo zodiacal es Sagitario");
}
 */

/* Solicitar al usuario que ingrese la hora y su nombre. 
Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. */ 

/* let hora = parseFloat(prompt("Ingrese la hora actual"));
let nombre = prompt("Ingrese su nombre");

if (hora>=12 && hora<19) {
    alert("Buenas tardes "+nombre+".");
} else if (hora>=19 && hora<=24 || hora>=1 && hora<5) {
    alert("Buenas noches "+nombre+".");
} else if (hora>=5 && hora<12) {
    alert("Buenos días "+nombre+".");
} */