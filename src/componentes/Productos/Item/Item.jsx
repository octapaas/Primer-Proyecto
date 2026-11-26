import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { useState, useEffect } from 'react';
import { useCart } from '../../../Context/CartContext';

function Item({ id, nombre, precio, stock, imagen }) {

    const [cantidad, setCantidad] = useState(0);

    const { addToCart } = useCart();

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

    const handleAddToCart = () => {
        addToCart({ id, nombre, precio, stock, imagen }, cantidad);
        if (cantidad > 1) {
            alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito`)
        } else if (cantidad == 1) {
            alert(`Agregaste ${cantidad} unidad de ${nombre} al carrito`)
        } else {
            alert(`No hay productos en el carrito. Por favor, seleccione la cantidad que desea agregar`)
        }

    }

    const [esFavorito, setEsFavorito] = useState(false);

    useEffect(() => {

    }, []);

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h3>{nombre}</h3>
                <img src={imagen} alt={nombre} className={styles.cardImage} />

            </div>
            <span className={styles.favorito} onClick={marcarComoFavorito}
            > {esFavorito ? '⭐' : '☆'}
            </span>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
            <div className={styles.contador}>
                <button onClick={decrementar}>-</button>
                <p>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <Link to={`/tienda/${id}`}>Descripción</Link>
            <button onClick={handleAddToCart} className={styles.agregar}>Agregar al Carrito</button>
        </div>


    );
}

export default Item;