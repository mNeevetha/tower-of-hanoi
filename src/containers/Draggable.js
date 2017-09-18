import React from "react";

export default class Draggable extends React.Component {
  drag(ev) {
    ev.dataTransfer.setData(this.props.type, ev.target.id);
    console.log(ev.dataTransfer.getData(this.props.type));
  }
  diskColor(index) {
    const color = [
      "#4d1c3c",
      "#f5cd30",
      "#f25960",
      "#76d3b9",
      "#389891",
      "#221277",
      "#d12d36",
      "#0b2938",
      "#dddddd",
      "#d87e9f",
      "#4d1c3c"
    ];
    return color[index];
  }

  diskWidth(diskcnt, disknumber) {
    return disknumber * 100 / diskcnt;
  }
  render() {
    const disks = this.props.disk;
    return (
      <div
        style={{
          width: this.diskWidth(4, disks),
          backgroundColor: this.diskColor(disks)
        }}
        className="diskDiv"
        draggable={true}
        onDragStart={event => this.drag(event)}
        type="text"
        id={this.props.id}
      >
        {disks}
      </div>
    );
  }
}
