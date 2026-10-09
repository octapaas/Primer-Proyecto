import Item from "../Item/Item";
import styles from "./ItemList.module.css"

function ItemList({productos, mensaje}) {
    return (
        <div>
            <h1>{mensaje}</h1>
            <div className={styles.container}>{
                productos.map((producto) => (
                    <Item 
                    key={producto.id} 
                    nombre={producto.nombre} 
                    precio={producto.precio} 
                    stock={producto.stock}/>
                ))
            }</div>
             
        </div>
    )
}

export default ItemList;