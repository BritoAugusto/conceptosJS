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

/* let fraseCompleta = "";

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
*/

// ejercicio 10 TP-2
// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingrese un número de filas'))
const columnas = parseInt(prompt('Ingrese un número de columnas'))
            
document.write(`<table>
            <tbody>`)
  document.write(`<tr>`)
for(let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++)
    document.write(`<td>1</td>`)

    document.write(`</tr>`) 
document.write(`</tbody> </table>`)
