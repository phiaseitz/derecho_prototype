var React = require('react');

var PlacePinButton = React.createClass({
  handleClick: function() {
    if (this.props.inProgress) {
      this.props.setPin();
    }
    this.props.setConfirm();
  },

  render: function() {
    var buttonClass = "nohighlight previewButton";
    buttonClass += this.props.inProgress ? 
        " placePinButtonConfirm" : " placePinButtonNormal";
    return (
      <div id="placePinButton"
          className={buttonClass}
          onClick={this.handleClick}>
      </div>
    );
  }
});

module.exports = PlacePinButton