import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Card from '../components/Card';
import {fetchProfiles} from '../actions/profileActions';


const mapStateToProps = store => {
  return {
    profile: store.profile,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchProfiles
  }, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
class CardGrid extends React.Component{

  static propTypes = {
    onCardClick: React.PropTypes.func,
    onCardActionClick: React.PropTypes.func,
  };

  componentDidMount(){
    this.props.fetchProfiles();
  }

  renderCards(){
    const {onCardActionClick, onCardClick, profile} = this.props;
    if(profile.loadingProfiles){
      return (
        <div style={styles.spinnerContainer}>
          <img src="/assets/images/loading.svg" alt="" />
        </div>
      );    
    }

    let profiles = [];
    let i = 0;
    for(let id in profile.profiles){
      let item = profile.profiles[id];
      profiles.push(
        <Card key={i} 
          style={styles.card}
          bgUrl={item.bgUrl}
          bgColor={item.bgColor}
          description={item.description}
          title={item.title}
          onCardClick={() => onCardClick(id)}
          onActionClick={() => onCardActionClick(id)} 
        />
      );
      i++;
    }

    return profiles;
  }

  render(){
    const {style} = this.props;
    return (
      <div style={{...styles.container, ...style}}>
        {this.renderCards()}
      </div>
    );
  }
}

const styles ={
  container: {
    width: '90%',
    minHeight: 350,
    padding: 20,
    margin: 'auto',
    backgroundColor: '#fff',
    textAlign: 'left',
  },

  card: {
    margin: '15px 25px',
  },

  spinnerContainer: {
    textAlign: 'center',
    marginTop: '130px',
  },
};

export default CardGrid;
