import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useEffect } from "react"
import { getProductsById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById(2)
            .then(response => setProduct(response))
            .catch(error => console.error(error))
    }, [])

    console.log('item detail',product);

    return (

        <div className="containerDetail">
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer

