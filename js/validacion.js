function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById("regBtn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const terminosCheckbox = document.getElementById("terminos");

boton.addEventListener("click", function() {

    if (nombre==null || apellido==null || email==null || password1==null || password2==null || !terminosCheckbox.checked) {
        showAlertError()
        alert("1")
      }

      if (password1.length < 6) {
        showAlertError()
        alert("2")
      }

      if (password1.value !== password2.value) {
        showAlertError()
        alert("3")
      }
      else{
        showAlertSuccess()
      }

});


