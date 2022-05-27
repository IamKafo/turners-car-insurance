import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"; 
import "./Payment.css";
import ProgressBar from '../../Images/progressbar3.png';
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const BuyPolicy = () => {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })   
    return (
        <>
        <NavBar/>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.5}}}
        exit={{opacity:0, transition:{duration:0.5}}}>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <div className='payment-page-container'>
                <div className='payment-header'>Buy your policy</div>

                    <div className='payment-row'>
                        <div className='payment-card'>
                            <div className='our-best-plan'>Our best plan</div>
                            <div className='card-header-monthly'>Monthly plan</div>
                            <div className='plan-price'><span className="price-number">$62.68 </span> </div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$40</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='payment-disclaimer'>*Paying monthly is our flexi-plan.<br/>Click <span className='here-styled'>here</span> for more information</div>
                            <div className="extra-info"><b><u>View policy wording <br/> Go back to see other payment options</u></b></div>

                        </div>
                        <div className="policy-selection">
                            You Have selected <b>the monthly plan</b> <br/>
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
                <div className="down-arrow-container">
                    <div className="downarrow-buy-policy">
                        <button className="scroll-button" onClick={executeScroll}> <Icon icon="ant-design:down-outlined" width={60} /></button>
                    </div>
                </div>
                <div ref={myRef}className="please-complete-direct-debit-container">
                    <div className="please-complete-details-top-box-container">
                        <div className="top-box-header">
                            Please complete the Direct debit details below
                        </div>
                        <div className="top-box-details-input">
                            <div className="payment-start">When do you want your payments to start?
                            <input className='payment-input' type='text' placeholder='Day' required/>
                            <select className='payment-selection'>
                                <option value="January"selected>Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value=" November"> November</option>
                                <option value="December">December</option>
                            </select>
                            <select className='payment-selection'>
                                <option value="year"selected>Year</option>
                                <option value="year">2023</option>
                                <option value="year">2024</option>
                                <option value="year">2025</option>
                                <option value="year">2026</option>
                                <option value="year">2027</option>
                                <option value="year">2028</option>
                                <option value="year">2029</option>
                                <option value="year">2030</option>
                                <option value="year">2031</option>
                                <option value="year">2032</option>
                                <option value="year">2033</option>
                            </select>
                            </div>
                        </div>
                        <div className="bottom-box-details-input-container">
                            <div className="bottom-box-header">Please enter your bank account details to proceed with the payment.</div>
                            <div className="bottom-box-details-input-container">
                                <label className="bottom-box-labels" htmlFor="">Billing customer:
                                <br />
                                <input className='bottom-details-input' type='text' placeholder='' required/>
                                </label>
                                <br />
                                <br/>
                                <label className="bottom-box-labels" htmlFor="">Bank name:
                                <br />
                                <select className='bank-selection'>
                                <option value="year"selected>Select</option>
                                <option value="year">ANZ Bank New Zealand</option>
                                <option value="year">ASB Bank</option>
                                <option value="year">Bank of India New Zealand</option>
                                <option value="year">Bank of New Zealand</option>
                                <option value="year">China Construction Bank (New Zealand)</option>
                                <option value="year">Citibank New Zealand</option>
                                <option value="year">Co-operative Bank</option>
                                <option value="year">Heartland Bank</option>
                                <option value="year">HSBC New Zealand</option>
                                <option value="year">Kiwibank</option>
                                <option value="year">Rabobank New Zealand</option>
                                <option value="year">SBS Bank</option>
                                <option value="year">TSB Bank</option>
                                <option value="year">Westpac</option>
                                <option value="year">Westpac New Zealand</option>
                            </select>
                                </label>
                                <br />
                                <br/>
                                <label className="bottom-box-labels" htmlFor="">Account name:
                                <br />
                                <input className='bottom-details-input' type='text' placeholder='' required/>
                                </label>
                                <br />
                                <br/>
                                <label className="bottom-box-labels" htmlFor="">Account number:
                                <br/>
                                <input className='bottom-details-input-numbers' type='text' placeholder='00' required/>
                                <input className='bottom-details-input-numbers' type='text' placeholder='0000' required/>
                                <input className='bottom-details-input-numbers' type='text' placeholder='0000000' required/>
                                <input className='bottom-details-input-numbers' type='text' placeholder='000' required/>
                                </label>
                            </div>
                        </div>
                        <div className="bottom-card-container">
                            <div className="bottom-card">
                                <div className="card-regulations-box">
                                <input type="checkbox"  className="check-box"/>
                                I am the account holder/ I have authority from the account holder to arrange regular payments
                                </div>
                                <div className="card-regulations-box">
                                <input type="checkbox"  className="check-box"/>
                                No one else needs to authorise this payment
                                </div>
                                <div className="card-regulations-box">
                                <input type="checkbox"  className="check-box"/>
                                Turners is authorised to begin direct debits and I authorise my chosen bank to accept those direct debits
                                </div>
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
        </motion.div>
        <Footer/>
        </>
    )
}

export default BuyPolicy;