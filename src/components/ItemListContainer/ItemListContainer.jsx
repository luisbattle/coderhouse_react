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
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "Products")

        if (!category) { //Get All product 
            getDocs(itemCollection)
                .then((snapshot) => {
                    const docs = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))
                    setTimeout(() => { // Para Test loaders
                        setLoading(false)
                        setProducts(
                            docs
                        )
                    }, 200);

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
                <ItemList products={products} loading={loading} />

                {/* {
                    loading ? <ItemList products="" loading={loading} />
                        : <ItemList products={products} loading={loading} />
                } */}
            </Container>
        </div>
    )
}
