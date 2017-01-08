import React from 'react';
import Radium, {StyleRoot} from 'radium';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NavBar from '../components/NewNavBar';
import CardGrid from '../layouts/CardGrid';
import SlideMenu from '../components/SlideMenu';
import Button from '../components/CustomButton';


const tabItems = ['All', 'Verified', 'Following'];
const filterItems= ['Accomodation', 'Catering', 'Entertainment', 'Transport',
  'Travel', 'Weddings'
];
const dropDownItems = ['All', 'Some', 'Green Ones', 'Blue Ones'];
const menuItems = ['Home','Browse', 'Help', 'About', '', 'Login', 'Sign Up'];


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

    this.state = {
      menuActve: false,
      activeFilters: [],
    };
    this.__onMenuBtnClick = this.__onMenuBtnClick.bind(this);
    this.__onSearchSubmit = this.__onSearchSubmit.bind(this);
    this.__onFilterItemClick = this.__onFilterItemClick.bind(this);
    this.__onFilterApply = this.__onFilterApply.bind(this);
    this.__onFilterClear = this.__onFilterClear.bind(this);
  }

  __onFilterApply(){
  }

  __onFilterClear(){
    this.setState({activeFilters: []});
  }

  __onFilterItemClick(i){
    let {activeFilters} = this.state;
    let index = activeFilters.indexOf(filterItems[i]);
    if(index < 0){
      activeFilters.push(filterItems[i]);
    }else{
      activeFilters.splice(index, 1);
    }
    this.setState({activeFilters});
  }

  __onSearchSubmit(text){
    console.log('searched for => ', text);
  }

  __onMenuBtnClick(){
    this.setState({menuActive: !this.state.menuActive});
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
    const {menuActive, activeFilters} = this.state;
    const {user} = this.props;

    return (
      <div>
        <StyleRoot>
          <NavBar
            onMenuBtnClick={this.__onMenuBtnClick}
            onSearchSubmit={this.__onSearchSubmit}
            menuActive={menuActive}
            user={user}
          />
        </StyleRoot>
        <SlideMenu
          show={menuActive}
          activeIndex={0}
          activeFilters={activeFilters}
          filterItems={filterItems}
          onFilterItemClick={this.__onFilterItemClick}
          onFilterApply={this.__onFilterApply}
          onFilterClear={this.__onFilterClear}
        />
        <div style={styles.body}>
          <CardGrid style={styles.cardGrid}
            onCardClick={this.__onCardClick}
            onCardActionClick={this.__onCardActionClick}
            cardData={this.getCardData()}
          />
          <Button style={styles.moreBtn}
            bgColor="#7E57C2"
          >
            Show More
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  body:{
    width: '90%',
    margin: '70px auto 0px auto',
    textAlign: 'center',
  },

  title:{
    marginTop: '100px',
    fontSize: '1.5em',
    padding: '15px',
  },
  cardGrid: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },
  moreBtn: {
    display: 'inline-block',
  }
};


export default Browse;
