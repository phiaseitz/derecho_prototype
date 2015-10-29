var React = require('react');

Title = React.createClass({
  getInitialState: function() {
    return {
      declaration: "By Typing a Lot"
    };
  },
  componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  },

  render: function(){
    console.log(this.state.declaration);
    return (
      <div className="declaration">
        <h1 className="dec-text">
          HELLO
        </h1>
      </div>
    )
  }
});

module.exports = Title;
