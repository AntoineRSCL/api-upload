import React from 'react';
import { NavLink } from 'react-router-dom';
const HomePage = (props) => {
    return ( <>
        <h1>Hello</h1>
        <NavLink className="btn btn-success" to="/add-prod">Ajouter un produit</NavLink>
        <NavLink className="btn btn-primary" to="/products">Voir les produits</NavLink>
    
    </> );
}
 
export default HomePage;