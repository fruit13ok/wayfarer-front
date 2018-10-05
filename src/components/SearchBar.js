import React, { Component } from 'react';

class SearchBar extends Component {
 render() {
    var isLoggedIn = true;
    var myForm;
    // If logged in, show search bar
    if (isLoggedIn) {
        myForm = (
            <form id='myForm'>
                
                <input type="search" placeholder="Search Cities"/>
                <button onClick="">GO!</button>
            </form>
        )
    } else {
        myForm = (<p></p>)
    }
   return (
       <div>
        {myForm}
       </div>
   );
 }
}

export default SearchBar;
