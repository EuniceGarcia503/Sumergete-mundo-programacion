alert("¡Juguemos adivina el número secreto!"); //mensaje de bienvenida//
let numeroSecreto = 3;
console.log(numeroSecreto);
let numeroUsuario = prompt("¡Ingresa un número por favor!"); //Número ingresado por el usuario//
console.log(numeroUsuario);

if(numeroUsuario==numeroSecreto){
    alert("¡Excelente, lograstes acertar!");
} else{ 
    alert("¡No acertaste! Realiza un nuevo intento.");
}




