// map.jsx
var React = require('react');
var DataSeries = require('./dataseries.jsx')

var DormMap = React.createClass({
  getDefaultProps: function() {
    return {
      dorm: "EH",
      floor: "1"
    }
  },
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}
        <DataSeries data={[ 30, 10, 5, 8, 15, 10 ]} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </svg>
    );
  }
});

module.exports = DormMap;