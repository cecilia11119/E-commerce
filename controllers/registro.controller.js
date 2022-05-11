import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const categoria = document.querySelector("[data-categoria]").value

  clientServices
    .crearProducto(nombre, precio,descripcion,categoria)
    .then(() => {
      window.location.href = "registro_completado.html";
    })
    .catch((err) => console.log(err));
});
