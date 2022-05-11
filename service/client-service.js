const listaProductos = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearProducto = (nombre, precio, descripcion, categoria) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, descripcion, categoria, id: uuid.v4() }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
};
