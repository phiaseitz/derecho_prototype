var React = require('react');

var PreviewCardButton = React.createClass({
  handleClick: function() {
    this.props.clickFunction();
  },

  render: function() {
    return (
      <div className="nohighlight previewButton"
          onClick={this.handleClick}
          title={this.props.title}>
          <i className="material-icons">{this.props.icon}</i>
      </div>
    );
  }
});

module.exports = PreviewCardButton