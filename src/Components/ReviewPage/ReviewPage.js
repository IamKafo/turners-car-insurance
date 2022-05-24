import React from 'react';
import './ReviewPage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from './progressbar2.png';

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


                <div>CARDS PLACEHOLDER</div>
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

            </div>
        <Footer/>
        </>
    )
}

export default ReviewPage;