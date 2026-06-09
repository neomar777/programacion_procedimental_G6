let proveedor = document.getElementById("proveedor").value;
let nit = document.getElementById("nit").value;
let producto = document.getElementById("producto").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let ciudad = document.getElementById("ciudad").value;

function ValidarDatos() {
    if (
        codigo == "" ||
        nombre == "" ||
        precio == "" ||
        cantidad == "" ||
        marca == "" ||

        unidad == ""
    ) {
        alert("Ingrese todos los datos");
        return;
    }

    if (isNaN(codigo)) {
        alert("El código del producto no debe contener letras");
        return;
    }

    if (/\d/.test(nombre)) {
        alert("El nombre del producto no debe contener números");
        return;
    }

   
    if (isNaN(precio)) {
        alert("El precio unitario no debe contener letras");
        return;
    }

    if (isNaN(cantidad)) {
        alert("La cantidad no debe contener letras");
        return;
    }

    if (/\d/.test(categoria)) {
        alert("La categoría no debe contener números");
        return;
    }

    if (/\d/.test(unidad)) {
        alert("La unidad de medida no debe contener números");
        return;
    }

    alert("Producto registrado correctamente");
}