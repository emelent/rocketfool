import React from 'react';

import Header from './Header';



class Main extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div style={{height:'50vh', width: '100%'}}
        >
        </div>
      </div>
    );
  }
};

export default Main;
