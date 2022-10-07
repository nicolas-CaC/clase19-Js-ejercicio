let datosCorrectos = false

function terminar() {
    datosCorrectos = true
}

function mostrarProductos() {
    console.log(productos)
}

function agregarProducto(nombre, precio) {
    const producto = {
        id: 6,
        nombre: nombre,
        precio: precio
    }
    productos.push(producto)
}

function modificarProducto(posicion, id) {
    const nombre = prompt('Escriba el nombre del producto:')
    const precio = prompt('Ingrese el precio del producto:')
    x = false
    let y = a
    productos[posicion] = {
        id,
        nombre,
        precio
    }
}

function getData() {
    const nombre = prompt('Escriba el nombre del producto:')
    const precio = prompt('Ingrese el precio del producto:')
    return [nombre, precio]
}

function borrarProducto(posicion) {
    productos.splice(posicion, 1)
}