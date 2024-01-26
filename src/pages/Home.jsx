import { useContext, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useProducts } from "../hooks/UseProducts";
import { CartContext } from "../context/CartContext";


export const Home = () => {

    const { productsData } = useProducts();

    useEffect(() => {
        document.title = "My - Ecommerce ";
    }, [])


    const { count } = useContext(CartContext);
    console.log(count);

    return (
        <ItemListContainer productsData={productsData} />
    )
}
