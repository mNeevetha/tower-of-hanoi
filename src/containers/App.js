import React, { Component } from 'react';
import Tower from './Tower';
import Disk from './Disk';

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
           <ul style={{listStyle: 'none', width:'400px'}}  >
         {this.createDiskList()}
            </ul>       
        <Tower/>
      </div>
    );
  }
}

export default App;
