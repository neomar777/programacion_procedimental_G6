    let cliente = document.getElementById("cliente").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let producto = document.getElementById("producto").value.trim();
    let pedido = document.getElementById("pedido").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value.trim();
    let fecha = document.getElementById("fecha").value.trim();

    function ValidarDatos() {

    if (
        direccion == "" ||
        telefono == "" ||
        email == "" ||
        metodo_pago == "" ||
        pedido == "" ||
        nombre == "" ||
        referencias == ""
    ) {
        alert("Ingrese todos los datos");
        return;
    }


    if (isNaN(telefono)) {
        alert("El teléfono no puede contener letras");
        return;
    }


    if (!email.includes("@")) {
        alert("El email debe contener @");
        return;
    }


    if (/\d/.test(metodo_pago)) {
        alert("El método de pago no puede contener números");
        return;
    }

    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números");
        return;
    }

    alert("Pedido registrado correctamente");
}