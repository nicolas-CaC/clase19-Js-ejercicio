console.clear()


let encontrado = false;

while (!datosCorrectos) {

    let a = Number(prompt(`Ingrese una opcion:
1- Mostrar productos
2- Agregar un producto
3- Modificar un producto
4- Borrar un producto
5- Cerrar el sitio`))

    let id;

    switch (a) {
        case 1:
            // Mostrar productos
            mostrarProductos()
            terminar()
            break

        case 2:
            // Agregar producto
            const nombre = prompt('Escriba el nombre del producto:')
            const precio = prompt('Ingrese el precio del producto:')
            agregarProducto(nombre, precio)
            mostrarProductos()
            break

        case 3:
            // Modificar producto
            id = Number(prompt('Ingrese el ID del producto:'))

            for (let i = 0; i < productos.length; i++) {

                if (productos[i].id === id) {
                    modificarProducto(i, id)
                    mostrarProductos()
                    encontrado = true
                    terminar()
                    break
                }
            }

            if (!encontrado) {
                alert('Lo siento, id inexistente')
            }

        case 4:
            // Eliminar producto
            id = Number(prompt('Ingrese el ID del producto:'))

            for (let i = 0; i < productos.length; i++) {

                if (productos[i].id === id) {
                    borrarProducto(i)
                    mostrarProductos()
                    encontrado = true
                    terminar()
                    break
                }
            }

            !encontrado && alert('Lo siento, id inexistente')

            continue

        case 5:
            // Salir
            window.close()
            // terminar()
            break

        default:
            // Opción inválida
            alert('Opción inválida, intente otra vez')
            break
    }
}