import TarjetaEquipo from "../TarjetaEquipo/TarjetaEquipo";
import styles from './EquipoList.module.css';

function EquipoList({equipo, mensaje}) {
    return (
        <div>
            <h1>{mensaje}</h1>
            <div className={styles.equipo}>{
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