import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Detail = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3004/rickandmorty/character/${id}`)
        .then(response => {
            setCharacter(response.data);
        })
    }, [id]);
    return (
        <div>
            <h1 className="bcard">{character.name}</h1>
            <p className="bcard"> {character.status}</p>
            <p className="bcard">{character.species}</p>
            <p className="bcard"> {character.gender}</p>
            <img src={character.image} alt={character.name} />
        </div>
    );
}
export default Detail;