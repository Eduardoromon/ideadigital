// funcion mostrar navegador responsive

const itemMenu = document.getElementById("item-menu");
 itemMenu.addEventListener("click", function () {
    document.getElementById("navegador").classList.toggle("nav-responsive"); 
 });

//navegador = document.querySelector(".navegador");
//
//document.getElementById("item-menu").addEventListener("click", menu_responsive);

//function mostrar() {
//  navegador.style.display = "block";
//  navegador.style.position = "absolute";
//  navegador.style.top = "7vw";
//  navegador.style.width = "90%";
//  navegador.style.height = "auto";
//  navegador.style.backgroundColor = "#ffffff";
//  navegador.style.boxShadow = "0 3px 4px 0 rgba(0, 0, 0, 0.1)"
//  navegador.style.marginLeft = "100%";
//  //navegador.style.transform = "translate(-50%)";
//  
//}
//
//function ocultar() {
//  navegador.style.display = "none";
//}
//
//function menu_responsive() {
//  if (navegador.style.display == "none") {
//    mostrar();
//  } else {
//    ocultar();
//  }
//}

//-----------------creando slider------------------------


const slider = document.querySelector("#slider");
let cajasSlider = document.querySelectorAll(".caja-imagen-estrategia");
let cajaSliderLast = cajasSlider[cajasSlider.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', cajaSliderLast);

function Next() {
  let cajaSliderFirst = document.querySelectorAll(".caja-imagen-estrategia")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', cajaSliderFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let cajasSlider = document.querySelectorAll(".caja-imagen-estrategia");
  let cajaSliderLast = cajasSlider[cajasSlider.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', cajaSliderLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function () {
  Next();
});
btnLeft.addEventListener('click', function () {
  Prev();
});


//---------------validando formulario----------------------

//
//const nombre = document.getElementById("nombre");
//const email = document.getElementById("email");
//const empresa = document.getElementById("empresa");
//const telefono = document.getElementById("telefono");
//const btnSubmit = document.querySelector(".boton-submit");
//const resultado = document.querySelector(".resultado");
//const expresion = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
//const exptelefono = new RegExp(/^\d{7,14}$/);
//
//
//btnSubmit.addEventListener("click", (e) => {
//  e.preventDefault();
//  let error = validarCampos();
//  if (error[0]) {
//    resultado.innerHTML = error[1];
//    resultado.classList.add("red");
//    resultado.classList.remove("green");
//  } else {
//    resultado.innerHTML = "SOLICITUD ENVIADA CORRECTAMENTE";
//    resultado.classList.add("green");
//    resultado.classList.remove("red");
//  }
//})
//
//const validarCampos = () => {
//  let error = [];
//  if (nombre.value == "" || nombre.value.length < 2 || nombre.value.length > 10) {
//    error[0] = true;
//    error[1] = "EL NOMBRE NO ES CORRECTO";
//    return error;
//
//  } else if (!expresion.test(email.value)) {
//    error[0] = true;
//    error[1] = "EL EMAIL NO ES CORRECTO";
//    return error;
//
//
//  } else if (empresa.value == "" || empresa.value.length < 1 || empresa.value.length > 14) {
//    error[0] = true;
//    error[1] = "EL CAMPO EMPRESA NO ES CORRECTO";
//    return error;
//
//  } else if (!exptelefono.test(telefono.value)) {
//    error[0] = true;
//    error[1] = "EL TELEFONO NO ES CORRECTO";
//    return error;
//
//  }
//
//  error[0] = false;
//  return error;
//
//
//}
