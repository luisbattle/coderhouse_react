import React from 'react'
import './Checkout.css'
import { Button } from 'react-bootstrap'

const Checkout = () => {

    const sendOrder = (event) => {
        event.preventDefault()
        alert("gracias por su compra")
    }
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center'>Checkout</h1>
            <div className='checkout-container'>
                <input className="checkout-form-input" type="email" placeholder='email@here' />
                <input className="checkout-form-input" type="text" placeholder='Nombre y apellido' />
                <Button className='mt-5 w-25 text-center' variant="success" onClick={sendOrder}  >send order</Button>
            </div>
        </div>
    )
}

export default Checkout