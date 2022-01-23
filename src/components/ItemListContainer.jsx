import { Container, Row } from 'react-bootstrap'
import ItemList from './ItemList'

const ItemListContainer = ({products}) =>{
    
    
    return (
        <Container>
            <Row>
                <ItemList products={products} />
            </Row>
        </Container>
    )
       
} 
export default ItemListContainer