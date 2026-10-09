import styles from './FormularioProducto.module.css';

function FormularioProducto({datosForm, manejarCambioInput, manejarEnvio}) {
    return (
        <form onSubmit={manejarEnvio} className={styles.formulario}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label htmlFor="Nombre">Nombre del Producto:</label>
                <input type="text" id="Nombre" name="Nombre" placeholder="Teclado Mecanico" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Precio">Precio del Producto:</label>
                <input type="text" id="Precio" name="Precio" placeholder="150000" onChange={manejarCambioInput} />
            </div>
            <div>
                <label htmlFor="Stock">Cantidad del Producto:</label>
                <input type="text" id="Stock" name="Stock" placeholder="10" onChange={manejarCambioInput} />
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