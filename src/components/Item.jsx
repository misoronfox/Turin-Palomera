import ItemCount from './ItemCount';
import {Card, ListGroup, Button } from "react-bootstrap";
import ItemDetailContainer from './ItemDetailContainer';


const Item = ({ product }) => {
    const {title, price, category, description, image} = product
    

    const showDetails = (product) => {
        
        return(<ItemDetailContainer product = {product} />)
    }

    return (
        <Card >
            <Card.Img variant="top" src={image}  />
            <Card.Body >
                <Card.Text >
                    {title}
                </Card.Text>
                <Card.Title>
                    ${price}
                </Card.Title>          
            </Card.Body>              
            <Card.Header>Detalles</Card.Header>            
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                {description}
                </ListGroup.Item>    
            </ListGroup>             
            <Card.Body>
                <Button onClick={() => showDetails(product)} className='btn btn-outline-primary' href='./ItemDetailContainer'>Mostrar más</Button>
                <ItemCount/>
            </Card.Body>                
        </Card> 
    )
}











export default Item;
