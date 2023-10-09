import { Container } from 'react-bootstrap'
export default function ItemListContainer(props) {
    const { message } = props
    return (
        <div>
            <Container>
                {message}
            </Container>
        </div>
    )
}
