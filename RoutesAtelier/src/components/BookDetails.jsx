import { useParams } from "react-router-dom";
import React from "react";


export default function BookDetails(){
    const {genre, id} = useParams();


    return (
        <div>
            <h1>Détails du livre</h1>
            <p>Genre : {genre}</p>
            <p>ID du livre : {id}</p>

        </div>
    )
}