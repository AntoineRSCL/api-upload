import axios from "axios";
import React, {useState, useEffect} from "react";
const ProductsPage = (props) => {
    
    const [products, setProducts] = useState()

    const getAllProducts = async (event) => {
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/products")
            setProducts(response.data['hydra:member'])
            console.log(response.data['hydra:member'])
        }catch(error){
            console.log(error)
        }

    }

    useEffect(() => {
        getAllProducts()
    },[])
    

    return ( 
        <>
            <h1>Products</h1>
            <h3>Voir tous les produits</h3>
            
        </>
     );
}
 
export default ProductsPage;