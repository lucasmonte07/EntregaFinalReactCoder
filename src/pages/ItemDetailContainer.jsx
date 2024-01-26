import { useGetProductById } from '../hooks/UseProducts';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import ItemCount from '../cart/ItemCount';
import { useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';

const ItemDetailContainer = () => {

    const { id } = useParams()

    const { productData } = useGetProductById("products-shop", id)
    console.log(useGetProductById);
    
    const { countItem } = useContext(CartContext)


    return (

        <>

        <div className="container-title"> {productData.category} </div>

            <main key={productData.id}>
                <div className="container-img">
                    <img
                        className='DetailProduct-IMG'
                        src={productData.thumbnail}
                        alt="imagen-producto"
                    />
                </div>
                <div className="container-info-product">
                    <div className="container-price">
                        <span> {productData.price}$ </span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>

                    <div className="container-details-product">
                        <div className="form-group">
                            <label htmlFor="colour">Color</label>
                            <select name="colour" id="colour">
                                <option disabled selected value="">
                                    Escoge una opción
                                </option>
                                <option value="rojo">Rojo</option>
                                <option value="blanco">Blanco</option>
                                <option value="beige">Celeste</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Talla</label>
                            <select name="size" id="size">
                                <option disabled selected value="">
                                    Escoge una opción
                                </option>
                                <option value="40">64GB</option>
                                <option value="42">128GB</option>
                                <option value="43">512GB</option>
                                <option value="44">1TB</option>
                            </select>
                        </div>
                        <button className="btn-clean">Limpiar</button>
                    </div>

                    <div className="container-add-cart">
                        <div className="container-quantity">
                            <input
                                type="number"
                                placeholder="1"
                                value={countItem}
                                min="1"
                                className="input-quantity"
                            />
                            <div className="btn-increment-decrement">
                                <i className="fa-solid fa-chevron-up" id="increment"></i>
                                <i className="fa-solid fa-chevron-down" id="decrement"></i>
                            </div>
                        </div>
                        <button className="btn-add-to-cart">
                            <i className="fa-solid fa-plus"></i>
                            <ItemCount/>
                        </button>
                        <Button > Confirmar Compra  </Button>
                    </div>

                    <div className="container-description">
                        <div className="title-description">
                            <h4>Descripción</h4>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="text-description">
                            <p>
                                {productData.description}
                            </p>
                        </div>
                    </div>

                    <div className="container-additional-information">
                        <div className="title-additional-information">
                            <h4>Información adicional</h4>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="text-additional-information hidden">
                            <p>-----------</p>
                        </div>
                    </div>

                    <div className="container-reviews">
                        <div className="title-reviews">
                            <h4>Reseñas</h4>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="text-reviews hidden">
                            <p>-----------</p>
                        </div>
                    </div>

                    <div className="container-social">
                        <span>Compartir</span>
                        <div className="container-buttons-social">
                            <a href="#"><i className="fa-solid fa-envelope"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ItemDetailContainer;


/*



        const { id } =useParams()
        
        const {productData}=useGetProductById(id)

        return (
            <Card key={productData.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productData.thumbnail} />
                <Card.Body>
                    <Card.Title> {productData.title} </Card.Title>
                    <Card.Text>
                        {productData.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )





*/