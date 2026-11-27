import { useCart } from "../../Context/CartContext";
import styles from '../Productos/Item/Item.module.css';

const Cart = () => {

    const { cart, clearCart, getCartTotal, removeItem, addToCart, decreaseQuantity } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <h1>El carrito está vacío.</h1>
                <p>Agrega productos para comenzar.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.imagen} alt={item.nombre} className={styles.cardImage}></img>
                    <h4>{item.nombre}</h4>
                    <div>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span> Cantidad: {item.quantity} </span>
                        <button
                            onClick={() => addToCart(item, 1)}
                            disabled={item.quantity >= item.stock}>
                            +
                        </button>
                    </div>
                    <p>Precio unitario: ${item.precio}</p>
                    <p>Subtotal: ${item.precio * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar los Artículos</button>
                </div>
            ))}
            <hr />
            <h3>Total a pagar: ${getCartTotal()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;
