import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import SimpleCarousel from '../Carousel/SimpleCarousel'
import img1 from '../../Images/MicrosoftTeams-image.png'
import img2 from '../../Images/MicrosoftTeams-image (1).png'
import img3 from '../../Images/MicrosoftTeams-image (2).png'
import './HomePage.css'
import Footer from '../Footer/Footer';

const HomePage = () => {

// const [isActive, setIsActive] = useState(false)
const [showQoute1, setShowQoute1] = useState(false)
const [showQoute2, setShowQoute2] = useState(false)
const [showQoute3, setShowQoute3] = useState(false)
const [showQoute4, setShowQoute4] = useState(false)
const [showQoute5, setShowQoute5] = useState(false)



  return (
    <>
        <div className="homepage-container">
            <SimpleCarousel>
                <img src={img1} alt="cars"  />
                <img src={img2} alt="cars" />
                <img src={img3} alt="cars" />
            </SimpleCarousel>
            
            <div className="title-phrase">
                <h1>Why Tuners? We offer more than a great bargin.</h1>
            </div>
            <div className="homepage-content">
                <div className="homepage-cards-containers">
                    <div className="homepage-cards1"></div>
                    <div className="homepage-cards-title">
                        <h3>Turners has over <br/> 3,000 cars for sale</h3>
                    </div>
                 </div>
                <div className="homepage-cards-containers">
                        <div className="homepage-cards2"></div>
                        <div className="homepage-cards-title">
                            <h3>We are NZ's most trusted <br/> used car dealer</h3>
                        </div>
                </div>
                <div className="homepage-cards-containers">
                        <div className="homepage-cards3"></div>
                        <div className="homepage-cards-title">
                            <h3>Subscribe a weekly<br/> car for less than $135</h3>
                        </div>
                </div>
            </div>
            <div className="faqs-homepage-container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute1(!showQoute1)}>
                    <p>What are your different types of policies?
                        <Icon className='faq-plus-icon'icon="typcn:plus" />
                    </p>
                    
    
                    {
                        showQoute1 && (
                            <div className="faq-dropdown-answers">
                                <h4>At Turners Cars, we offer three types of policies: Comprehensive, Third Party Fire and Theft, and Third Party</h4>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute2(!showQoute2)}>
                    <p>Do you offer discount for multiple vehicle policies?
                        <Icon className='faq-plus-icon'icon="typcn:plus" />
                    </p>
                    
    
                    {
                        showQoute2 && (
                            <div className="faq-dropdown-answers">
                                <h4>Yes we do! Enter your vehicle details and see what you qualify for <u>here</u>. </h4>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute3(!showQoute3)}>
                    <p>Hoe do I get a quote? 
                        <Icon className='faq-plus-icon'icon="typcn:plus" />
                    </p>
                    
    
                    {
                        showQoute3 && (
                            <div className="faq-dropdown-answers">
                                <h4>You can get a quote on our website's home page: click on "Get a quote" or click <u>here</u> to get started </h4>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute4(!showQoute4)}>
                    <p>How is my quote calculated?
                        <Icon className='faq-plus-icon'icon="typcn:plus" />
                    </p>
                    
    
                    {
                        showQoute4 && (
                            <div className="faq-dropdown-answers">
                                <h4>Your quote is calculated from criteria such as: the make and model of your car and the type of license you hold.</h4>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute5(!showQoute5)}>
                    <p>What types of payment do you accept?
                        <Icon className='faq-plus-icon'icon="typcn:plus"  />
                    </p>
                    
    
                    {
                        showQoute5 && (
                            <div className="faq-dropdown-answers">
                                <h4>We accept all payments by direct debit, or by credit card and debit card.</h4>
                            </div>
                        )
                    }
                
                </div>
               
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default HomePage