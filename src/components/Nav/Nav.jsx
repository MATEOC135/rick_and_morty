import SearchBar from "../SearchBar";
import nav from "./Nav.module.css"

import {Link } from "react-router-dom"


export default function Nav(props){
    return (
        <nav>
        <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="rick y morty imagen" width="20%" />
        <SearchBar onSearch={props.onSearch}  random={props.random}/>
        <Link to= "/about">ABOUT</Link>
        <Link to="/home">HOME</Link>

        </nav>
    )
}
