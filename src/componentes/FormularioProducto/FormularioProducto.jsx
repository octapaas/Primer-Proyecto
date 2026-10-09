function FormularioProducto({datosForm, manejarCambioInput, manejarEnvio}) {
    return (
        <form onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label htmlFor="Nombre">Nombre del Producto</label>
                <input type="text" name="Nombre" placeholder="Teclado Mecanico" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Nombre">Nombre del Producto</label>
                <input type="text" name="Nombre" placeholder="Teclado Mecanico" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Nombre">Nombre del Producto</label>
                <input type="text" name="Nombre" placeholder="Teclado Mecanico" onChange={manejarCambioInput} />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>

    )
}

export default FormularioProducto;