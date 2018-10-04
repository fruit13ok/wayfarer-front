import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
        <p> made by Yi Liu, 
            Natalie Poulson, 
            Andrea Piazza, and 
            Sofia Aguirre (c) 2018</p>
        <nav id="footer-nav">
            <ul>
                <li><a href=""> Readme.md on GitHub </a></li>
                <li><a href=""> Facebook </a></li>
                <li><a href=""> Instagram </a></li>
            </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;

