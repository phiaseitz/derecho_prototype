// heatmaplegend.jsx
var React = require('react');

var HeatMapLegend = React.createClass({  
  getDefaultProps: function() {
    return {
      xpos: 100,
      ypos: 10
    }
  },

  render: function() {
    var props = this.props;
    var lengendLen = 100;
    var legendWidth = 4;
    return (
      <g>
        <rect 
          x= {props.xpos - legendWidth/2} 
          y= {props.ypos} 
          width = {legendWidth}
          height = {lengendLen} 
          style = {{fill: "url(#LegendGradient)"}} />
        <line 
          x1= {props.xpos - 10} 
          y1= {props.ypos} 
          x2= {props.xpos + 10} 
          y2= {props.ypos} 
          stroke = {props.agreeColor} 
          strokeWidth = {legendWidth} />
        <line 
          x1= {props.xpos - 10} 
          y1= {props.ypos + lengendLen} 
          x2= {props.xpos + 10} 
          y2= {props.ypos + lengendLen} 
          stroke = {props.disagreeColor} 
          strokeWidth = {legendWidth} />
        <g className = "legendtext">
          <text
            x = {props.xpos - 15} 
            y = {props.ypos}>High Tag Agreement
          </text>
          <text
            x = {props.xpos - 15} 
            y = {props.ypos + lengendLen}>Low Tag Agreement
          </text>
        </g>
      </g>
      
    );
  }
});

module.exports = HeatMapLegend;