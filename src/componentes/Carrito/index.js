import React, { useContext } from "react";
import x from "../../images/x.svg";
import uparrow from "../../images/up-arrow.svg";
import downarrow from "../../images/down-arrow.svg";
import trash from "../../images/trash.svg";
import { DataContext } from "../../context/Dataprovider";

const Carrito = () => {
const value = useContext(DataContext)
const [menu, setMenu] = value.menu
const [carrito, setCarrito] = value.carrito;
const [total] = value.total;

const tooglefalse = () => {
    setMenu(false);
}

const show1 = menu ? "carritos show" : "carritos";
const show2 = menu ? "carrito show" : "carrito";

const removeProducto = id => {
    if (window.confirm("Quieres eliminar este producto?")) {
        carrito.forEach((item, index) => {
            if (item.id === id) {
                item.cantidad = 1
            carrito.splice(index, 1)
            }
        })
        setCarrito([...carrito])
    }
}

const resta = id => {
    carrito.forEach(item => {
        if (item.id === id) {
            item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
        }
        setCarrito([...carrito])
    })
}

const suma = id => {
    carrito.forEach(item => {
        if (item.id === id) {
            item.cantidad +=1;
        }
        setCarrito([...carrito])
    })
}

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse}>
                    <img src={x} alt='x'/>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_center">
                    {
                        carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem", color: "red"}}>
                            Carrito Vacio</h2> : <>
                            {
                                carrito.map((producto) => (
                                    <div className="carrito_item" key={producto.id}>
                                        <img src={producto.image} alt=""/>
                                        <div>
                                            <h3>{producto.title}</h3>
                                            <p className="price">${producto.price}</p>
                                        </div>
                                        <div>
                                            <img src={uparrow} alt='uparrow' onClick={() => suma(producto.id)}/>
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <img src={downarrow} alt='downarrow' onClick={() => resta(producto.id)}/>
                                        </div>
                                        <div className="remove_item" onClick={() => removeProducto(producto.id)}>
                                            <img src={trash} alt='trash'/>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>
                <div className="carrito_footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn">Pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito