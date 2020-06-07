import React from 'react';
import logo from "../../assets/logo.jpg";
import "../../components/Footer/Footer.css"

const footer=()=>{
    return(
        <div className="footer-container">

        <p className="name">
           <h2>Visiter♡♡Tunisie <img src={logo} alt="logo" className="footer-logo" /></h2>
           made by Dorsaf
        </p>
        <p className="name">Visiter♡♡Tunisie Corporation © 2020</p>
        </div>
        
    );
}
export default footer;