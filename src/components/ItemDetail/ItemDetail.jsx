import { Button, Form, Alert } from "react-bootstrap"

import "./ItemDetail.css"
import { useContext, useState } from "react"

// Context
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1)

    const { addItem } = useContext(CartContext)

    const { name, detail, price } = product


    const addQuantity = () => {
        event.preventDefault()
        setQuantity(quantity + 1)
    }
    const substractQuantity = () => {
        event.preventDefault()
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleOnAdd = () => {
        addItem(product, quantity)
    }


    return (
        <>
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
                        <button className="btn btn-dark" onClick={substractQuantity}>-</button>
                        <Form.Text>{quantity}</Form.Text>
                        <button className="btn btn-dark" onClick={addQuantity}>+</button>
                    </Form>

                </div>

                <div className="text-center mb-2">
                    <button className="btn btn-dark" onClick={handleOnAdd} >Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail