// dormmap.jsx
var React = require('react');
var _ = require('underscore');
var d3 = require ('d3');

var DormOutline = require('./dormoutline.jsx');
var DormRooms =  require('./dormrooms.jsx');
var HeatMapLegend = require('./heatmaplegend.jsx');

var DormMap = React.createClass({
  getDefaultProps: function() {
    return {
      dorm: "EH",
      floor: "1",
      width: 100,
      height: 100,
      margin: 50,
      scaling: 1,
    }
  },
  render: function() {
    var props = this.props;

    var disagreeColor = "#FF9933";
    var middleColor = "#FFFFFF";
    var agreeColor = "#0099FF";

    var maxDormWidth = props.width - 1.3*props.margin;
    var maxDormHeight = props.height - 1.1*props.margin;
    var maxDormX = 1145;
    var maxDormY = 1090;

    var scaling = 1;

    if (maxDormX/maxDormY >= maxDormWidth/maxDormHeight){
      scaling = maxDormWidth/maxDormX;
    }else {
      scaling = maxDormHeight/maxDormY;
    }

    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}
         <defs>
          <linearGradient id="LegendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor= {agreeColor}/>
            <stop offset="50%" stopColor = {middleColor} />
            <stop offset="100%" stopColor= {disagreeColor}/>
          </linearGradient>
        </defs>
        <HeatMapLegend
          xpos = {props.width - 0.1*props.margin}
          ypos = {0.5*props.margin}
          agreeColor = {agreeColor} 
          middleColor = {middleColor}
          disagreeColor = {disagreeColor}/>
        <DormOutline 
          margin = {props.margin} 
          scaling = {scaling} />
        <DormRooms 
          dorm = {props.dorm} 
          floor = {props.floor} 
          margin = {props.margin} 
          scaling = {scaling}
          userData = {props.userData}
          currentUserData = {props.currentUserData}
          agreeColor = {agreeColor} 
          middleColor = {middleColor}
          disagreeColor = {disagreeColor}/>
      </svg>
    );
  }
});

module.exports = DormMap;

// <DormRooms dorm = {this.props.dorm} floor = {this.props.floor} margin = {margin} scaling = {scaling} />