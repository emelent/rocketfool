import React from 'react';

import SearchBox from '../components/SearchBox';
import TabBar from '../components/TabBar';


const tabItems = ['All', 'Some', 'Green Ones', 'Blue Ones'];

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.__onTabItemClick = this.__onTabItemClick.bind(this);
  }

  __onTabItemClick(i){
    this.setState({activeIndex: i});
    console.log('active => ', i);
  }

  render(){
    return (
      <div>
        <h2>Header</h2>
        <SearchBox />
        <TabBar items={tabItems} 
          activeIndex={this.state.activeIndex}
          onItemClick={this.__onTabItemClick}
        />
      </div>
    );
  }
}

export default Header;
