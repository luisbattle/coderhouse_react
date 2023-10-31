import { useParams } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import "./ItemDetail.css"
import { useContext, useState } from "react"

// Context
import { CartContext } from "../../context/CartContext"
import { Key } from "react-bootstrap-icons"

const ItemDetail = ({ products }) => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)

    const { addItem } = useContext(CartContext)

    const productDetail = products.filter((product) => product.id == id)
    const { name, detail, price } = productDetail


    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const substractQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleOnAdd = () => {
        addItem(productDetail[0], quantity)
    }

    return (
        <>
            {
                productDetail.map((product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <div className="itemDetailContainer-image">
                                <img src={product.image} alt={product.name} className="itemDetail-image" />
                            </div>
                            <p>{product.detail}</p>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                            <div>
                                <Form className="ItemDetailCounter">
                                    <Button onClick={substractQuantity}>-</Button>
                                    <Form.Text>{quantity}</Form.Text>
                                    <Button onClick={addQuantity}>+</Button>
                                </Form>

                            </div>

                            <div className="text-center mb-2">
                                <Button onClick={handleOnAdd} >Add To Cart</Button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemDetail