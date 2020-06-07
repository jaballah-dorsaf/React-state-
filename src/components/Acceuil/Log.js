import React from 'react'
import { Button } from "reactstrap";


const Log = () => {
    return(
        <div className="container">
        <p>Vous devez vous connecter pour voir la page sur</p>
      
        <form>
        <div className="email">
             <label htmlFor="email" className="emaill">Email</label>
             <input 
             id="email"
             type="text" 
             className=""
             placeholder="Email" 
             name="email" 
             noValidate
            
               />
               
           </div>

           <div className="password">
             <label htmlFor="password">Mot de passe</label>
             <input 
             id="password" 
             className=""
             placeholder="Mot de passe" 
             type="password" 
             name="password" 
             noValidate
             
               />
           </div>
           <div>
           <Button id="btnLogin" className="btn btn-action">Log in</Button>
           <Button id="btnSignup" className="btn btn-secondary">Sign up</Button>
           <Button id="btnLogin" className="btn btn-action hide">Log Out</Button>  
        </div>
        </form>
</div>
    )
}

export default Log;