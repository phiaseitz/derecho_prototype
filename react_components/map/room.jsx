// map.jsx
var React = require('react');
var _ = require('underscore');

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
    this.props.setPreviewPin(this.props.roomPinData);
    this.props.setPreview(true);
    console.log(this.props.roomPinData);
  },

  render: function() {
    var props = this.props;
    var lineFunction = d3.svg.line()
      .x(function(d) {return props.margin + props.scaling*d.x;})
      .y(function(d) {
        if(props.roominfo.dorm === 'EH'){
          return props.margin + props.scaling*d.y;
        } else{
          return  50 + props.margin + props.scaling*d.y;
        }})
      .interpolate("linear");

    var roomlabel = props.floor + props.roominfo.room;
    var swidth = 2;
    var tooltipvis = false;
    var roomcolor = props.color;
    if (this.state.hover) {
      swidth = 3;
      tooltipvis = true;
    }
    var roommates = [];
    //No one has placed a pin here
    if (props.roomPinData[0].occupants.length > 0){
      roommates = _.map(props.roomPinData, function(pinData,i){
        return _.map(pinData.occupants, function(occupant,i) {
          return occupant.firstName + " " + occupant.lastName;
        })
      });
    }

    var occupancyCircles = _.map(props.roomPinData, function (pinData,i){
      if(pinData.occupants.length > 0){
        return (
        <circle
            key = {props.roominfo.dorm + roomlabel + i} 
            cx= {props.margin + props.scaling*props.roominfo.labelx - 12 + i*5}
            cy={props.roominfo.dorm === "EH" ? 
              props.margin + props.scaling*props.roominfo.labely - 12 
              : 50+ props.margin + props.scaling*props.roominfo.labely - 12}
            r="2"
            fill="#404040"/>
        )
      }
    });

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
            y = {props.roominfo.dorm === "EH" ? 
              props.margin + props.scaling*props.roominfo.labely + 2 
              : 50+ props.margin + props.scaling*props.roominfo.labely + 2}
            fill ="black">{roomlabel}</text>
          <g className = "occupancyCircles">{occupancyCircles}</g>
        </g>
        <RoomToolTip
          type = {props.roominfo.type}
          visiblity = {tooltipvis}
          dorm = {props.roominfo.dorm}
          roomnumber = {roomlabel}
          group = {props.roomPinData[0].group}
          roommates = {roommates}
          xval = {props.margin + props.scaling*props.roominfo.labelx}
          yval = {props.roominfo.dorm === "EH" ? 
            props.margin + props.scaling*props.roominfo.labely - 20*props.scaling
            : 50 + props.margin + props.scaling*props.roominfo.labely - 20*props.scaling}/>
      </g>
    );
  }
});

module.exports = Room;
