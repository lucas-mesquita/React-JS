import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"

const ItemList = ({ products }) => {

    return (
        <Container>
            <Row className="justify-content-center">
                {products.map(prod =>
                    <Col xs="auto" className="p-3" key={prod.id}>
                        <Item {...prod} />
                    </Col>)}
            </Row>
        </Container>
    )
}
export default ItemList