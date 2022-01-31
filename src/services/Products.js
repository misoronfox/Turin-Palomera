export const getProductsFromCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(data => data.json())
}

export const getProductsById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(data => data.json())         
}

export const getAllCategories = () => {
    return fetch(`https://fakestoreapi.com/products/categories`)
        .then(data => data.json())
}

export const getAllProducts = () => {
    return fetch(`https://fakestoreapi.com/products`)
        .then(data => data.json())
}