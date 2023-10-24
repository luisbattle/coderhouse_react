import React from 'react'
import { Container } from 'react-bootstrap'
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className='PageNotFound'>
            <Container>
                <img src="./404_not_found.jpg" alt="404 Page Not Found" />
                <h1>Page Not Found</h1>
            </Container>
        </div>

    )
}

export default PageNotFound