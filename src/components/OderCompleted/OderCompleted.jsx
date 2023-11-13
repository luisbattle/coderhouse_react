import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Container } from 'react-bootstrap'


const OrderCompleted = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "Orders", `${id}`) // Get Product By Id Param
        getDoc(oneItem)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setOrder({
                        id: snapshot.id, ...snapshot.data()
                    })
                    setLoading(false)
                }
                else {
                    setLoading(false)
                }
            })


    }, [id])

    return (
        <Container>
            {
                loading
                    ?
                    <>Buscando compra.....</>
                    :
                    order.id
                        ? <>
                            <h1>Hola {order.buyerName}</h1>
                            <h2>Su Orden <span>{order.id} </span> fué procesada correctamente</h2>
                            <h2 style={{ color: "gray" }}>Productos</h2>
                            <ul>
                                {order.cart.map((item) => {
                                    return (
                                        <>
                                            <li style={{ color: "gray" }}>- {item.name}</li>
                                        </>
                                    )
                                })}
                            </ul>

                            <p>Estarás recibiendo un correo a {order.email} con los datos de la compra en breve</p>
                            <p>Ante cualquier conveniente comunicarse al 0800-222-4222</p>
                        </>
                        : <>
                            <h2>Ups.... ocurrió un error</h2>
                            <p>Por favor verificá si el Nº de orden es valido, o intentá nuevamente mas tarde.</p>
                        </>
            }

        </Container>
    )
}

export default OrderCompleted