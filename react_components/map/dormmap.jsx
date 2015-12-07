// dormmap.jsx
var React = require('react');
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

  handleClick: function() {
    this.props.setPreview(false);
  },

  render: function() {
    var props = this.props;

    var disagreeColor = "#ff8080";
    var middleColor = "#ddccff";
    var agreeColor = "#66c2ff";

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
        <rect
          x= {0}
          y= {0}
          fillOpacity = {0}
          strokeOpacity = {0}
          width = {this.props.width}
          height = {this.props.height}
          style = {{fill: "white", stroke: "white"}}
          onClick = {this.handleClick} />
        <HeatMapLegend
          xpos = {props.width - 0.1*props.margin}
          ypos = {0.5*props.margin}
          agreeColor = {agreeColor}
          middleColor = {middleColor}
          disagreeColor = {disagreeColor}/>
        <DormOutline
          margin = {props.margin}
          scaling = {scaling}
          dorm = {props.dorm}/>
        <DormRooms
          dorm = {props.dorm}
          floor = {props.floor}
          margin = {props.margin}
          scaling = {scaling}
          pinData = {props.pinData}
          currentUserPinData = {props.currentUserPinData}
          agreeColor = {agreeColor}
          middleColor = {middleColor}
          disagreeColor = {disagreeColor}
          setPreviewPin = {props.setPreviewPin}
          setPreview = {props.setPreview}/>
      </svg>
    );

  }
});

module.exports = DormMap;
