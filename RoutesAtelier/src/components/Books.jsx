import { Link } from "react-router-dom";
import React from 'react';
import '../App.css';


export default function Books(){
    const books=[
        { id : 1, title : 'React Basics', genre : 'Technology'},
        { id : 2, title : 'Mein Kampf', genre : 'LifeStory'},
        { id : 3, title : "Dernier Jour D'un Condamné", genre : 'Nouvel'},
        { id : 4, title : 'Les Mésirables', genre : 'Roman'}
    ];


    return(
        <div>
            <h1 className="test">Liste des livres</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.genre}/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}