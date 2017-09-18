import React, { Component } from 'react';
import towerimg from '../assets/images/towerpeg.png';

class Tower extends Component {

  render() {

    return (
      <div className="app">
        <div style={{display:'inline-block', padding:'25px'}}>
          <img src={towerimg} alt={'test'} width={'100px'} height={'200px'} />
          </div>
            <div style={{display:'inline-block', padding:'25px'}}>
          <img src={towerimg} alt={'test'} width={'100px'} height={'200px'} />
          </div>
            <div style={{display:'inline-block' , padding:'25px'}}>
           <img src={towerimg} alt={'test'} width={'100px'} height={'200px'} />
          </div>
              </div>
    );
  }
}

export default Tower;
