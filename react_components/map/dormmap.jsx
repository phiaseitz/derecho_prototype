// map.jsx
var React = require('react');
var _ = require('underscore');
var d3 = require ('d3');

var DormOutline = require('./dormoutline.jsx');
var DormRooms =  require('./dormrooms.jsx');

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
        <DormOutline margin = {props.margin} scaling = {scaling} />
        <DormRooms dorm = {this.props.dorm} floor = {this.props.floor} margin = {props.margin} scaling = {scaling}/>
      </svg>
    );
  }
});

module.exports = DormMap;

// <DormRooms dorm = {this.props.dorm} floor = {this.props.floor} margin = {margin} scaling = {scaling} />