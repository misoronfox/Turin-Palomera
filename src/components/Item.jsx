import ItemCount from './ItemCount';
import {Card, ListGroup } from "react-bootstrap";

/*const Item = ({items}) => {

    let listItem = prop.map(product => {    
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {product.id}
                    </div>
                    <div className='col'>
                        {product.title}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {product.pictureUrl}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {product.price}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ItemCount/>
                    </div>
                </div>
            </div>
            return(listItem)
    })*/


    /*let listItem = items.map((item) =>
        <div>
            {item}
        </div>
            
    );
        return listItem;
          

}*/



const Item = ({ product }) => {
    const {title, price, pictureUrl} = product
    return (
        <Card >
            <Card.Img variant="top" src={pictureUrl} />
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
                
                </ListGroup.Item>    
            </ListGroup>             
            <Card.Body>
                <ItemCount/>
            </Card.Body>                
        </Card> 
    )
}











export default Item;
