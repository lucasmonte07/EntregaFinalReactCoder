import axios from "axios";


export async function getProducts() {
    return await axios.get(`https://dummyjson.com/products`)
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories() {
    return await axios.get(`https://dummyjson.com/products/categories`)
}

export async function getProductsByCategory(id = 'smartphones') {
    return await axios.get(`https://dummyjson.com/products/category/${id}`)
}
