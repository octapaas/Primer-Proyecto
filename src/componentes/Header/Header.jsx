import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <div>
                    <h1>
                        Tienda de Productos
                    </h1>
                    <p>
                        Juegos digitales y saldo virtual
                    </p>
                </div>
                <nav>
                    <Link to="/">
                        Inicio
                    </Link>
                    <Link to="/tienda">
                        Tienda
                    </Link>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                    <Link to="/carrito">
                        Carrito
                    </Link>
                    <Link to="/nuevo">
                        Nuevo Producto
                    </Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;