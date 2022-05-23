import React from 'react';
import './ReviewPage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from './progressbar3.png';

const ReviewPage = () => {
    return (
        <>
        <NavBar/>
        <div className="review-page-container">
            <img src={ProgressBar} alt="progress bar" className='progress-bar'/>

        </div>
        <Footer/>
        </>
    )
}

export default ReviewPage;