function ValidarInformacion() {
    let codigo_producto = document.getElementById("codigo_producto").value.trim();
    let nombre_producto = document.getElementById("nombre_producto").value.trim();
    let precio_unidad = document.getElementById("precio_unidad").value.trim();
    let cantidad_producto = document.getElementById("cantidad_producto").value.trim();
    let marca_producto = document.getElementById("marca_producto").value.trim();
    let categoria_producto = document.getElementById("categoria_producto").value;
    let unidad_medida = document.getElementById("unidad_medida").value;

    if (
        !codigo_producto ||
        !nombre_producto ||
        !precio_unidad ||
        !cantidad_producto ||
        !marca_producto ||
        !categoria_producto ||
        !unidad_medida
    ) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^\d+$/.test(codigo_producto)) {
        Swal.fire({
            title: "El código debe contener solo números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre_producto)) {
        Swal.fire({
            title: "El nombre debe contener solo letras",
            icon: "error"
        });
        return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(precio_unidad)) {
        Swal.fire({
            title: "El precio debe ser un número válido",
            icon: "error"
        });
        return;
    }

    if (!/^\d+$/.test(cantidad_producto)) {
        Swal.fire({
            title: "La cantidad debe contener solo números",
            icon: "error"
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ ]+$/.test(marca_producto)) {
        Swal.fire({
            title: "La marca debe contener solo letras",
            icon: "error"
        });
        return;
    }

    console.log(`
Código: ${codigo_producto}
Nombre: ${nombre_producto}
Precio: ${precio_unidad}
Cantidad: ${cantidad_producto}
Marca: ${marca_producto}
Categoría: ${categoria_producto}
Unidad: ${unidad_medida}
`);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información guardada correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);