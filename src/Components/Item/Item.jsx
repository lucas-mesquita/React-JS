import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Item = ({ nombre, precio, stock, img }) => {
    return (
            <Card style={{ width: '18rem', minHeight:'30rem'}}>
                <Card.Img variant="top" src={img} style={{ height:'20rem',objectFit:'cover'}} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>Precio: ${precio}</Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <Button variant="secondary">Ver Detalles</Button>
                </Card.Body>
            </Card>
    )
}
export default Item