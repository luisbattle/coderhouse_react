import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
import "./Cart.css"

const Cart = () => {
    const { cart } = useContext(CartContext)
    const [totalAmount, setTotalAmount] = useState(0)
    const { addItem, clearCart, removeItem } = useContext(CartContext)

    useEffect(() => {
        const calculateTotalAmount = () => {
            console.log("CartItems: ", cart.length)
            const total = cart.reduce((acumulator, element) => acumulator + (parseInt(element.price) * element.quantity), 0)
            console.log("Total ", total)
            setTotalAmount(total)
        }
        calculateTotalAmount()
    }, [cart])

    // const removeItem = (productid) => {
    //     console.log("removiendo item...", productid)
    // }

    return (
        <div className='CartContainer'>
            <h1 className='text-center'>Carrito</h1>
            {cart.map((product) =>
                <div>
                    <ul className='cart-list'>
                        <li>{product.name}  X {product.quantity} Unidades $ {product.price} = Subtotal ${product.price * product.quantity} </li>

                        <Button className='btnCartRemoveItem' onClick={() => { removeItem(product.id) }} variant='danger' > X</Button>
                    </ul>
                </div>
            )}
            <p>Total: ${totalAmount}</p>
            <Button onClick={clearCart}>Limpiar Carrito</Button>
        </div>
    )
}

export default Cart