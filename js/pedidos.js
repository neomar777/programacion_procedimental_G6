function ValidarDatos() {
    let nombre = document.getElementById("cliente").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value;

    if (!nombre || !telefono || !producto || !cantidad || !direccion || !metodo_pago) {
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
        `Información del pedido:
${nombre}
${telefono}
${producto}
${cantidad}
${direccion}
${metodo_pago}`
    );

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        Swal.fire({
            title: "El nombre debe contener solo letras",
            icon: "error"
        });
        return;
    }

    if (!/^\d+$/.test(telefono)) {
        Swal.fire({
            title: "El teléfono debe contener solo números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(producto)) {
        Swal.fire({
            title: "El producto debe contener solo letras",
            icon: "error"
        });
        return;
    }

    if (!/^\d+$/.test(cantidad)) {
        Swal.fire({
            title: "La cantidad debe contener solo números",
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

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(metodo_pago)) {
        Swal.fire({
            title: "El método de pago debe contener solo letras",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos registrados correctamente",
        showConfirmButton: false,
        timer: 1500
    });

}

document.getElementById("btnRegistrar").addEventListener("click", function (e) {
    e.preventDefault();
    ValidarDatos();
});