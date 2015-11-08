var React = require('react');

var PlacePinButton = React.createClass({
  handleClick: function() {
    if (this.props.confirmationInProgress) {
      this.props.setPin();
    }
    this.props.setConfirmationInProgress();
  },

  render: function() {
    return (
      <div id="PlacePinButton"
          className="nohighlight previewButton"
          onClick={this.handleClick}>
      </div>
    );
  }
});

module.exports = PlacePinButton