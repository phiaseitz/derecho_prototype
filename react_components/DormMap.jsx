// map.jsx
var React = require('react');
var _ = require('underscore');
var d3 = require ('d3');

var DataSeries = require('./dataseries.jsx');
var Dormoutline = require('./dormoutline.jsx')

var DormMap = React.createClass({
  getDefaultProps: function() {
    return {
      dorm: "EH",
      floor: "1"
    }
  },
  render: function() {
    var props = this.props;
    console.log(this.props);

    var margin = 100;
    var maxDormWidth = props.width - 2*margin;
    var maxDormHeight = props.height - 2*margin;
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
        <Dormoutline dorm = {this.props.dorm} floor = {this.props.floor} width = {this.props.width} height = {this.props.height} margin = {margin} scaling = {scaling} />
      </svg>
    );
  }
});

module.exports = DormMap;