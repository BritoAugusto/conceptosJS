// numero 1 - domingo hasta el 7 = sabado

do {
let dia = prompt('Ingresa el numero del dia');
console.log(new Date())
dia = dia.toLowerCase(); // aqui transformo en minuscula
// dia = dia.toUpperCase(); Aqui transfromo en mayuscula
switch (dia) {
    case "1":
    case "domingo":
         document.write('Hoy es domingo');
         console.log('Hoy es domingo');
    break;
     case "2":
         document.write('Hoy es Lunes');
         console.log('Hoy es lunes');
         break;
         case "3":
         document.write('Hoy es Martes');
         console.log('Hoy es Martes');
         break;

         default:
            document.write('Ingresaste un valor invalido')

}
}while(confirm('¿Desea Continuar?'))