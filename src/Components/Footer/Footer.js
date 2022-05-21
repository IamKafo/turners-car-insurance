import React from "react";
import "./Footer.css";
import Logo from "./turnerslogofooter.png"

const Footer = () => {
    return(
        <>
        <footer>
            <div className="row">
                <div className="col">
                    <img src={Logo} alt="logo" className="logo"/>
                    <p>TJFINDASOIJFSDBZFIOJBSNDFOPIZSDNFPOIZJSDNF</p>
                </div>
                <div className="col">
                    <h3>TITLE</h3>
                    <ul>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>TITLE</h3>
                    <ul>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                        <li><a href="">TEXT</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3> Get Updates</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" required></input>
                    </form>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;