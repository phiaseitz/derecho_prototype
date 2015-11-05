// map.jsx
var React = require('react');

var Room = React.createClass({
  getDefaultProps: function() {
    return {
      floor: "1",
      margin: 100,
      scaling: 1,
      roominfo: [],
      fill: "white",
    }
  },

  render: function() {
    var props = this.props;
    var lineFunction = d3.svg.line()
      .x(function(d) {return props.margin + props.scaling*d.x;})
      .y(function(d) {return props.margin + props.scaling*d.y;})
      .interpolate("linear");

    var roomlabel = props.floor + props.roominfo.room;
    var one = "1";
    console.log(props);

    return (
      <g> 
        <path d = {lineFunction(props.roominfo.pathpoints)} stroke={"black"} strokeWidth={5} fill={props.color}/>
        <text x= {props.margin + props.scaling*props.roominfo.labelx} y= {props.margin + props.scaling*props.roominfo.labely} text-anchor="center" fill="black" >{roomlabel}</text>
      </g>
        
    );
  }
});

module.exports = Room;