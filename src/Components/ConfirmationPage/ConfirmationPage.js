import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"; 
import "./ConfirmationPage.css";
import ProgressBar from './progressbar4.png';

const ConfirmationPage = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <Footer/>
        </>
    )
}

export default ConfirmationPage;