import React from 'react';
import './NewQuotePage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from './progressbar1.png';

const NewQuotePage = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <div className='new-quote-page-container'>
                <div className='new-quote-header'>New quote - Comprehensive</div>
        </div>
        <Footer/>
        </>
    )
}

export default NewQuotePage;
