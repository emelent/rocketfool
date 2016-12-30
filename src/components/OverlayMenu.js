import React from 'react';
import Radium from 'radium';


const styles = {
  container: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '4',
    height: '0vh',
    width: '100%',
    overflow: 'hidden',
    background: '#fff',
    transition: 'all 0.3s cubic-bezier(.17,.67,.17,.88)',
  },
  container__visible:{
    height: '100vh',
  },
  title: {
    color: '#000',
    fontSize: '2.2em',
    padding: '15px 20px',
  },
  item: {
    textAlign: 'center',
    color: '#000',
    padding: '15px 20px',
    fontSize: '1.4em',
    cursor: 'pointer',
    ':hover': {
      color: '#673AB7',
    }
  }
};

@Radium
class OverlayMenu extends React.Component{

  static propTypes = {
    visible: React.PropTypes.bool.isRequired,
    items: React.PropTypes.array.isRequired,
    onItemClick: React.PropTypes.func,
    title: React.PropTypes.string,
  };

  static defaultProps = {
    onItemClick: () => {},
    title: 'Menu',
  };

  renderItems(items, onItemClick){
    return items.map((el, i) => (
      <div style={styles.item}
        key={i}>
        {el}
      </div>
    ));
  }
  render(){
    let {style, visible, title, onItemClick, items} = this.props;
    style = {...style, ...styles.container};
    if(visible){
      style = {...style, ...styles.container__visible};
    }

    return (
      <div style={style}>
        <div style={styles.title}>{title}</div>
        {this.renderItems(items, onItemClick)}
      </div>
    );
  }
}

export default OverlayMenu;
