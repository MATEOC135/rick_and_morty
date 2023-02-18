import { useState } from "react";

const styleInput = {
   padding: "10px",
   borderRadius: "5px",

}

const styleButton = {
   backgroundColor: "black",
   color: "white",
   boder:"0px",
   borderRadius: "5px",
   fontWeight: "bold",
   fontSize: "15px",
   padding: "10px",
   matgin: "25px 0px 25px 0px"



}



export default function SearchBar(props) { 

    const [character, setCharacter] =useState(0);

   const handleSearch = (e) => {
      let {value} = e.target
      setCharacter(value);
   }


   return (
      <div>
          <input style={styleInput} type='search'  onChange={handleSearch}/>
      <button style={styleButton} onClick={()=>props.onSearch(character)}>Agregar</button> 
      <button style={styleButton} onClick={props.random}>random boton</button>
      </div>
   );
}
