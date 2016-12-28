import React from 'react';

const styles ={
  container: {
    position: 'relative',
  },

  item: {
    display: 'inline-block',
    padding: '20px',
    cursor: 'pointer',
  },

  underline: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '50px',
    height: '10px',
    transition: 'all 0.4s cubic-bezier(.17,.67,.17,.88)',
  },
}

class TabBar extends React.Component {

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    activeIndex: React.PropTypes.number,
    onItemClick: React.PropTypes.func,
    bgColor: React.PropTypes.string,
    fgColor: React.PropTypes.string,
    align: React.PropTypes.oneOf(['left', 'right', 'center']),
    underline: React.PropTypes.string,
    shadow: React.PropTypes.bool
  };

  static defaultProps = {
    align: 'left',
    bgColor: '#fff',
    fgColor: '#000',
    underline: '#673AB7',
    active: null,
    shadow: false,
    onItemClick: () => {},
    activeIndex: -1,
  };

  constructor(props) {
    super(props);
    this.__activeItem = null;
    this.__container = null;
  }
  
  __updateUnderline(el=null){
    if(!this.__activeItem || !this.__container)
      return;
    
    if(el === null)
      el = this.__activeItem;
    let elRect = el.getBoundingClientRect();
    let cntRect = this.__container.getBoundingClientRect();

    let underline = this.__underline; 
    underline.style.width = elRect.width + 'px';
    underline.style.left = elRect.left - cntRect.left + 'px';
  }

  __mapItems(el, i){
    const {activeIndex, onItemClick} = this.props;
    let newEl = (
      <div key={i} style={styles.item}
        ref={(el) => {
          if(activeIndex == i){
            this.__activeItem = el;
            this.__updateUnderline(el);
          }
        }}
        onClick={(event) => {
            this.__activeItem = event.target;
            this.__updateUnderline();
            onItemClick(i);
          }
        }
      >{el}</div>
    );
    return newEl;
  }

  render(){
    let {shadow, items, bgColor, fgColor, align, style, onItemClick, underline} = this.props;
    style = {...style};
    style = (shadow)? {...style,
      boxShadow: 'rgba(0,0,0,0.1) 1px 1px 1px'
    } : style;
    style.background = bgColor;
    style.color = fgColor;
    style.textAlign = align;

    items = items.map((el, i) => this.__mapItems(el, i));
    this.__updateUnderline();

    return (
      <div style={{...styles.container, ...style}}
        ref={(el) => {this.__container = el;}}

      >
        {items}
        <div style={{...styles.underline, background: underline}}
          ref={(el) => {this.__underline = el;}}
        ></div>
      </div>
    );
  }
}

export default TabBar;
