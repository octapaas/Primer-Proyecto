function Header() {
    return (
        <header style={{ backgroundColor: "#8DE2D6", padding: "10px", textAlign: "center", color: "white" }}>
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
                    <a href="#">
                        Inicio
                    </a>
                    <a href="#">
                        Tienda
                    </a>
                    <a href="#">
                        Contacto
                    </a>
                    <a href="#">
                        Carrito
                    </a>
                </nav>
            </div>
        </header>
    );
}
export default Header;