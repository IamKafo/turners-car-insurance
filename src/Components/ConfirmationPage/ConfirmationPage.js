import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"; 
import "./ConfirmationPage.css";
import ProgressBar from '../../Images/progressbar4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEye, faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const ConfirmationPage = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <h1 className="large-check-mark"><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></h1>
        <header className="congratuations-header">Congratuations!</header>
        <div className="congratulations-details">
            Your vehicle is now insured. Your <b>Comprehensive car policy</b> is effective from <b>18-09-2022.</b> <br/>
            Your first <b>monthly</b> payment will begin on <b>01-06-2022.</b></div>
        <div className="congratulations-options">
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> <u>View my policy</u><br/>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <u>Email/text my policy documents</u><br/>
        <span className="pdf-icon"> <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon></span> <u>Download my policy</u>
        </div>
        <div className="homepage-refer">
            <button className="back-home-button"><NavLink className="NavLink" to='/'>Back to homepage</NavLink></button>
            <div className="refer-text">Refer a friend - get $25 if they insure with us!</div>
        </div>
        <Footer/>
        </>
    )
}

export default ConfirmationPage;