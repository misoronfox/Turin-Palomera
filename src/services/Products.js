export const getProductsFromCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(data => data.json())
}