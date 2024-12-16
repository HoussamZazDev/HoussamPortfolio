import {Link} from 'react-router-dom';
import React from 'react';


export default function NavBar(){
    return(
        <nav>
            <Link to='/'>Acceuil</Link>
            <Link to='/books'>Livres</Link>
        </nav>
    )
}