import { useState } from "react"
import Button from "react-bootstrap/Button"
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
            <div className="d-flex justify-content-center">
                <Button className="button" onClick={decrement}>-</Button>
                <p className="m-2">{quantity} </p>
                <Button className="button" onClick={increment}>+</Button>
            </div>
            <div>
                <Button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
            </Container>
    )
}
export default ItemCount