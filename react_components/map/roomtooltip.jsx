// map.jsx
var React = require('react');
var _ = require('underscore');

var RoomToolTip = React.createClass({
  getDefaultProps: function() {
    return {
      visiblity: false,
      dorm: "EH",
      roomnumber: 109,
      group: "A",
      roommates: ["Austin Greene", "Ian Hill"],
      xval: 0,
      yval: 0
    }
  },

  render: function() {
    var props = this.props;

    //Hide the tooltip for the room if we don't want to show it
    var xval = props.xval;
    if (!props.visiblity) {
      xval = -100;
    }

    var lineFunction = d3.svg.line()
      .x(function(d) {return xval + d.x;})
      .y(function(d) {return props.yval + d.y;})
      .interpolate("linear");

    var pixelspertextline = 20;

    var tooltippath = [ 
      {x:-60 , y: -pixelspertextline*(props.roommates.length + 1)- 15}, 
      {x: -60, y: -10},
      {x: -5 , y: -10},
      {x: 0 , y: 0},
      {x: 5 , y: -10},
      {x: 60 , y: -10},
      {x: 60 , y: -pixelspertextline*(props.roommates.length + 1)- 15},
      {x: -60 , y: -pixelspertextline*(props.roommates.length + 1)- 15}
    ];

    var roommatestext = _.map(props.roommates, function(roommate, i) {
      return (
        <text 
          key = {roommate + i} 
          x = {xval - 57} 
          y = {i*pixelspertextline + props.yval-pixelspertextline*(props.roommates.length)+7}>{roommate}</text>
      )
    });

    return (
      <g className = "roomtooltip"> 
        <path 
          d = {lineFunction(tooltippath)} 
          stroke="black" 
          fill="white"/>
        <g className = "roomtooltipheader">
          <text
            x = {xval - 57} 
            y = {props.yval-pixelspertextline*(props.roommates.length)-15}>{props.dorm+props.roomnumber}
          </text>
          <text
            x = {xval + 40} 
            y = {props.yval-pixelspertextline*(props.roommates.length)-15}>{props.group}</text>
        </g>
        <g className = "roomtooltiproomateslist">{roommatestext}</g>
      </g>
        
    );
  }
});

module.exports = RoomToolTip;