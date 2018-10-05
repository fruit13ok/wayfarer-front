import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';


class  LandingCarousel extends Component {
render() {
    return (
        <Carousel 
        //react-responsive-carousel props:
        autoPlay
        useKeyboardArrows
        infiniteLoop
        showThumbs={false} >
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1199px-Cat03.jpg" />
                <p className="legend">Can't get the pics to show up yet :(</p>
            </div>
            <div>
                <img src="../images/02.jpg" />
            </div>
            <div>
                <img src="../images/03.jpg" />
            </div>
            <div>
                <img src="../images/04.jpg" />
            </div>
            <div>
                <img src="../images/05.jpg" />
            </div>
            <div>
                <img src="../images/06.jpg" />
            </div>
            <div>
                <img src="../images/07.jpg" />
            </div>
            <div>
                <img src="../images/08.jpg" />
            </div>
            <div>
                <img src="../images/09.jpg" />
            </div>
        </Carousel>
    );
}

}

export default LandingCarousel;
