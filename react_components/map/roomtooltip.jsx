// map.jsx
var React = require('react');
var _ = require('underscore');

var RoomToolTip = React.createClass({
  getDefaultProps: function() {
    return {
      visiblity: false,
      dorm: "EH",
      roomnumber: 109,
      group: "",
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

    var pixelsPerTextLine = 20;

    var roommatesPerRoom = props.type === 'double' ? 2 : 6;

    var tooltippath = [ 
      {x:-60 , y: -pixelsPerTextLine*(roommatesPerRoom * props.roommates.length + 1)- 25}, 
      {x: -60, y: -20},
      {x: -5 , y: -20},
      {x: 0 , y: 0},
      {x: 5 , y: -20},
      {x: 60 , y: -20},
      {x: 60 , y: -pixelsPerTextLine*(roommatesPerRoom *props.roommates.length + 1)- 25},
      {x: -60 , y: -pixelsPerTextLine*(roommatesPerRoom *props.roommates.length + 1)- 25}
    ];
    var roommatesPinsDisplay = _.map(props.roommates, function(roommatePin, i){
      var roommatesDisplay = _.map(roommatePin, function(roommate, j){
        return (
          <text 
            key = {roommate + i} 
            x = {xval - 57} 
            y = {i * roommatesPerRoom * pixelsPerTextLine +  j*pixelsPerTextLine + props.yval-pixelsPerTextLine*roommatesPerRoom*(props.roommates.length)-3}>{roommate}
          </text>
        )
      });
      if (i >= 0){
        roommatesDisplay.push(
        <line
          x1 = {xval - 57}
          x2 = {xval + 57}
          y1 = {(i) * roommatesPerRoom * pixelsPerTextLine +  props.yval-pixelsPerTextLine*roommatesPerRoom*(props.roommates.length) - 5*pixelsPerTextLine/6}
          y2 = {(i) * roommatesPerRoom * pixelsPerTextLine +  props.yval-pixelsPerTextLine*roommatesPerRoom*(props.roommates.length) - 5*pixelsPerTextLine/6}
          stroke = "black"
          strokeWidth = {1}
        />);
      }
      return roommatesDisplay;
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
            y = {props.yval-roommatesPerRoom*pixelsPerTextLine*(props.roommates.length)-25}>{props.dorm+props.roomnumber}
          </text>
        </g>
        <g className = "roomtooltiproomateslist">{roommatesPinsDisplay}</g>
      </g>
        
    );
  }
});

/*<text
            x = {xval} 
            y = {props.yval-pixelsPerTextLine*(props.roommates.length)-25}>{props.roommates.length > 0 ? "Group " + props.group : ""}</text>

            <g className = "roomtooltiproomateslist">{roommatesPinText}</g>*/

module.exports = RoomToolTip;