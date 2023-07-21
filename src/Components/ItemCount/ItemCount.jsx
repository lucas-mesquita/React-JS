import { useState } from "react"
import Container from "react-bootstrap/Container"


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <Container>
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <p className="number">{quantity} </p>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
            </Container>
    )
}
export default ItemCount