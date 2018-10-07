import React, { Component } from 'react';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';

import { Carousel } from 'react-responsive-carousel';


class  LandingCarousel extends Component {
render() {
    return (
        <Carousel 
        //react-responsive-carousel props:
        autoPlay
        useKeyboardArrows
        infiniteLoop
        showStatus={false}
        showThumbs={false} >
            <div>
                <img src={carousel2} />
            </div>
            <div>
                <img src={carousel3}/>
            </div>
            <div>
                <img src={carousel1} />
            </div>
        </Carousel>
    );
}

}

export default LandingCarousel;
