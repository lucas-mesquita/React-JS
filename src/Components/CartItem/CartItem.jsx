import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button } from "react-bootstrap"


export const CartItem = ({ nombre, quantity, precio }) => {
    const {clearCart} = useContext(CartContext)
    return (
        <div className="CartItem">
            <h3>{nombre}</h3>
            <div>
                <span>Cantidad: {quantity}</span>
                <strong>Precio por unidad: ${precio}</strong>
            </div>
            <strong>SubTotal: ${precio*quantity}</strong>
            <div>
                <Button onClick={()=>clearCart()}>Eliminar item</Button>
            </div>
        </div>
    )

}