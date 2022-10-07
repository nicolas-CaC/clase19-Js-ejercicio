while (iterando) {

    const opcion = Number(prompt('Ingresa opcion del 1 al 5'))

    //Mostrar productos
    opcion === 1 && mostrarProductos()

    //Agregar producto
    opcion === 2 && agregarProducto()

    //Modificar producto
    opcion === 3 && modificarProducto()

    //Eliminar producto
    opcion === 4 && borrarProducto()

    //Salir
    opcion === 5 && salir()

    //Error
    if (opcion < 1 || opcion > 5) {
        alert('Opcion inválida')
        continue
    }

    opcion <= 5 && opcion > 1 && mostrarProductos()

    terminar()
}