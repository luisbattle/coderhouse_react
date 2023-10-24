import { useParams } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import "./ItemDetail.css"
import { useState } from "react"

const ItemDetail = ({ products }) => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(0)

    const productDetail = products.filter((product) => product.id == id)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const substractQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <>
            {
                productDetail.map((product) => {
                    return (
                        <>
                            <h2>{product.name}</h2>
                            <div className="itemDetailContainer-image">
                                <img src={product.image} alt={product.name} className="itemDetail-image" />
                            </div>
                            <p>{product.detail}</p>
                            <p>{product.price}</p>

                            <div>
                                <Form className="ItemDetailCounter">
                                    <Button onClick={substractQuantity}>-</Button>
                                    <Form.Text>{quantity}</Form.Text>
                                    <Button onClick={addQuantity}>+</Button>
                                </Form>

                            </div>

                            <div className="text-center mb-2">
                                <Button>Buy</Button>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default ItemDetail