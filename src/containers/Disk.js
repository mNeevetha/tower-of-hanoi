import React, { Component } from "react";
import Tower from "./Tower";
import Draggable from "./Draggable";


class Disk extends Component {

  render() {
    const disk =this.props.disk;
    return (
      <div>
      <li key={this.props.disk}>
        <Draggable type="text" disk={disk} id={this.props.disk}/>
      </li>

      </div>
    );
  }
}

export default Disk;
