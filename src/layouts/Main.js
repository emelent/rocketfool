import React from 'react';

import Header from './Header';
import CardGrid from '../layouts/CardGrid';


const cardData = [];
for(let i=0; i < 20; i++){
  cardData.push({
    title: 'Title',
    description: 'Description',
    bgUrl: '/assets/images/header-bg.jpg',
    bgColor: '#fff',
  });
};
console.log(cardData);

const styles = {
  title: {
    fontSize: '1.4em',
    padding: '10px 15px',
  }, 

};


class Main extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div style={styles.title}>Most Viewed</div>
        <CardGrid 
          cardData={cardData}  
          onCardClick={this.__onCardClick}
          onCardActionClick={this.__onCardActionClick}
        />
      </div>
    );
  }
};

export default Main;
