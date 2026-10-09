

function TarjetaEquipo({ id, nombre, email, puesto }) {

    return (
        <div>
            <div>
                <h3>{nombre}</h3>
            </div>
            <p>{puesto}</p>
            <p>E-Mail: {email}</p>
        </div>
    );
}

export default TarjetaEquipo;