import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"; 
import "./BuyPolicy.css";
import ProgressBar from './progressbar3.png';
import { NavLink } from "react-router-dom";

const BuyPolicy = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <button><NavLink className="NavLink" to='/confirm'> confirm page routing placeholder</NavLink></button>
        <Footer/>
        </>
    )
}

export default BuyPolicy;