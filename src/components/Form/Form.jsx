import React, { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css"





export default function Form(props){
    const [userData,setUserData]= useState({username:"",password:""});
    const [errors,setErrors] = useState({username:"",password:"" })

    const handleInputChange =(e)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

        setErrors(
            validation({ 
                ...userData,
                  [e.target.name]: e.target.value
                 })
        )
    }
   
    const handleSubmit = (e)=>{
         e.preventDefault();
         props.login(userData)

    }
    




    return (
    <div>
        <form onSubmit={handleSubmit}>
     <label   htmlFor="">USERNAME</label>
     <input  name="username" onChange={handleInputChange} value={userData.username} type="text" className={errors.username && styles.warning} />
      <p className='danger'>{errors.username}</p>
     <br />
     <label htmlFor="">PASSWORD</label>
     <input name="password" onChange={handleInputChange} value={userData.password} type="password"  className={errors.password && styles.warning}/>
     {errors.password && <p className='danger'>{errors.password}</p>}
     <br />
    <button  type="submit">ENTRAR</button>
    </form>
    </div>
    )

}