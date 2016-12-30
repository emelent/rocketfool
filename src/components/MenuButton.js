import React from 'react';


const styles = {
  container:{
    cursor: 'pointer',
    padding: '13px 0px',
  },

  stack: {
    background: '#000',
    height: '3px',
    width: '35px',
    margin: '5px auto',
    transition: `cubic-bezier(.17,.67,.17,.88) margin 0.3s,
      cubic-bezier(.17,.67,.17,.88) transform 0.3s`,
  },

  stack_1_active:{
    marginTop: '12px',
    transform: 'rotateZ(45deg)',
  },
  stack_2_active:{
    marginTop: '-8px',
    transform: 'rotateZ(-45deg)',
  },
  stack_3_active:{
    opacity: '0',
  },
};

class MenuButton extends React.Component{

  static propTypes = {
    active: React.PropTypes.bool,
    bgColor: React.PropTypes.string,
    fgColor: React.PropTypes.string,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    bgColor: 'rgba(255,255,255,0.95)',
    fgColor: '#000',
  };

  render(){
    let {bgColor, fgColor, style, active, onClick} = this.props;
    style = {...styles.container, ...style, 
      backgroundColor: bgColor, color: fgColor};
    let s1 = (active)? styles.stack_1_active: {};
    let s2 = (active)? styles.stack_2_active:{};
    let s3 = (active)? styles.stack_3_active:{};

    return (
      <div style={style} onClick={onClick}>
        <div style={{...styles.stack, ...s1}}></div>
        <div style={{...styles.stack, ...s2}}></div>
        <div style={{...styles.stack, ...s3}}></div>
      </div>
    );
  }
}

export default MenuButton;
