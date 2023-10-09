import { Container } from 'react-bootstrap'
export default function ItemListContainer(props) {
    const message = props.message
    return (
        <div>
            <Container>
                {message}
            </Container>
        </div>
    )
}
