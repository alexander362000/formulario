function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById("regBtn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const email = document.getElementById("email").value;
const terminosCheckbox = document.getElementById("terminos");

boton.addEventListener("click", function() {


    if (!nombre || !apellido || !email || !password1 || !password2 || !terminosCheckbox.checked) {
        showAlertError()
      }

      if (password1.length < 6) {
        showAlertError()
      }

      if (password1 !== password2) {
        showAlertError()
      }
      else{
        showAlertSuccess()
      }
});


