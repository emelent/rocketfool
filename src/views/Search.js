import React from 'react';
import {Link, hashHistory} from 'react-router';
import {push} from 'react-router-redux';


class Search extends React.Component{
  constructor(props){
    super(props);
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(){
    hashHistory.push('/');
  }
  render(){
    return(
      <div>
        <h1>Search Page</h1>
        <h2>You searched for '{this.props.params.query}'</h2>
        <button onClick={this.btnClick}>Home</button>
        <Link to="/">Main</Link>
      </div>
    );
  }
};

export default Search;
