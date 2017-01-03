import React from 'react';

import Card from '../components/Card';


const styles ={
  container: {
    width: '90%',
    margin: 'auto',
    textAlign: 'left',
  },

  card: {
    margin: '15px 25px',
  },
};


class CardGrid extends React.Component{

  static propTypes = {
    cardData: React.PropTypes.array.isRequired,
    onCardClick: React.PropTypes.func,
    onCardActionClick: React.PropTypes.func,
  };

  renderCards(items, onCardClick, onCardActionClick){
    return items.map((el, i) => (
      <Card key={i} 
        style={styles.card}
        bgUrl={el.bgUrl}
        bgColor={el.bgColor}
        description={el.description}
        title={el.title}
        onCardClick={() => onCardClick(i)}
        onActionClick={() => onCardActionClick(i)} 
      />
    ));
  }

  render(){
    const {cardData, onCardClick, onCardActionClick, style
    } = this.props;
    return (
      <div style={{...styles.container, ...style}}>
        {this.renderCards(cardData, onCardClick, onCardActionClick)}
      </div>
    );
  }
}

export default CardGrid;
