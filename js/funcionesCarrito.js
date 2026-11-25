import {guardarCarrito, obtenerCarrito, vaciarCarritoStorage} from "./storage.js";
import {actualizarContador, mostrarMensaje} from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    //UI para dar feedback al usuario
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado ✨");
}

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);
    guardarCarrito(carrito);
    //UI para dar feedback al usuario
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado ✔");
}

export const vaciarCarrito = () => {
    //vaciarCarritoStorage();
    //UI para dar feedback al usuario
    //actualizarContador([]);
    //mostrarMensaje("Carrito vaciado");

    const confirmacion = confirm("¿Deseas vaciar el carrito?");
    if(confirmacion){
        vaciarCarritoStorage();
        actualizarContador([])
        mostrarMensaje("Carrito vaciado");
        return;
    }
}