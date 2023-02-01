import validator from './validator.js';

//console.log(validator);
const numberInput = document.getElementById('cardnumber');
numberInput.addEventListener('keypress', function (e){
  if (!acceptNumber(e)){
    e.preventDefault();
    //console.log(numberInput.value)
    alert('Ingrese sólo números')
  }
})
//Solo permite introducir numeros.
function acceptNumber(e){
  const key = e.charCode
  return key >= 48 && key <= 57;
}
//no valida si esta vacio el campo
const botton = document.getElementById('botton')
function saveInput(){
  const inputValue = numberInput.value;
  if(inputValue.length === 0){
    const inputMensaje = document.getElementById('mensaje')
    inputMensaje.innerHTML = "El campo está vacio"
  //console.log('esta vacio')
  }
  else{
    //isValid(inputValue)
    //console.log(isValid(inputValue))
    const spanMensaje = document.getElementById('mensaje')

    if(validator.isValid(inputValue)) {

      spanMensaje.innerHTML = "Tarjeta validada"
      // aqui debemos poner mensaje de exito
    } else{
      // aqui debemos poner mensaje de fallo
      spanMensaje.innerHTML = "Tarjeta invalida"
    }
  }
}
botton.addEventListener('click', saveInput)

//llamar la función maskify
const valid = document.getElementById('botton')
function maskify() {
  const valid = validator.maskify(document.getElementById('cardnumber').value);
  document.getElementById('cardnumber').value = ""
  document.getElementById('cardnumber').value = valid;
  return valid
}
valid.addEventListener("click", maskify)