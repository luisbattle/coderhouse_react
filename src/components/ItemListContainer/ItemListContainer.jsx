import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Container } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
    const { category } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "Products")
        console.log("CATEGORY: ", category)

        if (!category) { //Get All product 
            getDocs(itemCollection)
                .then((snapshot) => {
                    const docs = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))
                    setProducts(
                        docs
                    )
                })
        } else { //Get products By Category(By UseParam)
            const q = query(itemCollection, where("category", "==", category))
            getDocs(q)
                .then((snapshot) => {
                    const docs = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))
                    setProducts(
                        docs
                    )
                })


        }

    }, [category])

    return (
        <div>
            <Container>
                <ItemList products={products} />
            </Container>
        </div>
    )
}
