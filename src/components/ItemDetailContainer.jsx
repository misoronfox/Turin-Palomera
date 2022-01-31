import {Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from './itemDetail'
import { getProductsById } from "../services/Products";


const ItemDetailContainer = () =>{
    const  { id }  = useParams();
    const [product, setProduct] = useState({title:"caca"});
    console.log(id, "cacax2")

    useEffect(() => {
        let mounted = true
        getProductsById(id).then(item => {
            if (mounted) {
                console.log(item)
                setProduct(item)
            }
        })
        return () => mounted = false
    }, [id]);
    
    return (
        <Container>
            <Row>
                <ItemDetail product={product}/>
            </Row>
        </Container>
    )
       
} 
export default ItemDetailContainer;
