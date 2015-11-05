// map.jsx
var React = require('react');

var Room = React.createClass({
  getInitialState: function() {
    return {hover: false};
  },

  getDefaultProps: function() {
    return {
      floor: "1",
      margin: 100,
      scaling: 1,
      roominfo: [],
      color: "#FFFFFF"
    }
  },

  handleMouseOver: function() {
    this.setState({hover: true});
  },

  handleMouseOut: function () {
    this.setState({hover: false});
  },

  render: function() {
    var props = this.props;
    var lineFunction = d3.svg.line()
      .x(function(d) {return props.margin + props.scaling*d.x;})
      .y(function(d) {return props.margin + props.scaling*d.y;})
      .interpolate("linear");

    var roomlabel = props.floor + props.roominfo.room;
    var outlinecolor = "black";
    if (this.state.hover) {
      outlinecolor = "green";
    }

    return (
      <g> 
        <path 
          d = {lineFunction(props.roominfo.pathpoints)} 
          stroke={outlinecolor} 
          strokeWidth={5} 
          fill={props.color} 
          onMouseOver={this.handleMouseOver}
          onMouseOut= {this.handleMouseOut}/>
        <text 
          x= {props.margin + props.scaling*props.roominfo.labelx} 
          y= {props.margin + props.scaling*props.roominfo.labely} 
          text-anchor="center" 
          fill="black">{roomlabel}</text>
      </g>
        
    );
  }
});

module.exports = Room;