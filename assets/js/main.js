

  nombre                 = document.getElementById("nombre").value;
  apellido               = document.getElementById("apellido").value;
  numeroDni              = document.getElementById("numeroDni").value;
  fechaNacimiento        = document.getElementById("fechaNacimiento").value;
  celular                = document.getElementById("celular").value;
  telefono               = document.getElementById("telefono").value;
  contraseña             = document.getElementById("contraseña").value;
  confirmacionContraseña = document.getElementById("confirmacionContraseña").value;
  comentario             = document.getElementById("comentario").value;
  terminosCondiciones    = document.getElementById("terminosCondiciones").value;


//VALIDACIÓN DE NOMBRE Y APELLIDO, LA PRIMERA LETRA EN MAYÚSCULA
/*var validandoLetraMayuscula = function (e){
  if( (/[A-Z]{1}/.test(e))){
     alert("Error la primera letra debe ser MAYúSCULA");
  }
}

name.onblur = validandoLetraMayuscula;*/
function validarNombre(nombre){
  /** Validacion para nombre**/
  if(nombre.length==0 || /^\s+|\s+$/.test(name.value)){
    showToolTip("Debe ingresar su nombre",nombre); return false;
  }
}
validarNombre(nombre);
