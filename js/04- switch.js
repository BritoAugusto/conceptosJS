// numero 1 - domingo hasta el 7 = sabado

const dia = parseInt(prompt('Ingresa el numero del dia'))

// if(dia === 1 ){
//     document.write('Hoy es domingo')
// }else if (dia === 2) {
//     document.write
// }

switch (dia) {
    case 1:
         document.write('Hoy es domingo');
    break;
     case 2:
         document.write('Hoy es Lunes');
         break;
         case 3:
         document.write('Hoy es Martes');
         break;

         default:
            document.write('Ingresaste un valor invalido')

}