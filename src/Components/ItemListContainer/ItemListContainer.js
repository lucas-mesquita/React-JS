import { useEffect, useState } from "react"
import { getProducts, getProductsByCategoryId } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategoryId : getProducts
        asyncFunc(categoryId)
            .then(response => { setProducts(response) })
            .catch(error => { console.log(error); })
    }, [categoryId])

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer