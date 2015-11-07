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
      roomcolor = "#FFDB4D";
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
            y = {props.margin + props.scaling*props.roominfo.labely} 
            //Help! this does not work... 
            textAnchor = {"center"}
            fill ="black">{roomlabel}</text>
        </g>
        <RoomToolTip 
          visiblity = {tooltipvis}
          dorm = "EH"
          roomnumber = {roomlabel}
          group = {props.roominfo.group}
          //Here, later, we'll want to just add the occupant stuff we've looked up from the DB
          roommates = {props.roominfo.occupants}
          xval = {props.margin + props.scaling*props.roominfo.labelx}
          yval = {props.margin + props.scaling*props.roominfo.labely - 20}/>
      </g>
        
    );
  }
});

module.exports = Room;