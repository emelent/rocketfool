import React from 'react';
import Radium from 'radium';
import color from 'color';


const styles = {
  base: {
    padding: "1.5em 2em",
    border: "0px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 700,
  },
  primary: {
    backgroundColor: "#0074D9",
    color: "#ffffff",
    ":hover": {
      backgroundColor: color("#0074d9").lighten(0.2).hexString()
    }
  },
  warning: {
    backgroundColor: "#F5A623",
    color: "#ffffff",
    ":hover": {
      backgroundColor: color("#F5A623").darken(0.2).hexString()
    }
  },
  disabled: {
    opacity: .4,
    cursor: "not-allowed"
  }
};
@Radium
class CustomButton extends React.Component{
  static propTypes = {
    kind: React.PropTypes.oneOf(['primary', 'warning', 'disabled']).isRequired
  };

  render(){
    return ( 
      <button style={[styles.base, styles[this.props.kind]]} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
};

export default CustomButton;
