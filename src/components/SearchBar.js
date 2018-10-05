import React, { Component } from 'react';

class SearchBar extends Component {
 render() {
   return (
       <form>
           {/* If logged in, show search bar */}
           <input type="search" placeholder="Search Cities"/>
           <button onClick="">GO!</button>
       </form>
   );
 }
}

export default SearchBar;
