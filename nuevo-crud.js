// Funciones CRUD

// 1- Mostrar
function mostrarProductos() {
    console.log(productos)
}

// 2- Agregar
function agregarProducto() {
    const datos = solicitarDatos();
    productos.push(datos)
}

// 3- Modificar
function modificarProducto() {
    const id = getId()
    const existe = checkId(id)
    const datos = existe && solicitarDatos(id) || undefined

    existe
        ? productos[datos.id - 1] = datos
        : alert('No existe el producto')
}

// 4- Borrar
function borrarProducto() {
    const id = getId()
    const existe = checkId(id)
    const indice = existe && getIndex(id) || null

    existe
        ? productos.splice(indice, 1)
        : alert('No existe el producto')
}

// 5- Salir
function salir() { window.close() }