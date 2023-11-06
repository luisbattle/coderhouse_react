import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ products }) => {

    return (
        <div className="container">
            <h1 className="text-center">Productos</h1>
            <div className="card-container">
                {products.map((product) =>
                    <Item
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        image={product.image}
                    />
                )}
            </div>
        </div>
    )

}
export default ItemList