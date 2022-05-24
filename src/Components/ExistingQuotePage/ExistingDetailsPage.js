import React from 'react';
import './ExistingDetailsPage.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProgressBar from '../../Images/progressbar1.png';
import { Icon } from '@iconify/react'

const ExistingDetailsPage = () => {
    return (
        <>
        <NavBar/>
        <img src={ProgressBar} alt="progress bar" className='progress-bar'/>
        <div className='existing-details-page-container'>
                <div className='existing-details-header'>Existing quote - Comprehensive</div>
        </div>
        <div className="ex-quote-box">
            <p className='ex-steps'>
                STEP 1 <br/> Car details 
            </p>
            <div className="ex-card">
                <p className='ex-card-title'>
                    Car details 
                </p>
                <p className='ex-card-please'>
                    Please enter the following details for the vehicle to be insured:
                </p> 
                <form action="">
                <label htmlFor="date" className='ex-date'>Policy start date:</label>
                <select className='ex-selection'>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="" selected>18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                </select>
                <select className='ex-selection'>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September" selected>September</option>
                    <option value="October">October</option>
                    <option value=" November"> November</option>
                    <option value="December">December</option>
                </select>
                <select className='ex-selection'>
                    <option value="year">2013</option>
                    <option value="year">2014</option>
                    <option value="year">2015</option>
                    <option value="year">2016</option>
                    <option value="year">2017</option>
                    <option value="year">2018</option>
                    <option value="year">2019</option>
                    <option value="year">2020</option>
                    <option value="year">2021</option>
                    <option value="year">2022</option>
                    <option value="year">2023</option>
                </select>
                <br />
                <label htmlFor="date" className='ex-date'>Car registration number:</label>
                <Icon icon="bi:question-circle" color="white" width={25} />
                <input className='ex-input' type='text' placeholder='ABC123'/>
                <br />
                <select className='ex-selection'>
                    <option value="year">2013</option>
                    <option value="year">2014</option>
                    <option value="year">2015</option>
                    <option value="year">2016</option>
                    <option value="year">2017</option>
                    <option value="year">2018</option>
                    <option value="year">2019</option>
                    <option value="year">2020</option>
                    <option value="year">2021</option>
                    <option value="year">2022</option>
                    <option value="year">2023</option>
                </select>
                <select className='ex-selection'>
                    <option value="car">Audi</option>
                    <option value="car">Alfa Romeo</option>
                    <option value="car">Austin</option>
                    <option value="car">BMW</option>
                    <option value="car">Brabham</option>
                    <option value="car">BUGATTI</option>
                    <option value="car">Chevrolet</option>
                    <option value="car">Chrysler</option>
                    <option value="car">Chrysler</option>
                    <option value="car">Dodge</option>
                    <option value="car">Daimler</option>
                    <option value="car">Daewoo</option>
                    <option value="car">Eunos</option>
                    <option value="car">EV Automotive</option>
                    <option value="car">Ford</option>
                    <option value="car">Ferrari</option>
                    <option value="car">Fiat</option>
                    <option value="car">Genesis</option>
                    <option value="car">GMC</option>
                    <option value="car">Goggomobil</option>
                    <option value="car">Holden</option>
                    <option value="car">Honda</option>
                    <option value="car">Hyundai</option>
                    <option value="car">Isuzu</option>
                    <option value="car">Iveco</option>
                    <option value="car">Iso</option>
                    <option value="car">Jeep</option>
                    <option value="car">Jaguar</option>
                    <option value="car">Jensen</option>
                    <option value="car">Kia</option>
                    <option value="car">Koenigsegg</option>
                    <option value="car">KTM</option>
                    <option value="car">Land Rover</option>
                    <option value="car">Lexus</option>
                    <option value="car">Lotus</option>
                    <option value="car">Mazda</option>
                    <option value="car">Mercedes-Benz</option>
                    <option value="car">Mitsubishi</option>
                    <option value="car">Nissan</option>
                    <option value="car">OKA</option>
                    <option value="car">Opel</option>
                    <option value="car">Porsche</option>
                    <option value="car">Peugeot</option>
                    <option value="car">Ram</option>
                    <option value="car">Rolls-Royce</option>
                    <option value="car">Saab</option>
                    <option value="car">Suzuki</option>
                    <option value="car">Subaru</option>
                    <option value="car">Skoda</option>
                    <option value="car">Ssangyong</option>
                    <option value="car">Tesla</option>
                    <option value="car">Toyota</option>
                    <option value="car">Triumph</option>
                    <option value="car">Vespa</option>
                    <option value="car">Volkswagen</option>
                    <option value="car">Volvo</option>
                    <option value="car">Zeta</option>
                </select>
                <input className='ex-input-3' type='text' placeholder='Blade'/>
                <br />
                <div className='ex-bottom'>
                    <label htmlFor="date" className='ex-date-bottom'>Address parked at overnight:</label>
                    <Icon icon="bi:question-circle" color="white" width={25} />
                    <br />
                    <input className='ex-input-2' type='text' placeholder='54 Something Street, Wellington'/>
                </div>
                <div className='ex-date-bottom-container'>
                <label htmlFor="date" className='ex-date-bottom'>Any modifications to your vechicle:</label>
                    <Icon icon="bi:question-circle" color="white" width={25} />
                    <input type="radio" name='answer' className='bottom-answer' />
                    <label htmlFor="" className='bottom-answer-yes'>Yes</label>
                    <input type="radio" name='answer' className='bottom-answer-2'/>
                    <label htmlFor="" className='bottom-answer-yes'>No</label>
                </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ExistingDetailsPage;
