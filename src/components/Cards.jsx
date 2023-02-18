import Card from './Card';
import styled from "styled-components"


const Divcards= styled.div`
display: flex;
justify-content: space-evenly`



export default function Cards(props) {
   const { characters } = props;
   return ( <Divcards>
        {characters.map(characters=>
         <Card key={characters.name}
         name={characters.name}
         species={characters.species}
         gender= {characters.gender}
         image={characters.image}
         onClose={() => props.onClose(characters.id)}
         id={characters.id}
         />)}
   </Divcards>)
}
