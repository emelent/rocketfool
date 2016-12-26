import React from 'react';

import SearchBox from '../components/SearchBox';

class Header extends React.Component{
  render(){
    return (
      <div>
        <h2>Header</h2>
        <SearchBox />
      </div>
    );
  }
}

export default Header;
