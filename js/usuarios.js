    let nombre = document.getElementById("nombre_completo").value.trim();
    let correo = document.getElementById("correo_electronico").value.trim();
    let celular = document.getElementById("numero_celular").value.trim();
    let genero = document.getElementById("genero").value.trim();
    let fecha = document.getElementById("fecha_nacimiento").value;
    let direccion = document.getElementById("direccion").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    let fecha = new Date(document.getElementById("fecha").value);

    function ValidarDatos() {
    if (
        nombre == "" ||
        correo == "" ||
        celular == "" ||
        genero == "" ||
        fecha == "" ||
        direccion == "" ||
        contrasena == ""
    ) {
        alert("Ingrese todos los datos");
        return;
    }

    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números");
        return;
    }

    if (!correo.includes("@")) {
        alert("El correo debe contener @");
        return;
    }

    if (isNaN(celular)) {
        alert("El celular no puede contener letras");
        return;
    }

    if (celular.length > 10) {
        alert("El celular no puede tener más de 10 dígitos");
        return;
    }

    if (isNaN(Date.parse(fecha))) {
        alert("Ingrese una fecha válida");
        return;
    }

    if (contrasena.length > 8) {
        alert("La contraseña debe tener máximo 8 caracteres");
        return;
    }
    if(fecha >= getDate()){
        console.log("No se acepta fecha mayores a la actual")
    }

    alert("Datos registrados correctamente");
}