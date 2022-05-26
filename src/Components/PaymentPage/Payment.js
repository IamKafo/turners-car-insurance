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
                <div className="disclosure-container">
                    <div className="disclosure-details">
                        <div className="disclosure-header">Disclosure</div>
                        <div className="disclosure-disclaimer">*Please give an honest answer for each of the question below:</div>

                        <div className="question">
                        <div className="question-text">In the last 5 years, have you had any accidents or losses where a car was damaged or stolen (whether you were at fault or not)?</div>
                        <div className="radio-buttons-container">
                                <input type="radio" name='answer' className="disclosure-button-yes"/>
                                <label htmlFor="" className="yes-text">Yes</label><br></br>
                                <input type="radio" name='answer' className="disclosure-button-no" checked/>
                                <label htmlFor="" className="no-text">No</label><br></br>
                            </div>
                        </div>
                        <hr/>
                        <div className="question">
                        <div className="question-text">In the last 7 years have you been convicted of a criminal offence relating to fraud, theft or burglary, arson or criminal or wilful damage?</div>   
                        <div className="radio-buttons-container">
                                <input type="radio" name='answer2' className="disclosure-button-yes"/>
                                <label htmlFor="" className="yes-text">Yes</label><br></br>
                                <input type="radio" name='answer2' className="disclosure-button-no" checked/>
                                <label htmlFor="" className="no-text">No</label><br></br>             
                            </div>  
                        </div>
                        <hr/>
                        <div className="question">
                        <div className="question-text">In the last 5 years, have you had any insurance refused, cancelled, renewal not offered, claim refused or any special conditions imposed?</div>
                        <div className="radio-buttons-container">
                                <input type="radio" name='answer3' className="disclosure-button-yes"/>
                                <label for="yes" className="yes-text">Yes</label><br></br>
                                <input type="radio" name='answer3' className="disclosure-button-no" checked/>
                                <label for="no" className="no-text">No</label><br></br>
                            </div>
                        </div>
                        <hr/>
                        <div className="last-question">
                        <div className="question-text">Have you had your license revoked, cancelled or suspended in the last 3 years?</div>
                            <div className="radio-buttons-container">
                                <input type="radio" name='answer4' className="disclosure-button-yes"/>
                                <label htmlFor="" className="yes-text">Yes</label><br></br>
                                <input type="radio" name='answer4' className="disclosure-button-no" checked/>
                                <label htmlFor="" className="no-text">No</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment-button-container">
                    <div className="payment-button">
                        <button className='go-back-to-edit-button'><b><NavLink className="NavLink" to='/existingdetailspage'>Go back edit details</NavLink></b></button>
                        <button className='buy-insurance-button'><b><NavLink className="NavLink" to='/confirm'>Buy insurance</NavLink></b></button>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    )
}

export default BuyPolicy;