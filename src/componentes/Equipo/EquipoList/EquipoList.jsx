import TarjetaEquipo from "../TarjetaEquipo/TarjetaEquipo";


function EquipoList({equipo, mensaje}) {
    return (
        <div>
            <h1>{mensaje}</h1>
            <div>{
                equipo.map((integrante) => (
                    <TarjetaEquipo 
                    key={integrante.id} 
                    {...integrante}/>
                ))
            }</div>
             
        </div>
    )
}

export default EquipoList;