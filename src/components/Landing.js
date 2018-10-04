import React, { Component } from 'react';
import Carousel from './Carousel'

class  Landing extends Component {

constructor (props) {
    super(props);

    this.state = {
        scrollStepDistance: 3,
        visibleIndex: 0
    };
    }

    handleScrollToIndex = (index) => {
    this.setState({
        visibleIndex: index
    });
    }

render() {
    const data = new Array(15).fill(null);

    const items = data.map((velue, index) => {
        return <div
            key={String(index)}
            style={{
            border: '1px solid #00f',
            boxSizing: 'border-box',
            display: 'block',
            flexGrow: 1,
            fontSize: '32px',
            height: '100px',
            lineHeight: '100px',
            textAlign: 'center'
        }}>{index}</div>;
    });

    return (
        <section id="landingPage">
            <div id="carousel-container">
            <Carousel
            controlWidth={25}
            firstVisibleIndex={this.state.visibleIndex}
            itemMargin={10}
            itemWidth={50}
            onItemScroll={this.handleScrollToIndex}
            scrollStepDistance={this.state.scrollStepDistance}
            style={{
            background: '#eee',
            height: 100,
            maxWidth: 1000
            }}
        >
            {items}
        </Carousel>
                <p>CAROUSEL GOES HERE. SAMPLE IMAGE:</p>
                <img src="" alt="sample image"/>
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
