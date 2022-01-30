import {Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from './itemDetail'
import { getProductsById } from "../services/Products";


const ItemDetailContainer = () =>{
    const  id  = useParams();
    const [product, setProduct] = useState([]);
    console.log(product)

    useEffect(() => {
        let mounted = true
        getProductsById(id).then(item => {
            if (mounted) {
                console.log(item)
                setProduct(item)
            }
        })
        return () => mounted = false
    }, []);
    
    return (
        <Container>
            <Row>
                <ItemDetail/>
            </Row>
        </Container>
    )
       
} 
export default ItemDetailContainer;
