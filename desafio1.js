//Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!". //

alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Declara una variable llamada nombre y asígnale el valor "Lua". //

//let nombre = "Lua";

//Crea una variable llamada edad y asígnale el valor 25.//

//let edad;

//Establece una variable numeroDeVentas y asígnale el valor 50.//

let numeroDeVentas = 50;

//Establece una variable saldoDisponible y asígnale el valor 1000.//

let saldoDisponible = 1000;

//Muestra una alerta con el texto "¡Error! Completa todos los campos".//

alert("¡Error! Completa todos los campos");

/*Declara una variable llamada mensajeDeError y asígnale el valor 
"¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .*/

let mensajeDeError = "¡Error! Completa todos los campos";

alert(`${mensajeDeError}`);

//Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.//

nombre = prompt("Digite el nombre de usuario: ");

//Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.//

edad = Number(prompt("Ingrese su edad actual: "));

/*Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener 
tu licencia de conducir!".*/

if (edad>=18){
    alert("¡Puedes obtener tu licencia de conducir!");
}else{
    alert("¡No puedes obtener tu licencia de conducir!");
}
