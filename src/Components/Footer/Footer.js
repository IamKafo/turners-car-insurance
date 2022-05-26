import React from "react";
import "./Footer.css";
import Logo from "./turnerslogofooter.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="row">
                <div className="col">
                    <NavLink className="NavLink" to='/'><img src={Logo} alt="logo" className="logo"/> </NavLink>
                    <p>Copyright © 2022 Turners </p>
                    <p className="p2">All rights reserved</p>
                    <div className="socialmedia">
                        <i className="sociallogo"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i>
                        <i></i>
                        <i className="sociallogo"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i>
                        <i></i>
                        <i className="sociallogo"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></i>
                        <i></i>
                        <i className="sociallogo"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></i>
                    </div>
                </div>
                <div className="col">
                    <ul>
                        <li className="company">Company</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Testimonials</li>

                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>Legal policy</li>
                        <li>Status policy</li>
                        <li>Privacy policy</li>
                        <li>Terms of service</li>

                    </ul>
                </div>
                <div className="col">
                    <h3> Get Updates</h3>
                    <form className="form">
                        <i><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                        <input type="email" placeholder="Enter your email" required></input>
                        <button type="submit"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;