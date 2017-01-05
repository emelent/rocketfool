import React from 'react';
import Radium from 'radium';

import SearchBox from './SearchBox';
import OverlayMenu from './OverlayMenu';
import MenuButton from './MenuButton';

const catMenuItems = ['All', 'Magical', 'Factual', 'Invisible'];
const backgroundColor=  '#7E57C2';

const styles = {
  container:{
    position: 'fixed',
    backgroundColor,
    top: 0,
    left: 44,
    height: 60,
    width: 'calc(100% - 44px)',
    overflow: 'hidden',
    paddingRight: 44,
    '@media (min-width: 992px)': {
      paddingRight: 250,
    }
  },

  menuBtn:{
    position: 'fixed',
    backgroundColor,
    paddingTop: 15,
    width: 44,
    height: 60,
    left: 0,
    top: 0,
  },
  item: {
    display: 'inline-block',
    marginLeft: '10px',
    lineHeight: '60px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  rightItem:{
    float:'right',
    display: 'inline-block',
    marginRight: '10px',
    lineHeight: '60px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.em',
    cursor: 'pointer',
  },
  brandImg:{
    display: 'inline-block',
  },

  searchBox: {
    position: 'absolute',
    zIndex: '1',
    background: 'rgba(255,255,255,1)',
    left: 'calc(100% - 44px)',
    top: 0,
    height: 60,
    overflow: 'hidden',
    width: '100%',
    transition: 'left 0.4s cubic-bezier(.17,.67,.17,.88)',
    '@media (min-width: 992px)': {
      left: 'calc(100% - 250px)',
    }
  },
  searchBox__focused: {
    background: '#fff',
    left: 0,
    '@media (min-width: 992px)': {
      left: 0,
    }
  },

  catMenu:{
    height: 'calc(100vh - 60px)',
    top: '60px',
    left: '-250px',
    width: '250px',
    textAlign: 'left',
    transition: 'all 0.4s cubic-bezier(.17,.67,.17,.88)',
  },

  catMenuActive:{
    left: '0px',
  }
};

@Radium
class NavBar extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      searchBoxFocus: false,
      catMenuActive: false,  
      catMenuIndex: 0,
    };
    this.__onSearchBoxFocus = this.__onSearchBoxFocus.bind(this);
    this.__onSearchBoxBlur = this.__onSearchBoxBlur.bind(this);
    this.__onSearchBoxSubmit = this.__onSearchBoxSubmit.bind(this);
    this.__onCatItemClick = this.__onCatItemClick.bind(this);
    this.__onCatMenuToggle = this.__onCatMenuToggle.bind(this);
  }

  __onCatMenuToggle(){
    this.setState({catMenuActive: !this.state.catMenuActive});
  }

  __onCatItemClick(i){
    
  }
  __onSearchBoxFocus(){
    this.setState({searchBoxFocus: true});
    this.__searchbox.focus();
  }

  __onSearchBoxBlur(){
    this.setState({searchBoxFocus: false});
  }

  __onSearchBoxSubmit(text){
    this.setState({searchBoxFocus: false});
    if(text != '')
      alert(text);
    this.__searchbox.blur();
  }


  render(){
    const {searchBoxFocus, catMenuActive} = this.state;

    let searchBoxStyle = styles.searchBox;
    if(searchBoxFocus)
      searchBoxStyle = {...styles.searchBox,
        ...styles.searchBox__focused};

    return (
      <div style={styles.container}>
        <MenuButton style={styles.menuBtn}
          onClick={this.__onCatMenuToggle}
          active={(window.innerWidth > 479) && catMenuActive}
          fgColor="#fff"
        />
        <div style={styles.item}>
          Hello Kitty
        </div>
        <div style={styles.rightItem}>
          Login
        </div>
        <div onClick={this.__onSearchBoxFocus}>
          <SearchBox style={searchBoxStyle}
            rootRef={(ref) => {this.__searchbox= ref;}}
            onFocus={this.__onSearchBoxFocus} 
            onBlur={this.__onSearchBoxBlur} 
            onSubmit={this.__onSearchBoxSubmit}
            focusWidth="100%"
            placeholder="Search here..."
          />
        </div>
        <OverlayMenu style={styles.catMenu}
          items={catMenuItems}
          visible={catMenuActive}
          visibleStyle={styles.catMenuActive}
          itemAlign="left"
          showTitle={false}
        />
      </div>
    );
  }
}

export default NavBar;
