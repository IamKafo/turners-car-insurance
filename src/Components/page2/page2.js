import React from "react";
import "./page2.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";

const Page2 = () => {
    return(
        <>
        <NavBar></NavBar>
        <div className="page2content">

            <header> Car Insurance </header>
            <div className="policy-container">
                <div className="policy-text">
                <span className="turnersblue">Turners</span> has you covered. <br/>
                See what each of our three vehicle policies offer:
                <button>Existing Quote?</button>
                </div>
            </div>  


            <div className="comparison-table-container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="info-cell comprehensive-insurance" data-tooltip="Comprehensive coverage helps cover the cost of damages to your vehicle when you're involved in an accident that's not caused by a collision.">Comprehensive   <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon> <br/><span className="comprehensive-subtext">Our best policy</span></th>
                            <th className="info-cell third-fire-theft" data-tooltip2="Third party, fire and theft insurance covers you for any damage caused to a third party or their property if you are involved in an incident, while also covering your own car if it's damaged by fire or stolen.">Third party,<br/> fire and theft   <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon></th>
                            <th className="info-cell third-party" data-tooltip3="Third party car insurance covers your legal liability if you damage someone else's property or accidentally injure someone when you're driving your car or another vehicle.">Third party   <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="description-cell">Windscreen cover</td>
                            <td className="green-tick best-policy" ><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="red-cross"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></td>
                            <td className="red-cross"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></td>
                        </tr>
                        <tr>
                            <td className="description-cell">Roadside assistance</td>
                            <td className="green-tick best-policy2"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="red-cross"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></td>
                            <td className="red-cross"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></td>
                        </tr>
                        <tr>
                            <td className="description-cell">$1,000,000 for liability</td>
                            <td className="green-tick best-policy3"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="green-tick"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="red-cross"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></td>
                        </tr>
                        <tr>
                            <td className="description-cell">Up to $400 for key replacement</td>
                            <td className="green-tick best-policy4"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="green-tick"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="green-tick"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                        </tr>
                        <tr>
                            <td className="description-cell">Fire damage</td>
                            <td className="green-tick best-policy5"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="green-tick"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="red-cross"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></td>
                        </tr>
                        <tr>
                            <td className="description-cell">Protection from uninsured drivers</td>
                            <td className="green-tick best-policy6"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="green-tick"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                            <td className="green-tick"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="best-policy7"><button className="get-quote">Get a quote</button></td>
                            <td><button className="get-quote">Get a quote</button></td>
                            <td ><button className="get-quote">Get a quote</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Page2;