import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NavBar from '../components/Navbar';
import CardGrid from '../layouts/CardGrid';
import Button from '../components/CustomButton';


const dropDownItems = ['All', 'Some', 'Green Ones', 'Blue Ones'];
const menuItems = ['Home','Browse', 'Help', 'About', '', 'Login', 'Sign Up'];


const styles = {
  navBar: {
    background: '#fff',
  },
  title:{
    marginTop: '100px',
    fontSize: '1.5em',
    padding: '15px',
  },
  cardGrid: {
  },
  moreBtn: {
    float: 'right',
    margin: '10px',
  }
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
class Browse extends React.Component{

  constructor(props){
    super(props);
    
    this.__onCardClick = this.__onCardClick.bind(this);
    this.__onCardActionClick = this.__onCardActionClick.bind(this);
  }

  __onCardClick(i){
    console.log(`Card ${i} clicked`);
  }

  __onCardActionClick(i){
    console.log(`Card ${i} action clicked`);
  }

  getCardData(){
    let cards = [];
    for(let i=0; i < 20; i++){
      cards.push({
        title: 'Title',
        description: 'Description',
        bgUrl: '/assets/images/header-bg.jpg',
        bgColor: '#fff',
      });
    }
    return cards;
  }

  render(){
    const {user} = this.props;

    return (
      <div>
        <NavBar style={styles.navBar}
          menuItems={menuItems} 
          dropDownItems={dropDownItems}
        />
        <div style={styles.title}>Most Popular</div>
        <CardGrid style={styles.cardGrid}
          onCardClick={this.__onCardClick}
          onCardActionClick={this.__onCardActionClick}
          cardData={this.getCardData()}
        />
        <Button style={styles.moreBtn}
          bgColor="#FDD835"
        >
          Show More
        </Button>
      </div>
    );
  }
}

export default Browse;
