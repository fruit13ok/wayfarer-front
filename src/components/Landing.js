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
                <article>
                    <h2> Section 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima autem quaerat dicta fugit quae vitae voluptatum voluptates minus sed eum laudantium soluta non labore voluptas perspiciatis, illo architecto qui.
                    </p>
                </article>
                <article>
                    <h2> Section 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor magni molestiae ut perferendis consequuntur explicabo minus, ullam quasi, veritatis, placeat vel officia dignissimos quam sed aperiam dolores est commodi?
                    </p>
                </article>
                <article>
                    <h2> Section 3</h2>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint blanditiis unde nihil perspiciatis ullam. Quisquam mollitia blanditiis, non voluptates fugit eos provident dolorum ex earum velit voluptate sunt magni?
                    </p>
                </article>
            </div>
        </section>
    );
}
}


export default Landing;
