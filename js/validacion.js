function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById("regBtn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
boton.addEventListener("click", function() {
    if (password1.value === password2.value) {
        showAlertSuccess()
      }
      else{
        showAlertError()
      }
});
