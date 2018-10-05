import React, { Component } from 'react';
import CitiesAside from './CitiesAside'
import CitiesArticle from './CitiesArticle'


class Cities extends Component {
  render() {
    return (
        <section id="cityPage">
            <CitiesAside />
            <CitiesArticle />
        </section>
    );
  }
}

export default Cities;
