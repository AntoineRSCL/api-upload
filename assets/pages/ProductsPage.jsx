import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const ProductsPage = () => {
    
    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
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
            {products.map((product) => (
                <div className="card" style={{ width: "18rem" }} key={product.id}>
                <img src={`/images/${product.image}`} alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <Link to="/products" className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default ProductsPage;