import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {  useGetProductsByCategory } from "../hooks/UseProducts";
import { useParams } from "react-router-dom";



const Category = () => {

    const {id} = useParams();
    
     const {productsData} = useGetProductsByCategory(id);
    

    useEffect (() => {
        document.title = "My - Ecommerce ";
    },[])

    return (
        <ItemListContainer productsData={productsData} />
    )
}

export default Category;