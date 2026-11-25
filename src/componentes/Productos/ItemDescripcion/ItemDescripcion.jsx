import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './ItemDescripcion.module.css';

function ItemDescripcion() {

    const { id } = useParams();

    const [productos, setProductos] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
            fetch('/data/productos.json')
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error('No se pudo cargar la información de los productos');
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    setProductos(datos);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setCargando(false);
                });
        }, []);

        const productoID = productos.find((producto) => producto.id === id);

        const [esFavorito, setEsFavorito] = useState(false);

    useEffect(() => {

    }, []);

    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }

    }

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }

    }

    const agregarAlCarrito = () => {
        if (cantidad > 1) {
            alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito`)
        } else if (cantidad == 1) {
            alert(`Agregaste ${cantidad} unidad de ${nombre} al carrito`)
        } else {
            alert(`No hay productos en el carrito. Por favor, seleccione la cantidad que desea agregar`)
        }

    }

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h3>{productoID.nombre}</h3>
                <img src={productoID.imagen} alt={productoID.nombre} className={styles.cardImage} />

            </div>
            <span className={styles.favorito} onClick={marcarComoFavorito}
            > {esFavorito ? '⭐' : '☆'}
            </span>
            <p>Precio: ${productoID.precio}</p>
            <p>Stock: {productoID.stock}</p>
            <div className={styles.contador}>
                <button onClick={decrementar}>-</button>
                <p>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <Link to={`/tienda/${id}`}>Descripción</Link>
            <button onClick={agregarAlCarrito} className={styles.agregar}>Agregar al Carrito</button>
        </div>


    );
}

export default ItemDescripcion;