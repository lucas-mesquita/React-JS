import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap"
import { CartContext } from "../Context/CartContext"

const ItemDetail = ({ id, nombre, detalle, categoria, precio, stock, img }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const HandleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }
        addItem(item, quantity)
    }

    return (
        <Card className="align-items-center" style={{ width: '100%', minHeight: '30rem' }}>
            <Card.Img variant="top" src={img} style={{ width: `50%` }} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Title>{detalle}</Card.Title>
                <Card.Text>Categoría: {categoria}</Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                {quantityAdded > 0 ? (<Button href="#/cart"> Terminar pedido </Button>)
                    :
                    (<ItemCount initial={1} stock={stock} onAdd={HandleOnAdd} />)}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail