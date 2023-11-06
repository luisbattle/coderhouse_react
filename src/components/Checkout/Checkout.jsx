import React from 'react'

const Checkout = () => {

    const sendOrder = (event) => {
        event.preventDefault()
        alert("gracias por su compra")
    }
    return (
        <div>
            <input type="email" placeholder='email@here' />
            <input type="text" placeholder='Nombre y apellido' />
            <button onClick={sendOrder}></button>
        </div>
    )
}

export default Checkout