import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const data = getProducts()
            .then((data) => {
                setProducts(data)
                console.log(products)
            }
            )

    }, [])

    return (
        <>
            <ItemDetail products={products} />
        </>
    )
}
export default ItemDetailContainer