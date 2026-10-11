import styles from './FormularioProducto.module.css';

function FormularioProducto({datosForm, manejarCambioInput, manejarEnvio, manejarCambioImagen}) {
    return (
        <form onSubmit={manejarEnvio} className={styles.formulario}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label htmlFor="Id">Id del Producto:</label>
                <input type="text" id="Id" name="id" placeholder="1" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Nombre">Nombre del Producto:</label>
                <input type="text" id="Nombre" name="nombre" placeholder="Teclado Mecanico" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Precio">Precio del Producto:</label>
                <input type="text" id="Precio" name="precio" placeholder="150000" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Stock">Cantidad del Producto:</label>
                <input type="text" id="Stock" name="stock" placeholder="10" onChange={manejarCambioInput} />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" name="imagen" onChange={manejarCambioImagen} />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>

    )
}

export default FormularioProducto;