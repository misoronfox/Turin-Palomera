export const getProductsFromCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(data => data.json())
}

export const getProductsById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(data => data.json())
            
            
            
}