import React, {useContext, useState, useEffect} from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";

const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([])
    const params = useParams();
    
    useEffect(() => {
        productos.forEach(producto => {
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
            }
        })
    },[params.id, productos])

    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <div className="grid">
                        <button>Añadir al carrito</button>
                        <p className="volver">volver</p>
                    </div>
                    <img src={detalle.image} alt={detalle.title} />
                    <div className="description">
                        <p><b>Descripción</b>
                        <br/>texto de la descripción<br/><br/><br/><br/>
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductoDetalles