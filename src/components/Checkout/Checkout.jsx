import React, { useContext, useState } from 'react'
import './Checkout.css'
import { doc, addDoc, getFirestore, collection } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

import { CartContext } from '../../context/CartContext'




const Checkout = () => {
    const [email, setEmail] = useState("")
    const [buyerName, setBuyerName] = useState("")
    const navigate = useNavigate();
    const { cart, clearCart } = useContext(CartContext)



    const db = getFirestore()
    const ordersCollection = collection(db, 'Orders')

    const sendOrder = (event) => {
        event.preventDefault()
        // save Order
        const orderData = {
            email,
            buyerName,
            cart

        };
        addDoc(ordersCollection, orderData)
            .then(({ id }) => {
                alert("Gracias por tu compra")
                clearCart()
                navigate(`/order/${id}`);

            })

    }


    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center'>Checkout</h1>
            <div className='checkout-container'>
                <input className="checkout-form-input" type="email" placeholder='email@aqui' onChange={(e) => setEmail(e.target.value)} />
                <input className="checkout-form-input" type="text" placeholder='Nombre y apellido' onChange={(e) => setBuyerName(e.target.value)} />
                <button className='mt-5 w-25 text-center btn btn-dark' onClick={sendOrder}  >Finalizar compra</button>
            </div>
        </div>
    )
}

export default Checkout