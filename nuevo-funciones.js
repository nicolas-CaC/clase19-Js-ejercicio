let iterando = true

const getId = () => Number(prompt('ingrese el id'))

const checkId = (id) => productos.some(producto => producto.id === id)

const terminar = () => { iterando = false }

const getIndex = (id) => productos
    .indexOf(productos
        .find(producto =>
            producto.id === id)
    )

function solicitarDatos(id = productos.length + 1) {
    const nombre = prompt('Ingrese nombre');
    const precio = prompt('Ingrese precio');
    return { id, nombre, precio };
}

