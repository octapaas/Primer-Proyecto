import { useState, useEffect } from "react";
import EquipoList from "../EquipoList/EquipoList";

function EquipoContainer() {
    const [equipo, setEquipo] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        fetch('/data/equipo.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEquipo(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) {
        return <p>Cargando equipo, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <EquipoList equipo={equipo} mensaje={"Nuestros Socios"}/>
        </>     
    )
}

export default EquipoContainer;