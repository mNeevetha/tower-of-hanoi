import React from "react";
import towerimg from '../assets/images/towerpeg.png';

export default class Droppable extends React.Component {
    constructor(props){
        super(props);
    }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
      console.log(ev);
    var data = ev.dataTransfer.getData(this.props.types);
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div style={{display:"inline-block"}}>
        <div
          onDrop={event => this.drop(event)}
          onDragOver={event => this.allowDrop(event)}
          style={{
            display: "inline-block",
            margin: "25px",
            width: "250px",
            height: "350px",
            backgroundSize: "cover",
            backgroundImage: "url(" + towerimg + ")"
          }}
        />
        <div
          onDrop={event => this.drop(event)}
          onDragOver={event => this.allowDrop(event)}
          style={{
            display: "inline-block",
            margin: "25px",
            width: "250px",
            height: "350px",
            backgroundSize: "cover",
            backgroundImage: "url(" + towerimg + ")"
          }}
        />
        <div
          onDrop={event => this.drop(event)}
          onDragOver={event => this.allowDrop(event)}
          style={{
            display: "inline-block",
            margin: "25px",
            width: "250px",
            height: "350px",
            backgroundSize: "cover",
            backgroundImage: "url(" + towerimg + ")"
          }}
        />
      </div>
    );
  }
}
