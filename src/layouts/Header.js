import React from 'react';
import Radium from 'radium';

import DropDownSearch from '../components/DropDownSearch';
import Button from '../components/CustomButton';
import MenuButton from '../components/MenuButton';
import OverlayMenu from '../components/OverlayMenu';
import TabBar from '../components/TabBar';


const dropDownItems = ['All', 'Some', 'Green Ones', 'Blue Ones'];
const tabItems = ['Premium', 'Normal', 'Following'];
const menuItems = ['Home','Browse', 'Help', 'About', '', 'Login', 'Sign Up'];

const styles = {
  container:{
    position: 'relative',
    backgroundImage: 'url("/assets/images/header-bg.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: '#fff',
  },

  navbar:{
    position: 'fixed',
    zIndex: '2',
    height: '60px',
    top: '-60px',
    left: '0px',
    width: '100%',
    paddingRight: '60px',
    transition: 'all 0.4s cubic-bezier(.17,.67,.17,.88)',
  },
  navbar__visible:{
    top: '0px',
  },

  menuBtn: {
    position: 'fixed',
    right: '0px',
    top: '0px',
    width: '60px',
    height: '60px',
    zIndex: '5',
  },

  searchBar:{
    float: 'left',
    width: '100%',
    maxWidth: '100%',
    background: 'rgba(255,255,255,0.8)',
  },

  tabBar: {
    float: 'left',
    width:'50%',
    height:'60px',
  },

  jumbotron:{
    paddingTop: '15px',
    textAlign: 'center',
  },

  logoContainer:{
    overflow: 'hidden',
  },

  logo:{
    width: '15%',
  },

  brand:{
    paddingTop: '20px',
    fontWeight: 'bold',
    fontSize: '2.0em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },

  ddSearchContainer:{
    textAlign: 'center',
    margin: '50px 0px 25px 0px',
  },

  ddSearch:{
    minWidth: '280px',
  },

  descript: {
    fontSize: '2em',
    textAlign: 'center',
    margin: '30px 0',
  },

  spacer: {
    marginTop: '80px',
  },
  scrollBtn: {
    cursor: 'pointer',
    animation: 'up-and-down 2.8s infinite',
  },

  btnContainer: {
    width: '100%',
    textAlign: 'center',
  },

  btn:{
    margin: '10px',
    padding: '1.5em 2em',
    border: '2px solid #fff',
  },
  btnInverse:{
    ':hover':{
      color: '#673AB7',
      backgroundColor: '#fff',
    }
  }
};

@Radium
class Header extends React.Component{

  static propTypes = {
    onLoginClick: React.PropTypes.func,
    onSignUpClick: React.PropTypes.func,
  };

  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
      navbarVisible: false,
      menuActive: false,
      tabIndex: 0,
    };
    this.__onTabItemClick = this.__onTabItemClick.bind(this);
    this.__onDDItemClick = this.__onDDItemClick.bind(this);
    this.__onSearchSubmit = this.__onSearchSubmit.bind(this);
    this.__onMenuBtnClick= this.__onMenuBtnClick.bind(this);
    this.__toggleNavbar = this.__toggleNavbar.bind(this);
    this.__onScroll = this.__onScroll.bind(this);
  }

  __onScroll(){
    //console.log(this.__ddSearchBox);
    let rect = this.__ddSearchBox.getBoundingClientRect();
    //console.log(rect);
    if(!this.state.navbarVisible){
      if(window.scrollY >= rect.bottom){
        this.setState({navbarVisible: true});
      }
    }else{
      if(window.scrollY < rect.bottom){
        this.setState({navbarVisible: false});
      }
    }
  }

  __toggleNavbar(){
    this.setState({navbarVisible: !this.state.navbarVisible});
  }

  __onMenuBtnClick(){
    this.setState({menuActive: !this.state.menuActive});
  }

  __onDDItemClick(i){
    this.setState({activeIndex: i});
  }

  __onTabItemClick(i){
    this.setState({tabIndex: i});
  }

  __onSearchSubmit(text){
    let cat = dropDownItems[this.state.activeIndex];
    alert(`You searched for '${text}' in '${cat}'`);
  }


  componentDidMount(){
    window.addEventListener('scroll', this.__onScroll);
    this.__onScroll();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.__onScroll);
  }

  render(){
    const {activeIndex, menuActive, navbarVisible, tabIndex
    } = this.state;

    let navStyle = {...styles.navbar};
    if(navbarVisible){
      navStyle  = {...navStyle, ...styles.navbar__visible};
    }

    return (
      <div style={styles.container}>
        <OverlayMenu title="Menu"
          items={menuItems}
          visible={menuActive}
        />
        <MenuButton style={styles.menuBtn}
          onClick={this.__onMenuBtnClick}
          active={menuActive}
        />
        <div style={navStyle}
          ref={(el) => {this.__navbar = el;}}
        >
          <DropDownSearch style={styles.searchBar}
            focusWidth="100%"
            items={dropDownItems}
            onSearchSubmit={this.__onSearchSubmit}
            onItemClick={this.__onDDItemClick}
            activeIndex={activeIndex}
          />
        </div>
        <div style={styles.jumbotron}>
          <div style={styles.logoContainer}>
            <img src="/assets/images/logo.svg" alt=""
              style={styles.logo}
            />
          </div>
          <div style={styles.brand}>
            Hello Kitty
          </div>
        </div>
        <div style={styles.ddSearchContainer}>
          <DropDownSearch style={styles.ddSearch}
            items={dropDownItems}
            onSearchSubmit={this.__onSearchSubmit}
            onItemClick={this.__onDDItemClick}
            activeIndex={activeIndex}
            rootRef={(ref) => {this.__ddSearchBox= ref;}}
          />
        </div>
        <div className="hide-xs" style={styles.spacer}></div>
        <div style={styles.descript}>
          Let people know about your business.
          <div style={styles.spacer} className="hide-xs"></div>
        </div>
        <div style={styles.btnContainer}>
          <Button style={styles.btn}
            onClick={this.props.onSignUpClick}
          >
            SIGN UP
          </Button>
          <Button style={{...styles.btn, ...styles.btnInverse}}
            fgColor="#fff"
            bgColor="transparent"
            hover={false}
            onClick={this.props.onLoginClick}
          >
            LOGIN
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
