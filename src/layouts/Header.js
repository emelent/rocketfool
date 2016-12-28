import React from 'react';

//import TabSearch from '../components/TabSearch';
import DropDownSearch from '../components/DropDownSearch';


const dropDownItems = ['All', 'Some', 'Green Ones', 'Blue Ones'];

const styles = {
  container:{
    background: 'url("/assets/images/header-bg.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: '#fff',
  },

  searchBox:{
    margin: 'auto',
  }
};

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

  __onSearchSubmit(text){
    alert(`You search '${text}'`);
  }

  render(){
    return (
      <div style={styles.container}>
        <div>Header</div>
        <div style={{textAlign: 'center'}}>
          <DropDownSearch style={styles.searchBox}
            items={dropDownItems}
            onSearchSubmit={this.__onSearchSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Header;
