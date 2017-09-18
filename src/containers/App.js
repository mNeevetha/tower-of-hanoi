import React, { Component } from 'react';
import Tower from './Tower';
import Disk from './Disk';
import towerimg from '../assets/images/towerpeg.png';

class App extends Component {


createDiskList()
{
var lists =[];
 for (var i=1; i<=10;i++)
        {
       lists.push(  <Disk disk={i} />);
        
        }

        return lists;
}
  render() 
  {

    
    return (
      <div className="app">
        <h1>Hello, Curious Five!!!</h1>
        <div style={{display:'inline-block', paddingLeft:'200px',width:'250px', height:'350px',position:'relative', top: '-31px', right:'27px'}}>
           <ul style={{listStyle: 'none', width:'400px'}}  >
         {this.createDiskList()}
            </ul>     
            </div>  
        <div style={{display:'inline-block',  padding:'25px', width:'250px', height:'350px', backgroundSize: 'cover', backgroundImage:"url(" + towerimg + ")"}}>
         
          </div>
            <div style={{display:'inline-block', padding:'25px' , width:'250px', height:'350px' ,backgroundSize: 'cover', backgroundImage:"url(" + towerimg + ")"}}>
         
          </div>
            <div style={{display:'inline-block' , padding:'25px' ,width:'250px', height:'350px',backgroundSize: 'cover',backgroundImage:"url(" + towerimg + ")"}}>
        
          </div>
      </div>
    );
  }
}

export default App;
