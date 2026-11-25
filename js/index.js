import {agregarAlCarrito} from "./funcionesCarrito.js";
import {obtenerCarrito} from "./storage.js";
import {actualizarContador} from "./ui.js";

const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    //Petición asíncrona 
    fetch("./data/productos.json")
    .then((response) =>  response.json())    
    .then((data) => {
        data.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("card", "text-dark");

            const img = document.createElement("img");
            img.src = `./${producto.img}`;
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

            const boton = document.createElement("button");
            boton.classList.add("btn", "bg-secondary", "cursor-pointer", "text-ligth", "comprar");
            boton.textContent = "🛒 Agregar al carrito";

            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);
            });

            const botonVerMas = document.createElement("a");
            botonVerMas.href = `./pages/${producto.link}`;
            botonVerMas.classList.add("btn", "bg-secondary", "cursor-pointer", "text-dark", "ver-mas");
            botonVerMas.textContent = "Ver más";

            tarjeta.appendChild(img);
            tarjeta.appendChild(contenedorInfo)
            contenedorInfo.appendChild(titulo);
            contenedorInfo.appendChild(descripcion);
            contenedorInfo.appendChild(precio);
            tarjeta.appendChild(contenedorBotones)
            contenedorBotones.appendChild(boton);
            contenedorBotones.appendChild(botonVerMas);

            contenedor.appendChild(tarjeta);

        });

    })
    .catch((error) => console.log(error));
};

document.addEventListener("DOMContentLoaded", () => {
    
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarProductos();
});