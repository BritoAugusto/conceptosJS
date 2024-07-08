/*
tp-1
let frase = prompt('ingrese una frase')
console.log(frase.length)

frase = frase.toLowerCase();

for(let i = 0; i < frase.length; i++ ){
    if (frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u') {
        document.write(frase.charAt(i))
    }
} */

    //tp2 ejercicio 3

    // 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let fraseCompleta = "";

do {
    const palabraIngresada = prompt('ingrese una palabra')
    // preguntar si palabraIngresada no es null
    if(palabraIngresada !== null && palabraIngresada  !== ""){
    // preguntar si fraseCompleta esta vacia
    if (fraseCompleta.length === 0) {
        fraseCompleta = palabraIngresada;
    }else{
      fraseCompleta = fraseCompleta +'-' + palabraIngresada;
}
}
    console.log(fraseCompleta);
}while (confirm('¿Desea Continuar?'));

console.log(fraseCompleta);

document.write(`Frase ingresada: ${fraseCompleta}`);
