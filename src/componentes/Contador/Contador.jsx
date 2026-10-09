import { useState } from "react";

function Contador() {
    
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    return(
        <>
        <p>Valor actual: {contador}</p>
        <button onClick={incrementar}>Sumar 1</button>
        </>
    );
}

export default Contador;