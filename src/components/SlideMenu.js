import React from 'react';
import Radium from 'radium';

const items= ['All', 'Some', 'Green Ones', 'Blue Ones'];

const styles = {
  container: {
    position: 'fixed',
    top: '60px',
    left: '-300px',
    height: 'calc(100% - 60px)',
    zIndex: '4',
    width: '300px',
    overflowY: 'scroll',
    background: '#fff',
    transition: 'all 0.3s cubic-bezier(.17,.67,.17,.88)',
  },
  container__show:{
    left: '0px',
  },
  titleContainer:{
    height: 140,
    padding: '20px 0',
    backgroundColor: '#fff',
    textAlign: 'center',
    boxShadow: 'inset rgba(0,0,0,0.1) 1px 2px 3px'
  },
  title:{
    fontSize: '1.2em',
    padding: 10,
  },
  logoImg:{
    width: 120,
  },

  list:{
  },

  listTitle:{
    fontSize: '1.2em',
    padding: 10,
    backgroundColor: '#eee',
  },
  item: {
    textAlign: 'left',
    color: '#000',
    padding: '15px 20px',
    fontSize: '1em',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#eee',
    }
  },
  item__active:{
    fontWeight: 'bold',
    color: '#673AB7',
  },
}

@Radium
class SlideMenu extends React.Component{

  static propTypes = {
    show: React.PropTypes.bool,
    activeIndex: React.PropTypes.number,
    onItemClick: React.PropTypes.func,
    catIndex: React.PropTypes.number,
  };

  static defaultProps = {
    catIndex: 0,
    onItemClick: () => {},
  };

  constructor(props){
    super(props);
  }

  renderItems(activeIndex, onItemClick){
    let getStyle = (i) =>{
      if(i == activeIndex){
        return {...styles.item, ...styles.item__active};
      }
      return styles.item;
    };
    return items.map((el, i) => (
      <div key={i}
        style={getStyle(i)}
        onClick={() => onItemClick(i)}
      >
        {el}
      </div>
    ));
  }

  render(){
    let {style, show, activeIndex, onItemClick} = this.props;
    if(show){
      style = {...styles.container, 
        ...style, 
        ...styles.container__show
      };
    }else{
      style = {...styles.container, 
        ...style, 
      };
    }

    return (
      <div style={style}>
        <div style={styles.titleContainer}>
          <img src="assets/images/logo.svg" alt="" 
            style={styles.logoImg}
          />
        </div>
        <div style={styles.title}>Home</div>
        <div style={styles.title}>Help</div>
        <div style={styles.title}>About</div>
        <div style={styles.list}>
          <div style={styles.listTitle}>Categories</div>
          {this.renderItems(activeIndex, onItemClick)}
        </div>
      </div>
    );
  }
}

export default SlideMenu;
