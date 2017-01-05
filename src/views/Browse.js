import React from 'react';
import Radium, {StyleRoot} from 'radium';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NavBar from '../components/NewNavBar';
import CardGrid from '../layouts/CardGrid';
import Button from '../components/CustomButton';


const tabItems = ['All', 'Verified', 'Following'];
const dropDownItems = ['All', 'Some', 'Green Ones', 'Blue Ones'];
const menuItems = ['Home','Browse', 'Help', 'About', '', 'Login', 'Sign Up'];


const styles = {
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
  }, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Browse extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <StyleRoot>
          <NavBar />
        </StyleRoot>
      </div>
    );
  }
}

export default Browse;
