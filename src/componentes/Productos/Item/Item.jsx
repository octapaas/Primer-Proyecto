import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { useState, useEffect } from 'react';
import { useCart } from '../../../Context/CartContext';

function Item({ id, nombre, precio, stock, imagen }) {

    const [cantidad, setCantidad] = useState(0);

    const { addToCart, getCurrentQuantity } = useCart();

    const incrementar = () => {
        if (cantidad + getCurrentQuantity(id) < stock) {
            setCantidad(cantidad + 1);
        }

    }

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }

    }

    const handleAddToCart = () => {

        if (cantidad > 1) {
            addToCart({ id, nombre, precio, stock, imagen }, cantidad);
            alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito`)
            setCantidad(0);
        } else if (cantidad == 1) {
            addToCart({ id, nombre, precio, stock, imagen }, cantidad);
            alert(`Agregaste ${cantidad} unidad de ${nombre} al carrito`)
            setCantidad(0);
        } else {
            alert(`No hay productos en el carrito. Por favor, seleccione la cantidad que desea agregar`)
        }

    }

    const [esFavorito, setEsFavorito] = useState(false);

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
            <p>En el carrito: {getCurrentQuantity(id)}</p>
        </div>


    );
}

export default Item;