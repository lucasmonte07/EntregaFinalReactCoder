import './CartWidget.css'

import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CartWidget = () => {

    const { count } = useContext(CartContext);

    // const totalQuantity = count.reduce((total, item) => total + item.quantity, 0 ); 

    return (
        <Link to="/Cart">
            <div className="Carrito">
                🛒
                <span>
                    {count}
                </span>
            </div>
        </Link>
    )
}

export default CartWidget;