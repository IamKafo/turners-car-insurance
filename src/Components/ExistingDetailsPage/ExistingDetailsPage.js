import React from 'react';
import './ExistingDetailsPage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from './progressbar1.png';

const ExistingDetailsPage = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <div className='existing-details-page-container'>
                <div className='existing-details-header'>New quote - Comprehensive</div>
        </div>
        <Footer/>
        </>
    )
}

export default ExistingDetailsPage;
