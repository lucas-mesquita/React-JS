import { useEffect, useState } from "react"
import { getProducts, getProductsByCategoryName } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryName } = useParams()
    useEffect(() => {
        const asyncFunc = categoryName ? getProductsByCategoryName : getProducts
        asyncFunc(categoryName)
            .then(response => { setProducts(response) })
            .catch(error => { console.log(error); })
    }, [categoryName])

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer