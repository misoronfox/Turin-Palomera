import { Col } from "react-bootstrap";
import Item from "./Item"

const ItemList = ({products}) =>{
  return(
    <>
      {
        products.map((product) =>(
          <Col key={product.id} className=" col-4">
            <Item key={product.id} product={product}/>
          </Col>
        ))}
    </>
  )






    /*let products = prop.map(item => {
          return( 
            Item({item.id, item.title, item.price, item.pictureUrl})
          ) 
        })
    return products;*/  
}
export default ItemList;