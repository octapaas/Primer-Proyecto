import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto";

function FormularioContainer() {

    const [datosForm, setDatosForm] = useState(
        { id: "", nombre: "", precio: "", stock: "" }
    )

    const manejarCambioInput = (evento) => {
        const { name, value } = evento.target;

        setDatosForm(
            {
                ...datosForm, [name]: value
            }
        )
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Enviando los siguientes datos a la API:', datosForm);
    };

    return (
        <FormularioProducto 
        datosForm={datosForm}
        manejarCambioInput={manejarCambioInput}
        manejarEnvio={manejarEnvio}/>
    );
}

export default FormularioContainer;