import { Container, Row } from "react-bootstrap";

import ItemDetail from './itemDetail'

const itemDetailContainer = (product) =>{
    
    
    return (
        <Container>
            <Row>
                <ItemDetail product={product} />
            </Row>
        </Container>
    )
       
} 
export default itemDetailContainer;
