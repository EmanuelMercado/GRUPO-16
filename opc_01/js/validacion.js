
function validarFormulario() {

  // Aplicar TRIM
  var nombre = document.getElementById("Nombre").value.trim();
  var apellido = document.getElementById("Apellido").value.trim();
  var telefono = document.getElementById("Telefono").value.trim();


  // Verificar si algún campo está en blanco
  if (nombre === "" || apellido === "" || telefono === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'Nombre' sólo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
  for (var i = 0; i < apellido.length; i++) {
    var charCode = apellido.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'Apellido' sólo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  // Verificar si el telefono contiene solo dígitos numéricos
  for (var j = 0; j < telefono.length; j++) {
    var digit = telefono.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'Teléfono' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  // Si todas las validaciones son exitosas, enviar el formulario
  alert("Formulario enviado correctamente.");
  return true;
}
