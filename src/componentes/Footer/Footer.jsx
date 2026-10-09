import EquipoContainer from "../Equipo/EquipoContainer/EquipoContainer";
import styles from './Footer.module.css';

function Footer() {  
    return (  
        <footer className={styles.footer}>  
            <EquipoContainer />
            <p>&copy; 2025 - Mi Aplicación React</p>  
        </footer>  
    );  
}  
export default Footer;