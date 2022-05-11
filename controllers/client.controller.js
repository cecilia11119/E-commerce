import { clientServices } from "../service/client-service.js";

//backticks
const crearNuevaLinea = (nombre, precio, descripcion, categoria, id) => {
  const linea = document.createElement("fieldset");
  const contenido = `
  <fieldset>
  <label class="form__label">Agregar nuevo producto</label>

  <label for="categorias" class="categorialabel">Categoria</label>
  <select name="categorias" id="categorias" class="input_Categoria" type="text" data-categoria>
      <option value="Star Wars">${categoria}</option>
      <option value="Consolas">${categoria}</option>
      <option value="Diversos">${categoria}</option>
  </select>
  
   <div class="input-container">
      <input name="name" id="name" class="input" type="text" placeholder="Ingrese nombre del producto" required data-tipo="nombre" data-nombre>${nombre}</input>
      <label class="input-label" for="name">Ingrese el nombre del producto</label>
      <span class="input-message-error">Este campo no es valido</span>
  </div>

  <div class="input-container">
    <input name="precioProd" id="precioProd" class="input" type="text" placeholder="Ingrese precio del producto" data-tipo="numero" data-precio>${precio}</input>
    <label class="input-label" for="precioProd">Ingrese el precio del producto</label>
    <span class="input-message-error">Este campo no es valido</span>
</div>

<textarea class="textareaContacto" name="comments" cols="50" rows="5" placeholder="Ingrese el mensaje" required data-descripcion>${descripcion}</textarea>
<input class="boton-AgregarProd" type="submit" value="Agregar producto" id="${id}">

</fieldset>
  `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return linea;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ nombre, precio, descripcion, categoria, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, precio, descripcion, categoria, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
