import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { getProducts } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "Products", `${id}`) // Get Product By Id Param
        getDoc(oneItem)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({
                        id: snapshot.id, ...snapshot.data()
                    })
                }
            })

    }, [])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}
export default ItemDetailContainer