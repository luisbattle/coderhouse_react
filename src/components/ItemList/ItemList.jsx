import { useEffect, useState } from "react"
import Item from "../Item/Item"
import { Loader, Image, Segment } from 'semantic-ui-react'
import "./ItemList.css"

const ItemList = ({ products, loading }) => {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (loader) {
            setLoader(loading)
        }

    }, [])

    return (
        <div className="container">
            <h1 className="text-center">Productos</h1>
            <div className="card-container">
                {
                    loading ? <> <Loader active /></>
                        : products.map((product) =>
                            <Item
                                key={product.id}
                                id={product.id}
                                title={product.name}
                                image={product.image}
                            />
                        )
                }
            </div>
        </div>
    )

}
export default ItemList