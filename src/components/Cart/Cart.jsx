import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons';
import Toastify from 'toastify-js'



import "./Cart.css"

const Cart = () => {
    const { cart } = useContext(CartContext)
    const [totalAmount, setTotalAmount] = useState(0)
    const { addItem, clearCart, removeItem } = useContext(CartContext)

    useEffect(() => {
        const calculateTotalAmount = () => {
            const total = cart.reduce((acumulator, element) => acumulator + (parseInt(element.price) * element.quantity), 0)
            setTotalAmount(total)
        }
        calculateTotalAmount()
    }, [cart])

    const handleOnRemoveItem = (productId, productName) => {
        console.log("ProductName: ", productName)
        removeItem(productId)
        alertRemoveItem(productName)

    }
    const alertRemoveItem = (item) => {
        Toastify({
            text: `${item} se ha eliminado del carrito`,
            duration: 3000
        }).showToast();
    }

    return (
        <Container>
            <h1 className='text-center'>Carrito</h1>
            <div className="row">
                <div className="col-9">
                    {
                        cart.length > 0
                            ? cart.map((product) =>
                                <div className="cartListItem">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="col-5">
                                            <p>{product.name}</p>
                                            <Trash className='btnCartRemoveItem' onClick={() => handleOnRemoveItem(product.id, product.name)} variant='danger' > X</Trash>
                                        </div>
                                        <div className="col-5 cartPrice">
                                            <p>CANT: {product.quantity}</p>
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            : <p>Tu carrito está vacío</p>
                    }

                </div>

                <div className="col-3">
                    <p>Monto total</p>
                    <div className="row">
                        <div className="col-6">
                            <p>Envío</p>
                        </div>
                        <div className="col-6">
                            <p>Gratis</p>
                        </div>
                        <hr className="hr" />
                        <div className="row">
                            <div className="col-6">
                                Total...
                            </div>
                            <div className="col-6">
                                ${totalAmount}
                            </div>
                        </div>
                        {
                            cart.length > 0
                                ? <Button className='btn btn-dark' >
                                    <Link to={`/checkout`} >
                                        Checkout
                                    </Link>
                                </Button>
                                : <Button className='btn btn-dark disabled' >
                                    <Link to={`/checkout`} >
                                        Checkout
                                    </Link>
                                </Button>
                        }
                    </div>
                </div>
            </div>
            {
                cart.length > 0
                    ? <Button className="btn btn-dark mb-2" onClick={clearCart}>Limpiar Carrito</Button>
                    : null
            }

        </Container>
    )
}

export default Cart