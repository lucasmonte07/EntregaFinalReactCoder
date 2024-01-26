import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2"
import './CreateProduct.css'

const CreateProduct = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");
    const [categoria, setCategoria] = useState("");

    const resetForm = () => {
        setTitle(""),
        setDescription(""),
        setPrice(""),
        setThumbnail(""),
        setCategoria("")
    }

    const sendForm = () => {

        const data = {
            title,
            description,
            price,
            thumbnail,
            categoria
        }

        if (title === '' || description === '' || price === '' || thumbnail === '' || categoria === '') {
            
            return alert(" Todos los datos son obligatorios ")
            
        }else {

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Formulario envíado ",
                showConfirmButton: false,
                timer: 1500
              });

        }
            

        //para inicializar con la base de fire store 
        const db = getFirestore();
        //2do paso indicarle cual es la colleción en este caso es "db, products-shop"
        //addDoc es para agregar el producto que el usuario cargó 
        const productsColecction = collection(db, 'products-shop')
        addDoc(productsColecction, data).then(({ id }) => {
            console.log(id)
            resetForm()
        });

        /*
        if(title === setTitle || description === setDescription || price === setPrice || thumbnail === setThumbnail || categoria === setCategoria ){
            return (
                window.alert("formulario envíado")
            )
        } 
        */ 
        
    };

    // onChange={(e) => setTitle(e.target.value)} = para guardar el evento/valor que está ingresando el usuario 
    return (
        <div className="createProduct-css">
            <h1> Crear nuevo producto  </h1>
            <input
                type="text"
                placeholder=" Titulo "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder=" Descripción "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder=" Precio "
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder=" Thumbnail "
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
            />
            <input
                type="text"
                placeholder=" Categoría "
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            <Button onClick={sendForm}> Envíar formulario  </Button>

        </div>
    )
}

export default CreateProduct;