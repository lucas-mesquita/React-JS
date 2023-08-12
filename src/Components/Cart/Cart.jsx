import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button } from "react-bootstrap"
import { CartItem } from "../CartItem/CartItem"

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (
            <div>
                <h2>NO hay items en el carro</h2>
                <Button href='#/'>Volver al Inicio</Button>
            </div>
        )
    }

    return (
        <div>
            <section>
                <div>
                    <h2>Carrito de compra</h2>
                </div>
                <div>
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                </div>
                <div>
                    <h3>Total: ${total()}</h3>
                    <Button onClick={() => clearCart()}>Limpiar carrito</Button>
                </div>
                <Button href="#/checkout">
                    Finalizar Compra
                </Button>
            </section>
        </div>
    )

}