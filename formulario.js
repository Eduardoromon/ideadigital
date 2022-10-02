// JavaScript Document
//---------------validando formulario----------------------


const formulario = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const empresa = document.getElementById("empresa");
const telefono = document.getElementById("telefono");
const btnSubmit = document.querySelector(".boton-submit");
const resultado = document.querySelector(".resultado");
const expresion = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
const exptelefono = new RegExp(/^\d{7,14}$/);


btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  
  let error = validarCampos();
  if (error[0]) {
    resultado.innerHTML = error[1];
    resultado.classList.add("red");
    resultado.classList.remove("green");
  } else {
    resultado.innerHTML = "SOLICITUD ENVIADA CORRECTAMENTE";
    resultado.classList.add("green");
    resultado.classList.remove("red");
  }
})

const validarCampos = () => {
  let error = [];
  if (nombre.value == "" || nombre.value.length < 2 || nombre.value.length > 10) {
    error[0] = true;
    error[1] = "EL NOMBRE NO ES CORRECTO";
    return error;

  } else if (!expresion.test(email.value)) {
    error[0] = true;
    error[1] = "EL EMAIL NO ES CORRECTO";
    return error;


  } else if (empresa.value == "" || empresa.value.length < 1 || empresa.value.length > 14) {
    error[0] = true;
    error[1] = "EL CAMPO EMPRESA NO ES CORRECTO";
    return error;

  } else if (!exptelefono.test(telefono.value)) {
    error[0] = true;
    error[1] = "EL TELEFONO NO ES CORRECTO";
    return error;

  }

  error[0] = false;
  return error;


}



