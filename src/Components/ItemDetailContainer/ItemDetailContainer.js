import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useEffect } from "react"
import { getProductsById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(parseInt(itemId))
            .then(response => setProduct(response))
            .catch(error => console.error(error))
    }, [itemId])

    return (
        <Container className="ItemDetailContainer">
            <ItemDetail {...product} />
        </Container>
    )

}

export default ItemDetailContainer

