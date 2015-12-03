var React = require('react');

var CompareButton = React.createClass({
  handleClick: function() {
    if(this.props.isPreviewing){
      this.props.setCompare(this.props.previewPin);
    } else {
      this.props.setCompare(null);
    }
  },

  render: function() {
    return (
      <div id="compareButton"
        className="nohighlight previewButton"
        onClick={this.handleClick}
        title="Compare tags"
      />
    );
  }
});

module.exports = CompareButton
