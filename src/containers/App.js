import React, { Component } from "react";
import Tower from "./Tower";
import Disk from "./Disk";
import Droppable from "./Droppable";

import "../assets/stylesheets/index.scss";
class App extends Component {
  createDiskList() {
    var lists = [];
    for (var i = 1; i <= 10; i++) {
      lists.push(<Disk key={i} disk={i} />);
    }

    return lists;
  }
  render() {
    return (
      <div className="app">
        <h1>Hello, Curious Five!!!</h1>
        <div
          style={{
            display: "inline-block",
            paddingLeft: "200px",
            width: "250px",
            height: "350px",
            position: "relative",
            top: "-78px",
            right: "-15px"
          }}
        >
          <ul style={{ listStyle: "none", width: "400px" }}>
            {this.createDiskList()}
          </ul>
        </div>
        <Droppable types={["text"]} />      
      </div>
    );
  }
}

export default App;
