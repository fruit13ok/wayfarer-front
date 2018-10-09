import React, { Component } from 'react';

class CityHeader extends Component {
    render() {
        return (
            <div className="cityHeaderWrapper">
                <div className="cityHeaderText">
                    <h1>{this.props.currSelectedCityName}</h1>
                    {/* <h1>San Francisco</h1> */}
                    {/* <h3>California, USA</h3> */}
                </div>
                <div className="cityHeaderImage">
                    <img src={this.props.currSelectedCityImage} />
                </div>
            </div>
        );
    }
}

export default CityHeader;

