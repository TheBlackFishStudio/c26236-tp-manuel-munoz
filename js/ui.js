export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito");
    if (contador){
        contador.textContent = carrito.length || "0";
    }
}

export const mostrarMensaje = (texto) => {
    alert(texto);
}