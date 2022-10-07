while (iterando) {

    const opcion = Number(prompt('Ingresa opcion del 1 al 5'))

    //Error
    if (opcion < 1 ||
        opcion > 5 ||
        isNaN(opcion)) {
        alert('Opcion inválida')
        continue
    }

    // Mostrar productos
    opcion === 1 && mostrarProductos()

    // Agregar producto
    opcion === 2 && agregarProducto()

    // Modificar producto
    opcion === 3 && modificarProducto()

    // Eliminar producto
    opcion === 4 && borrarProducto()

    // Salir
    opcion === 5 && salir()

    // Mostrar en consola
    opcion > 1 &&
        opcion <= 5 && mostrarProductos()

    terminar()
}