import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {

    const [ count, setCount] = useState(0)

    const [countItem, setCountItem] = useState(0);
    
    const handleAdd = () => {
        setCountItem(countItem + 1)
    }

    const handleRemove = () => {
        setCountItem(countItem -1 )
    }

    const reset = () => {
        setCountItem(0)
    }
    console.log(count);

    return (
        <CartContext.Provider value={{ count, setCount, countItem, handleAdd, handleRemove, reset}}>
            {children}
        </CartContext.Provider>
    )
}


