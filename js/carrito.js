import {obtenerCarrito} from "./storage.js";
import {eliminarProducto, vaciarCarrito} from "./funcionesCarrito.js";
import {actualizarContador} from "./ui.js";


const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if(!carrito.length){
        const mensaje = document.createElement("p")
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito está vació 😢";

        contenedor.appendChild(mensaje);

        return;
    }

    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const img = document.createElement("img");
        img.src = `../${producto.img}`;
        img.alt = producto.nombre;

        const contenedorInfo = document.createElement("div");
        contenedorInfo.classList.add("contenedor-info")

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.textContent = `$ ${producto.precio}`;

        const contenedorBotones = document.createElement("div");
        contenedorBotones.classList.add("contenedor-btn");

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "bg-secondary", "cursor-pointer", "text-ligth", "comprar");
        botonEliminar.textContent = "🗑 Eliminar producto";

        botonEliminar.addEventListener("click", () =>{
            eliminarProducto(index);
            renderizarCarrito();
        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(contenedorInfo)       
        tarjeta.appendChild(contenedorBotones)
        contenedorInfo.appendChild(titulo);
        contenedorInfo.appendChild(descripcion);
        contenedorInfo.appendChild(precio);
        contenedorBotones.appendChild(botonEliminar);

        contenedor.appendChild(tarjeta);
    });

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn", "btnEliminar", "cursor-pointer", "text-dark", "comprar");
    btnVaciar.textContent = "🗑 Vaciar carrito";

    btnVaciar.addEventListener("click", () =>{
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});





