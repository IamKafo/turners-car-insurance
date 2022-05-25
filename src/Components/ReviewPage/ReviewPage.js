import React from 'react';
import './ReviewPage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from './progressbar2.png';
import { NavLink } from 'react-router-dom';

const ReviewPage = () => {
    return (
        <>
        <NavBar/>
            <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
            <div className='review-page-container'>
                <div className='review-header'>Review your quote</div>
                <div className='header-subtext'> This is our broadest level of cover. You and any named drivers are covered by this policy</div>
                <div className='excess'> Basic excess: $400</div>
                <div className='excess-description'> This is what you pay when you need to make a claim</div>




                <div className='card-container'>
                    <div className='card-row'>
                        <div className='card'>
                            <div className='card-header'>Fortnightly plan</div>
                            <div className='plan-price'><span className="price-number">$28.93 </span> Fortnightly</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$20</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='disclaimer'>*Paying fortnightly is our most<br/>popular payment frequency</div>
                            <button className='selected-button'>Select</button>

                        </div>
                        <div className='card'>
                            <div className='our-best-plan'>Our best plan</div>
                            <div className='card-header-monthly'>Monthly plan</div>
                            <div className='plan-price'><span className="price-number">$62.68 </span> Monthly</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$40</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='disclaimer'>*Paying monthly is our flexi-plan.<br/>Click <span className='here-styled'>here</span> for more information</div>
                            <button className='selected-button'>Select</button>

                        </div>
                        <div className='card'>
                            <div className='card-header'>Annual plan</div>
                            <div className='plan-price'><span className="price-number">$700.40 </span> Annually</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$60</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='disclaimer'>*You save $45 per year if you<br/>choose to pay anually</div>
                            <button className='selected-button'>Select</button>

                        </div>
                    </div>
                </div>
                



                <div className='quote-details'>Details of this policy</div>
                <div className='review-row'>

                    <div className='review-col'>

                        <ul>
                            <li>Windscreen Cover</li>
                            <li>Roadside assistance</li>
                            <li>$1,000,000 for liability costs</li>
                            <li>Up to $400 for key replacement</li>
                        </ul>
                    </div>
                    <div className='review-col2'>
                        <ul>
                            <li>Fire damage</li>
                            <li>Protection from uninsured drivers</li>
                            <li>Damage to someone else's vehicle or property</li>
                            <li>Theft of your vehicle</li>
                        </ul>
                    </div>
                </div>
                <div className='policy-wording'>View policy wording</div>
                <div className='review-details'>Review your details</div>
                <div> DETAILS PLACEHOLDER</div>

                <button><NavLink className="NavLink" to='/buypolicy'>Payment page routing placeholder</NavLink></button>

            </div>
        <Footer/>
        </>
    )
}

export default ReviewPage;