

function TarjetaEquipo({ id, nombre, email, puesto, imagen }) {

    return (
        <div>
            <div>
                <img src={imagen} alt={nombre} style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
                <h3>{nombre}</h3>
            </div>
            <p>{puesto}</p>
            <p>E-Mail: {email}</p>
        </div>
    );
}

export default TarjetaEquipo;