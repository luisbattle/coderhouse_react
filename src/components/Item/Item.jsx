import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'react-bootstrap'

import './Item.css'
const Item = ({ id, title, image }) => {

    return (
        <>
            <div className="card mb-3">
                <Container className='cardContainer text-center'>
                    <Row className='Item_cardBodyContainer'>
                        <h2 className='card-title'>{title}</h2>
                        <img src={image} alt={title} />

                    </Row>
                    <Row className='Item_BtnDetailContainer '>
                        <Button variant='dark' className='btnDetail' >
                            <Link to={`/product/${id}`} className='btnDetail-text'>
                                Detalle
                            </Link>
                        </Button>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Item