// map.jsx
var React = require('react');
var Map = require('./map.jsx')
var DataSeries = require('./dataseries.jsx')

var BarChart = React.createClass({
  render: function() {
    return (
      <Map width={this.props.width} height={this.props.height}>
        <DataSeries data={[ 30, 10, 5, 8, 15, 10 ]} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </Map>
    );
  }
});

module.exports = BarChart;