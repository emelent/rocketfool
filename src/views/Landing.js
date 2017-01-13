import React from 'react';
import {hashHistory} from 'react-router';


import Header from '../layouts/Header';


class Landing extends React.Component{
  render(){
    return(
      <div>
        <Header onLoginClick={() => hashHistory.push('/login')}
          onSignUpClick={() => hashHistory.push('/signup')}
        />
      </div>
    );
  }
};

export default Landing;
