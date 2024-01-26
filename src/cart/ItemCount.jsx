import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap"
import './ItemCount.css'
const ItemCount = () => {

    const {count, setCount} = useContext(CartContext);

    const {countItem, setCountItem} = useContext(CartContext);

    const {handleAdd, handleRemove, reset } = useContext(CartContext)

    return (
        <div className="StyleCount">
            <Button onClick={ handleAdd }> + </Button>
            <Button onClick={ handleRemove }> - </Button>
            <Button onClick={ reset }> Resetear </Button>
            
            <Button onClick={() => {
                setCount(count + countItem);
                setCountItem(1)
            }}> 
                Agregar Al Carrito 
            </Button>
        </div>
    )
}

export default ItemCount;