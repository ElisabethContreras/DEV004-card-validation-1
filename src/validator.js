const validator = {
//tiposTarjeta: function(){
//función para identificar la marca de la tarjeta, hito 5 opcional
    
  //},
  //algoritmo de Luhn, utilizando el código de la parte "a"
  isValid(creditCardNumber){
    //Para invertir el array utilicé el .trim para que no considere los espacio vacios en el comienzo y final
    //el .split para dividir el string en subcadenas, es decir que con esto separo los valores
    // y el . reverse para revertir el array una vez dividido
    const arrayInvertido = creditCardNumber.trim().split("").reverse();
    // en arrayPar se usó el .filter para crear un nuevo array con los elementos que cumplan la condición impuesta en la función
    //para este caso sería que sea un número par
    const arrayPar = arrayInvertido.filter(function (a, b) {
      if (b % 2 === 1) return a;
    });
    //Aquí se uso igual que antes, sólo que para encontrar los números impares
    let arrayImpar = arrayInvertido.filter(function (a, b) {
      if (b % 2 === 0) return a;
    });
    // el método .map vuelve los strings en números de forma momentanea
    const arrayNuevo = arrayPar.map(function (parmulti) {
      const multipar = parmulti * 2;
      if (multipar >= 10) {
        const mayor10 = multipar.toString().split("").map(Number);
        //el método .reduce, va sumando todos los valores hasta llegar a un sólo número
        const arraysuma = mayor10.reduce(function (a, c) {
          return a + c;
        });      return arraysuma;
      }
      else { return multipar }
    });
    arrayImpar = arrayImpar.map(Number)
    const sumapar = arrayNuevo.reduce(function (a, b) {
      return a + b;
    })
    const sumaImpar = arrayImpar.reduce(function (a, c) {
      return a + c;
    })
    const resultado = sumapar + sumaImpar;
    if (resultado % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(){

  }
}



export default validator;
