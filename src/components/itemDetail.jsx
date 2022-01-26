import { Card, ListGroup,  } from "react-bootstrap";

const Item = ( product ) => {
    const {title, price, category, description, image} = product
    return (
        <Card >
            <Card.Img variant="top" src={image}  />
            <Card.Body >
                <Card.Text >
                    {title}
                </Card.Text>
                <Card.Title>
                    {price}
                </Card.Title>          
            </Card.Body>              
            <Card.Header>Detalles</Card.Header>            
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                {description}
                </ListGroup.Item>    
            </ListGroup>             
            <Card.Body>
                
            </Card.Body>                
        </Card> 
    )
}
export default Item;