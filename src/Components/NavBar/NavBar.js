import React, { useState } from 'react'
import './NavBar.css'
import Logo from "../../Images/turnerscars_logo.png"
import { Icon } from '@iconify/react';

const NavBar = () => {

    const [isActive, setIsActive] = useState(false)



  return (
    <>
        <div className="navbar-container">
            
            <div className="navbar-selection">
                <img className='logo-img' src={Logo} alt="logo" />
                <h3>
                    Auctions
                </h3>
                <h3>
                    Buy a car
                </h3>
                <h3>
                    Sell your car
                </h3>
                <h3 onClick={(e) => setIsActive(!isActive)}>
                    Insurance 
                    <div className='navbar-dropdown-list'>
                {
                    isActive && (
                        <div className="insurance-list">
                            <h3>New quote & our policies</h3>
                            <h3>Existing qoute</h3>
                            <h3>Mechanical Breackdown Insurance</h3>
                            <h3>Make a claim</h3>
                        </div>
                    )
                }
        </div>
                </h3>
                <h3>
                    Finance
                </h3>
                <h3 className='faQs'>
                    FAQs 
                    <Icon className='down-arrow-icon' icon="ep:arrow-down" />
                </h3>
                <form action="" className='form-search-container'>
                    <input className='navbar-search-input' type="text"/>
                    <Icon icon="ep:search" className='navbar-search-icon'  />
                </form>
                <div className="language-icon">
                    <Icon icon="ooui:language" width={30} height={30} />
                </div>
                <div className='navbar-buttons'>
                    <button className='navbar-login-button'><b>Login</b></button>
                    <button className='navbar-signup-button'>Sign up</button>
                </div>
            </div>
        </div>
        {/* <div className='navbar-dropdown-list'>
        {
                    isActive && (
                        <div className="insurance-list">
                            <h3>New quote & our policies</h3>
                            <h3>Existing qoute</h3>
                            <h3>Mechanical Breackdown Insurance</h3>
                            <h3>Make a claim</h3>
                        </div>
                    )
                }
        </div> */}
    </>
  )
}

export default NavBar