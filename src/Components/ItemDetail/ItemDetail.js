import Container from "react-bootstrap/Container"
import ItemCount from "../ItemCount/ItemCount"
import Card from "react-bootstrap/Card"

const ItemDetail = ({ id, nombre, detalle, categoria, precio, stock, img }) => {
    return (
        <Card style={{ width: '100%', minHeight: '30rem' }}>
            <Card.Img variant="top" src={img} style={{ objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Title>{detalle}</Card.Title>
                <Card.Text>Categoría: {categoria}</Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => { console.log('cantidad', quantity); }} />
            </Card.Body>
        </Card>
    )
}

export default ItemDetail