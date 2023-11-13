import React from 'react'
import { Container } from 'react-bootstrap'
import { Loader, Image, Segment } from 'semantic-ui-react'


const Home = () => {
    return (
        <Container>
            <h1 className='text-center'>Tienda eCommerce</h1>
            <h2>Encontrá los mejores productos en un mismo lugar</h2>
            <Segment>
                <Loader active />
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        </Container>
    )
}

export default Home