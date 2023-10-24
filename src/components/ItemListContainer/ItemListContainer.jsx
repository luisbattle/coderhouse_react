import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
    const { category } = useParams()

    const [products, setProducts] = useState([])
    useEffect(() => {
        if (!category) {
            getProducts()
                .then((products) => {
                    setProducts(products)
                    console.log(`categoria: ${category}`)
                })
        } else {
            getProductsByCategory(category)
                .then((products) => {
                    setProducts(products)
                    console.log(`categoria: ${category}`)
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
