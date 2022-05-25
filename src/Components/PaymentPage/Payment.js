import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"; 
import "./Payment.css";
import ProgressBar from '../../Images/progressbar3.png';
import { NavLink } from "react-router-dom";

const BuyPolicy = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <div className='payment-page-container'>
                <div className='payment-header'>Buy your policy</div>

                    <div className='payment-row'>
                        <div className='payment-card'>
                            <div className='our-best-plan'>Our best plan</div>
                            <div className='card-header-monthly'>Monthly plan</div>
                            <div className='plan-price'><span className="price-number">$62.68 </span> Monthly</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$40</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='payment-disclaimer'>*Paying monthly is our flexi-plan.<br/>Click <span className='here-styled'>here</span> for more information</div>
                            <div className="extra-info"><b><u>View policy wording <br/> Go back to see other payment options</u></b></div>

                        </div>
                        <div className="policy-selection">
                            You Have selected <b>the fortnightly plan</b> <br/>
                            for <b>Comprehensive Car insurance</b>

                            <ul className="policy-description-list">
                                <li>Windscreen cover</li>
                                <li>Roadside assistance</li>
                                <li>$1,000,000 for liability costs</li>
                                <li>Up to $400 for key replacement</li>
                                <li>Fire damage</li>
                                <li>Protection from uninsured drivers</li>
                                <li>Damage to someone else's vehicle or property</li>
                                <li>Theft of your vehicle</li>
                            </ul>
                        </div>

                    </div>
        </div>
        
        <button><NavLink className="NavLink" to='/confirm'> confirm page routing placeholder</NavLink></button>
        <Footer/>
        </>
    )
}

export default BuyPolicy;