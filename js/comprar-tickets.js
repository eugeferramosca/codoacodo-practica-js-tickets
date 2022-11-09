const TICKET = 200;
const ESTUDIANTE= 0.8;
const TRAINEE=0.5;
const JUNIOR=0.15;

const nombre =document.querySelector("#nombre");
const apellido =document.getElementById("apellido");
const email =document.querySelector ("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const btnResumen= document.querySelector ("#btnResumen");
const btnClear =document.querySelector ("btnBorrar");
let totalPago= document.querySelector("#totalPago");

btnResumen.addEventListener("click",calcularMonto);

function limpiarRegistros(){
    nombre.value="";
    apellido.value="";
    email.value="";
    cantidad.value="";
    categoria.value="";
    totalPago.textContent="";
}
function calcularMonto(){
    if (validarCampos()){
        totalPago.textContent = (TICKET-TICKET*calcularDescuento())*cantidad.value;    
    }
    else {
        totalPago.textContent = "";
    }
}

function calcularDescuento(){
switch(categoria.value){
    case "0":
        return 0;
    case "1":
        return  ESTUDIANTE;
    case "2":
        return TRAINEE;
    case "3":
        return JUNIOR;
    
    default:
        mensaje = "Elige una categoria";
        break;
}
alert(mensaje);
}

      function validarCampos(event){
        var retorno = 0;
        var emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var retorno = 0;
        if(nombre.value=== ""){
                alert("Ingresa un nombre");
                retorno = 1;
                return false;
        }

        if(apellido.value=== ""){
            alert("Ingresa un apellido");
            retorno = 1;
            return false;

        }

        if(email.value === "" || !emailregex.test(email.value)) {
          alert("Ingresa un email válido");
          retorno = 1;
          return false;

        }
        
        if(cantidad.value === ""|| cantidad.value > 6) {
            alert("Solo se pueden adquirir 5 entradas como máximo");
            retorno = 1;
            return false;

        }

        return true;

    }

    function changeBgColor (obj, colorName){
        obj.style.backgroundColor =colorName;
    }
