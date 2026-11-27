import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore/config";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        const productosDB = collection(db, "productos");

        getDocs(productosDB).then((resp) => {
            setProductos(resp.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            }))
        })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <ItemList productos={productos} mensaje={"Más vendidos"} />
        </>
    )
}

export default ItemListContainer;