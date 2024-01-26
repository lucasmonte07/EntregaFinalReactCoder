import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({  productsData }) => {



    const handleClick = (e) => {
        console.log("soy la funcion del click ir al producto  ");
        console.log(e);
    }

    console.log(productsData);

    return (
            <div className='list-css'>
                    {
                        // eslint-disable-next-line react/prop-types
                        productsData.map(products => {
                            return (    
                                
                                    <Card className='card-listContainer' key={products.id} style={{ width: '18rem' }}>
                                        <Link to={`/item/${products.id}`}>
                                            <Card.Img className='card-ListContainer-img' variant="top" src={products.thumbnail} />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title> {products.title} </Card.Title>
                                            <Card.Text>
                                                {products.description}
                                            </Card.Text>
                                            <Link to={`/item/${products.id}`}>
                                                <Button className='card-ListContainer-button' onClick={handleClick} variant="primary"> Ir al producto </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                )
                        })
                    }
            </div>
            )
}

export default ItemListContainer;