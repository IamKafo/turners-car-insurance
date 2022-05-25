import React, { Children, useState } from 'react';
import classes from './SimpleCarousel.module.css'
import { NavLink } from 'react-router-dom';

const widthSpan = 100.1

function SimpleCarousel(props) {
    const [sliderPosition, setSliderPosition] = useState(0);
    const { children, infinite } = props;
    const [showQoute, setShowQoute] = useState(false)

    const prevSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        } else if (infinite) {
            newPosition = children.length - 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const nextSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition < children.length - 1) {
            newPosition = newPosition + 1;
        } else if (infinite) {
            newPosition = 0;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const jumpToSlideHandler = (id) => {
        translateFullSlides(id);
        setSliderPosition(id)
    }

    const prevClickHandler = () => {
        prevSlideHandler();
    }

    const nextClickHandler = () => {
        nextSlideHandler();
    }


    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (var i = 0; i < children.length; i++) {
            let elem = document.getElementById(`carouselitem` + i);
            elem.style.transform = `translateX(` + toTranslate + `%)`;
        }
    }

    const displayItems = Children.map(children, (child, index) => (
        <div className={classes.CarouselItem} id={`carouselitem` + index}>{child}</div>
    ));

    const positionIndicators = Children.map(children, (child, index) => (
        <div
            className={sliderPosition === index
                ? classes.PositionIndicator.concat(' ' + classes.CurrentPosition)
                : classes.PositionIndicator}
            onClick={() => jumpToSlideHandler(index)}
        >
        </div>
    ))

    

    return (
        <div className={classes.HomepageContainer}>
            <div className={classes.Container}>
                <div className={classes.LeftArrow} onClick={prevClickHandler}>❰</div>
                <div className={classes.carouseldisplayframe}>
                    {displayItems}
                    </div>
                    <div className={classes.ButtonWrapper}>
                            <div className={classes.QouteButton}><NavLink className={classes.NavLink} to='/choosepolicy'><b>Get a quote</b></NavLink></div>
                            <div className={classes.ExistingQouteButton} onClick={(e) => setShowQoute(!showQoute)}><b>Existing quote?</b></div>
                            <div className={classes.DropDownQoute} ></div>
                        <h3 className={classes.OurPolicies}>Compare our policies</h3>
                    </div>
                <div className={classes.RightArrow} onClick={nextClickHandler}>❱</div>
            </div>
            <div className={classes.Navigation}>
                <div className={classes.DropDownQoute} >
                </div>
                {positionIndicators}
            </div>
            {
                showQoute && (
                                <div className={classes.DropDownMenu} >
                                    <h3>Your family name</h3>
                                    <input type="text" name="name" placeholder='Enter your name here' />
                                    <h3>Your quote number</h3>
                                    <input type="text" name="name" placeholder='Enter your quote number' />
                                    <p>I can't remember my quote number</p>
                                    <button className={classes.MyQouteButton}><NavLink className="NavLink" to='/existingdetailspage'>My quote</NavLink></button>
                                </div>
                            )
            }
        </div>
    )
}

export default SimpleCarousel;