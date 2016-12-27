import React from 'react';
import Radium from 'radium';

const styles = {
  container: {
    background: 'rgba(255,255,255,0.4)',
    color: '#555',
    transition: 'all 0.4s ease',
  },

  iconContainer: {
    float: 'left',
    width: '44px',
    height: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },

  inputContainer: {
    marginLeft: '44px',
    width: 'auto',
    height: '100%',
    overflow: 'hidden',
  },

  input:{
    border: 'none',
    height: '100%',
    width: '100%',
    padding: '0 10px',
    fontFamily: 'Raleway',
    fontSize: '1.1em',
    background: 'none',

    '::-webkit-input-placeholder': {
      color: '#000'
    },

    ':focus':{
      border: 'none',
    }
  }
};

const voidFunc = () => {};

@Radium
class SearchBox extends React.Component{
  static propTypes = {
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    focusWidth: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
  };  

  static defaultProps = {
    placeholder: 'Search here..',
    width: '200px',
    height: '60px',
    focusWidth: '70%',
    onSubmit: voidFunc,
    onFocus: voidFunc,
    onBlur: voidFunc,
  };

  constructor(props){
    super(props);
    this.state = {value: '', focused: false};
    this.__onFocus  = this.__onFocus.bind(this);
    this.__onBlur   = this.__onBlur.bind(this);
    this.__onSubmit = this.__onSubmit.bind(this);
    this.__onChange = this.__onChange.bind(this);
    this.__onKeyUp  = this.__onKeyUp.bind(this);
  }

  __onFocus(){
    this.setState({focused: true});
    this.props.onFocus();
  }

  __onBlur(){
    this.setState({focused: false});
    this.props.onBlur();
  }

  __onSubmit(){
    this.props.onSubmit(this.state.value);
  }

  __onChange(event){
    this.setState({value: event.target.value});
    if(this.props.onChange){
      let value = this.props.onChange(this.state.value);
      if(value){
        this.setState({value});
      }
    }
  }

  __onKeyUp(event){
    if (event.keyCode == 13) {
      this.__onSubmit();
    }
  }

  render(){
    let {height, width, focusWidth, placeholder, style, onSubmit} = this.props;
    
    if(this.state.focused){
      width = focusWidth;
    }

    return(
      <div style={{...styles.container, ...style, width, height}}>
        <div style={{...styles.iconContainer, lineHeight: height}}>
          <i className="fa fa-search"></i>
        </div>
        <div style={styles.inputContainer}>
          <input type="text" placeholder={placeholder}
            style={styles.input}
            onChange={this.__onChange}
            onFocus={this.__onFocus}
            onBlur={this.__onBlur}
            onKeyUp={this.__onKeyUp}
          />
        </div>
      </div>
    )
  }
}

export default SearchBox;
