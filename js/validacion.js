function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    // Get input values
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminosCheckbox = document.getElementById("terminos");

    if (
        nombre.trim() === "" ||
        apellido.trim() === "" ||
        email.trim() === "" ||
        password1.length < 6 ||
        password1 !== password2 ||
        !terminosCheckbox.checked
    ) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});
