// map.jsx
var React = require('react');

var RoomToolTip = require('./roomtooltip.jsx');

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

  handleClick: function() {
    console.log("roomclick");
    //Add the bringing up the card here!
  },

  render: function() {
    var props = this.props;
    var lineFunction = d3.svg.line()
      .x(function(d) {return props.margin + props.scaling*d.x;})
      .y(function(d) {return props.margin + props.scaling*d.y;})
      .interpolate("linear");

    var roomlabel = props.floor + props.roominfo.room;
    var swidth = 2;
    var tooltipvis = false;
    var roomcolor = props.color;
    if (this.state.hover) {
      swidth = 3;
      tooltipvis = true;
    }
    var circleOpacity = "1";
    if (props.roommateinfo.roommates.length === 0){
      circleOpacity = "0";
    }

    return (
      <g> 
        <path 
          d = {lineFunction(props.roominfo.pathpoints)} 
          stroke = {"black"} 
          strokeWidth = {swidth} 
          fill = {roomcolor} 
          onMouseOver = {this.handleMouseOver}
          onMouseOut = {this.handleMouseOut}
          onClick = {this.handleClick}/>
        <g className = "roomlabel">
          <text 
            x = {props.margin + props.scaling*props.roominfo.labelx} 
            y = {props.margin + props.scaling*props.roominfo.labely + 2} 
            fill ="black">{roomlabel}</text>
          <circle 
            fillOpacity = {circleOpacity}
            cx= {props.margin + props.scaling*props.roominfo.labelx - 15} 
            cy={props.margin + props.scaling*props.roominfo.labely - 13}  
            r="2" 
            fill="black" />
        </g>
        <RoomToolTip 
          visiblity = {tooltipvis}
          dorm = "EH"
          roomnumber = {roomlabel}
          group = {props.roommateinfo.group}
          //Here, later, we'll want to just add the occupant stuff we've looked up from the DB
          roommates = {props.roommateinfo.roommates}
          xval = {props.margin + props.scaling*props.roominfo.labelx}
          yval = {props.margin + props.scaling*props.roominfo.labely - 20}/>
      </g>
        
    );
  }
});

module.exports = Room;