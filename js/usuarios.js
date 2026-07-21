function ValidarDatos() {
    let nombre = document.getElementById("nombre_completo").value.trim();
    let correo = document.getElementById("correo_electronico").value.trim();
    let celular = document.getElementById("numero_celular").value.trim();
    let genero = document.getElementById("genero").value;
    let fecha = document.getElementById("fecha_nacimiento").value;
    let direccion = document.getElementById("direccion").value.trim();
    let contrasena = document.getElementById("contrasena").value;

    if (!nombre || !correo || !celular || !genero || !fecha || !direccion || !contrasena) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    console.log(
        `Información del usuario:
${nombre}
${correo}
${celular}
${genero}
${fecha}
${direccion}
${contrasena}`
    );

    
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        Swal.fire({
            title: "El nombre debe contener solo letras",
            icon: "error"
        });
        return;
    }

    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        Swal.fire({
            title: "Ingrese un correo electrónico válido",
            icon: "error"
        });
        return;
    }

   
    if (!/^\d+$/.test(celular)) {
        Swal.fire({
            title: "El celular debe contener solo números",
            icon: "error"
        });
        return;
    }

    
    if (!/^[a-zA-Z0-9ÁÉÍÓÚáéíóúÑñ\s#.,\-\/]+$/.test(direccion)) {
        Swal.fire({
            title: "Ingrese una dirección válida",
            icon: "error"
        });
        return;
    }

    
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contrasena)) {
        Swal.fire({
            title: "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información guardada correctamente",
        showConfirmButton: false,
        timer: 1500
    });

}

document.getElementById("btnRegistrar").addEventListener("click", function (e) {
    e.preventDefault();
    ValidarDatos();
});