import styled from "styled-components";
import  { Link} from "react-router-dom"



 const Divcard= styled.div`
 display: inline-block;
 background-color: grey;
 border-radius: 15px;
 color: whited;
 overflow: hidden;
 margin: 25px 0px 25px 0px`

const Img = styled.img`
border-radius: 50% ;
box-shadow: 8px 0px 8px 8px #333`
const Title = styled.h1`
color: white;
`


const Species = styled.h2`
color: white;`
const Gender = styled.h2`
color: white;`
const Button = styled.button`
position: relative;
rigth:-120px;
top:10px;
background-color: black;
color: white;
border 2px;
width:30px;
height: 30px;
border-radius: 5px;
font-weight: bold;
font-size: 15px`

export default function Card(props) {
   return (
      
      <Divcard>
          <Button onClick={() => props.onClose()}>X</Button>
          <Link to={`/detail/${props.id}`}>
          <Title>{props.name}</Title> 
         <Species>{props.species}</Species>
         <Gender>{props.gender}</Gender>
         <Img  src={props.image} alt="image no found" /> 
         </Link>
      </Divcard>
      
   );
}


