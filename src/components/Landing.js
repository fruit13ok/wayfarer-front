import React, { Component } from 'react';
import LandingCarousel from './LandingCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class  Landing extends Component {
    render() {
        return (
            <section id="landingPage">
                <div id="carousel-container">
                    <LandingCarousel />
                </div>
                <h1>Wayfarer Twilight is...</h1>
                <div id="section-container">
                    <div>
                        <h2> Section 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa minima autem quaerat dicta fugit quae vitae voluptatum 
                        voluptates minus sed eum laudantium soluta non labore voluptas 
                        perspiciatis, illo architecto qui.</p>
                    </div>
                    <div>
                        <h2> Section 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa minima autem quaerat dicta fugit quae vitae voluptatum 
                        voluptates minus sed eum laudantium soluta non labore voluptas 
                        perspiciatis, illo architecto qui.</p>
                    </div>
                    <div>
                        <h2> Section 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa minima autem quaerat dicta fugit quae vitae voluptatum 
                        voluptates minus sed eum laudantium soluta non labore voluptas 
                        perspiciatis, illo architecto qui.</p>
                    </div>
                </div>
            </section>
        );
    }
}


export default Landing;
