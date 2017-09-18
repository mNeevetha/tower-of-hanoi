import React, { Component } from 'react';
import Tower from './Tower';




class Disk extends Component {

diskColor(index)
{
    const color =['#4d1c3c','#f5cd30','#f25960','#76d3b9','#389891','#221277','#d12d36','#0b2938','#dddddd','#d87e9f','#4d1c3c'];
    return color[index];
}

diskWidth(diskcnt,disknumber)
{
    return ((disknumber*100)/diskcnt);
}
  render() {

    return (
      <li key ={this.props.disk} >   
<div style={{width:this.diskWidth(4,this.props.disk), backgroundColor:this.diskColor(this.props.disk)}} className='diskDiv' >      {this.props.disk}</div>
       </li>
    );
  }
}

export default Disk;
