import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import SimpleCarousel from '../Carousel/SimpleCarousel'
import img1 from '../../Images/Carousel - Need insurance.png'
import img2 from '../../Images/Check out our auctions (1).png'
import img3 from '../../Images/Check out our auctions.png'
import './HomePage.css'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const HomePage = () => {

// const [isActive, setIsActive] = useState(false)
const [showQoute1, setShowQoute1] = useState(false)
const [showQoute2, setShowQoute2] = useState(false)
const [showQoute3, setShowQoute3] = useState(false)
const [showQoute4, setShowQoute4] = useState(false)
const [showQoute5, setShowQoute5] = useState(false)



  return (
    <>
        <NavBar/>
        <div className="homepage-container">
            <SimpleCarousel>
                <img src={img1} alt="cars"  />
                <img src={img2} alt="cars"  />
                <img src={img3} alt="cars"  />
            </SimpleCarousel>
            
            <div className="title-phrase">
                <h1>Why Turners? We offer more than a great bargain.</h1>
            </div>
            <div className="homepage-content">
                <div className="homepage-cards-containers">
                    <div className="homepage-cards1"></div>
                    <div className="homepage-cards-title">
                        <h3><u>Turners has over <br/> 3,000 cars for sale</u></h3>
                    </div>
                 </div>
                <div className="homepage-cards-containers">
                        <div className="homepage-cards2"></div>
                        <div className="homepage-cards-title">
                            <h3><u>We are NZ's most trusted <br/> used car dealer</u></h3>
                        </div>
                </div>
                <div className="homepage-cards-containers">
                        <div className="homepage-cards3"></div>
                        <div className="homepage-cards-title">
                            <h3><u>Subscribe a weekly<br/> car for less than $135</u></h3>
                        </div>
                </div>
            </div>
            <div className="faqs-homepage-container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute1(!showQoute1)}>
                    <h4>What are your different types of policies?
                       <span> {showQoute1=== true ? <Icon icon="akar-icons:minus" color="#c4c4c4" />:<Icon className='faq-plus-icon'icon="typcn:plus" />}</span>
                    </h4>
                    
    
                    {
                        showQoute1 && (
                            <div className="faq-dropdown-answers">
                                <p>At Turners Cars, we offer three types of policies: Comprehensive, Third Party Fire and Theft, and Third Party</p>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute2(!showQoute2)}>
                    <h4>Do you offer discount for multiple vehicle policies?
                       <span> {showQoute2=== true ? <Icon icon="akar-icons:minus" color="#c4c4c4" />:<Icon className='faq-plus-icon'icon="typcn:plus" />}</span>
                    </h4>
                    
    
                    {
                        showQoute2 && (
                            <div className="faq-dropdown-answers">
                                <p>Yes we do! Enter your vehicle details and see what you qualify for <u>here.</u> </p>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute3(!showQoute3)}>
                    <h4>How do I get a quote? 
                        <span>{showQoute3=== true ? <Icon icon="akar-icons:minus" color="#c4c4c4" />:<Icon className='faq-plus-icon'icon="typcn:plus" />}</span>
                    </h4>
                    
    
                    {
                        showQoute3 && (
                            <div className="faq-dropdown-answers">
                                <p>You can get a quote on our website's home page: click on "Get a quote" or click <u>here</u> to get started. </p>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute4(!showQoute4)}>
                    <h4>How is my quote calculated?
                       <span> {showQoute4=== true ? <Icon icon="akar-icons:minus" color="#c4c4c4" />:<Icon className='faq-plus-icon'icon="typcn:plus" />}</span>
                    </h4>
                    
    
                    {
                        showQoute4 && (
                            <div className="faq-dropdown-answers">
                                <p>Your quote is calculated from criteria such as: the make and model of your car and the type of license you hold.</p>
                            </div>
                        )
                    }
                
                </div>
                <div className="faq-questions" onClick={(e) => setShowQoute5(!showQoute5)}>
                    <h4>What types of payment do you accept?
                       <span> {showQoute5=== true ? <Icon icon="akar-icons:minus" color="#c4c4c4" />:<Icon className='faq-plus-icon'icon="typcn:plus" />}</span>
                    </h4>
                    
    
                    {
                        showQoute5 && (
                            <div className="faq-dropdown-answers">
                                <p>We accept all payments by direct debit, or by credit card and debit card.</p>
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