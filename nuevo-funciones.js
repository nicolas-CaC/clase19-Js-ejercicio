let iterando = true

const terminar = () => { iterando = false }

const getId = () => Number(prompt('ingrese el id'))

const checkId = (id) => productos
    .some(producto => producto.id === id)

const getIndex = (id) => productos
    .indexOf(productos
        .find(producto =>
            producto.id === id))

const solicitarDatos = (id = productos.length + 1) => {
    const nombre = prompt('Ingrese nombre');
    const precio = prompt('Ingrese precio');
    return { id, nombre, precio };
}


