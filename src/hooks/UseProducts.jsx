import { useEffect, useState } from "react";

import { 
    //getProductById,
    getCategories,  
    getProductsByCategory 
} from "../services/ProductsService";

import { 
    collection, 
    getDocs, 
    getFirestore, 
    doc, 
    getDoc 
} from "firebase/firestore"


/**
 * @description Custom Hook for get products
 * @returns {Array} de objetos 
 */


// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {

  // tenemo que crear la cajita donde se guardara los datos de la api 
  const [productsData, setProductsData] = useState([]);
  
  useEffect (() => {
    
    //obtiene la config de la base de datos que en este caso esta en "MAIN.JSX"
    const db = getFirestore()
    
    //llamamos a la colección de la bd de fire base con db y especificando tmb el nombre de la colección, que en este caso es 'products'
    const productsColecction = collection(db, 'products-shop')
    
    getDocs(productsColecction).then((snapshot) => {
      setProductsData(snapshot.docs.map(doc =>({ id: doc.id, ...doc.data() })))
    })

  },[])


            /* con el useEffect llamamos a la funcion getProducts para poder traer los datos de la API  */
            /*
            useEffect(() => {
              getProducts()
                .then(response => {
                  setProductsData(response.data.products);
                })
                .catch(error => {
                  console.log(error);
                })
            }, [])
            */
  return { productsData }
}



// LLAMADO 2 
// esta llamada es para obtener el id del producto "traducido, muestra los datos una ves seleccionado el producto "itemDetail" "
export const useGetProductById = (collectionName ="products-shop" ,id) => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    
    const db = getFirestore()

    const docRef = doc(db, collectionName, id)
    
    getDoc(docRef).then((doc) => {
      setProductData({ id:doc.id, ...doc.data()})
    })
    
    //esta es la llamada a la api. 
    /*
    getProductById(id)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      */

  }, [id])


  return { productData }
}


export const useGetCategories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
        window.alert(error)
      })
  }, [])


  return { categories }
}


// si queres que a filtrar por categorías, nos muestre los datos desde la base, hay que modificar aquí el codigo solicitando a firebase 
export const useGetProductsByCategory = (id) => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {

    getProductsByCategory(id)
      .then(response => {
        setProductsData(response.data.products);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id])


  return { productsData }
}




