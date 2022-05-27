import React, {useState} from 'react';
import './ReviewPage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from '../../Images/progressbar2.png';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
// import { makeStyles } from '@material-ui/core/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valueLabelFormat(value) {
    const units = [''] ;

    let unitIndex = 0;
    let scaledValue = value

    while (scaledValue >= 700 && unitIndex < units.length -1) {
        unitIndex += 1;
        scaledValue =700;
    }

    return `${scaledValue} ${units[unitIndex]}`;

}
function calculateValue (value){
    return   value
}
  

const ReviewPage = () => {

    const [value, setValue] = useState(62.68)
    const [email, setEmail] = useState(false)
    const [fortnightly, setFortnightly] = useState(false)
    const [monthly, setMonthly] = useState(false)
    const [annually, setAnnually] = useState(false)
  

    
    const TogglecardOne = () => {
        setFortnightly(!fortnightly);

    }

    const TogglecardTwo = () => {

        setMonthly(!monthly);

    }
    const TogglecardThree = () => {

        setAnnually(!annually);
    }

    let toggleClassCheck = fortnightly ? 'active' : '';
    let toggleClassCheckmonthly = monthly ? 'active' : '';
    let toggleClassCheckAunnually = annually ? 'active' : '';


    const handleClick = () => {
        setEmail(!email)
    }

    const handleChange = (e,newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue)
        }
    };

  


    return (
        <>
        <NavBar/>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.5}}}
        exit={{opacity:0, transition:{duration:0.5}}}>
            <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
            <div className='review-page-container'>
                <div className='review-header'>Review your quote</div>
                <div className='header-subtext'> This is our broadest level of cover. You and any named drivers are covered by this policy</div>
                <div className='excess'> Basic excess: $400</div>
                <div className='excess-description'> This is what you pay when you need to make a claim</div>




                <div className='card-container'>
                    <div className='card-row'>
                        <div className={`card${toggleClassCheck}`}>
                            <div className='card-header'>Fortnightly plan</div>
                            <div className='plan-price'><span className="price-number">$28.93 </span> Fortnightly</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$20</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='disclaimer'>*Paying fortnightly is our most<br/>popular payment frequency</div>
                            <button onClick={TogglecardOne} className='selected-button'>Select</button>

                        </div>
                        <div className={`card${toggleClassCheckmonthly}`}>
                            <div className='our-best-plan'>Our best plan</div>
                            <div className='card-header-monthly'>Monthly plan</div>
                            <div className='plan-price'><span className="price-number">$62.68 </span> Monthly</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$40</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='disclaimer'>*Paying monthly is our flexi-plan.<br/>Click <span className='here-styled'>here</span> for more information</div>
                            <button  onClick={TogglecardTwo} className='selected-button'>Select</button>

                        </div>
                        <div className={`card${toggleClassCheckAunnually}`}>
                            <div className='card-header'>Annual plan</div>
                            <div className='plan-price'><span className="price-number">$700.40 </span> Annually</div>
                            <hr></hr>
                            <div className='card-content'>Includes <span className='color-price'>$60</span> online discount<br/>Save $25 if you insure another vehicle</div>
                            <div className='disclaimer'>*You save $45 per year if you<br/>choose to pay annually</div>
                            <button onClick={TogglecardThree} className='selected-button'>Select</button>

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
                {/* <div> DETAILS PLACEHOLDER</div> */}
{/* 
                <button><NavLink className="NavLink" to='/buypolicy'>Payment page routing placeholder</NavLink></button> */}

            </div>

            <div className="review-card-container">
                <div className="review-cards-detail">
                    <h1>
                        About the car:
                    </h1>
                    <div className="details-1">
                        <h3>Car registration number:</h3>
                        <h4 className='right-side-answers'>ABC123</h4>
                    </div>
                    <div className="details-1">
                        <h3>Year, make, model:</h3>
                        <h4 className='right-side-answers'>2012 Toyota Blade</h4>
                    </div>
                    <div className="details-1">
                        <h3>Address parked overnight:</h3>
                        <h4 className='right-side-answers'>54 Something Street, Aro Valley, Wellington</h4>
                    </div>
                    <div className="details-1">
                        <h3>Vehicle modifications:</h3>
                        <h4 className='right-side-answers'>No</h4>
                    </div>
                </div>
                <div className="review-cards-detail-2">
                    <h1>
                    About you:
                    </h1>
                    <div className="details-1">
                        <h3>Policies with Turners: </h3>
                        <h4>No</h4>
                    </div>
                    <div className="details-1">
                            <h3>Name:</h3>
                            <h4>Fred Daggs</h4>
                    </div>
                    <div className="details-1">
                            <h3>Date of birth: </h3>
                            <h4>13 August 1981</h4>
                    </div>
                    <div className="details-1">
                            <h3>Gender:</h3>
                            <h4>Male</h4>
                    </div>
                    <div className="details-1">
                            <h3>Licence held:</h3>
                            <h4>NZ Full</h4>
                    </div>
                    <div className="details-1">
                            <h3>Years of driving experience:</h3>
                            <h4>23</h4>
                    </div>
                    <div className="details-1">
                            <h3>Postal address:</h3>
                            <h4>54 Something Street, Aro Valley, Wellington 6011</h4>
                    </div>
                </div>
                <div className="excess-container">
                    <div className="excess-header">
                        <h1>
                            Excess:
                        </h1>
                        <h3>Click and drag the red tab to change your excess - see how it affects your monthly premium</h3>
                    </div>
                    <div className="slider-container">
                    <div className='slider'>
                        <Box width={700}>
                        <Slider
                        sx={{
                            color:'#B71234',
                            '& .MuiSlider-thumb ': {
                                borderRadius: '24px',
                                width: '30px',
                                height: '92px',
                            },
                            '& .MuiSlider-rail ': {
                                height: '22px',
                                color: '#fff'
                            },
                            '& .MuiSlider-track ': {
                                height: '22px'
                            }
                        }}
                        min={28}
                        step={1}
                        max={700.4}
                        value={value}
                        scale={calculateValue}
                         defaultValue={62.68} 
                         aria-label="" 
                         onChange={handleChange}
                         valueLabelDisplay="on"
                         color='secondary' 
                         size='small' 

                         />
                         </Box>
                    
                    </div>
                    <div className="current-monthly">
                        <h3>Currently monthly premium:</h3>
                    </div>
                    <div className="currently-ouput">$
                            {
                                valueLabelFormat(calculateValue(value))
                            }
                    </div>
                    </div>
                </div>
            </div>
            <div className="review-button-container">
                <div className="need-to-think-about-it"> Need time to think about it?</div>
            <div className="review-button">
                <button className='go-back-to-edit-btn'><b><NavLink className="NavLink" to='/existingdetailspage'>Go back edit details</NavLink></b></button>
                <button onClick={handleClick} className='email-my-quote'><b>Email my quote</b></button>
                <button className='go-to-payment'><b><NavLink className="NavLink" to='/buypolicy'>Go to payment</NavLink></b></button>

                {
                    email && ( 
                        <div className="email-dropdown-container">
                                <div className="email-card">
                                    <div className="need-time">
                                        <div className='email-header'>Need time to think it over?</div>
                                        <p className='enter-email'>Enter your email address and we'll send <br /> you the quote details.</p>
                                        <input type="text" className='email-input' placeholder='e.g fred.daggs@example.com' />
                                        <div>View our <span className='privacy-blue'>privacy policy</span></div>
                                    </div>
                                    <div className="button-container-email">
                                        <button className='send'>Send</button>
                                        <button className='cancel'>Cancel</button>
                                    </div>
                                </div>
                        </div>
                     )
                 } 

            </div>
        </div>
        </motion.div>
        <Footer/>
        </>
    )
}

export default ReviewPage;