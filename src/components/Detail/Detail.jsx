import React from "react";
import  {useParams} from "react-router-dom"
import {useState, useEffect} from "react"


export default function Detail(){
    
    
    const [character,setCharacter] = useState({})
    const {detailId} = useParams()
    console.log(detailId)
    console.log(useParams)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert(" este es el alert ");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


    return (
        <div>
            <h1>{character.name}</h1>
            <h1>{character.gender}</h1>
            <img src={character.image}/>
            
        </div>
    )
}