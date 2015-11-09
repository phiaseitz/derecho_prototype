var React = require('react');

var PlacePinButton = React.createClass({
  handleClick: function() {
    if (this.props.inProgress) {
      newUserPin = {
        group: this.props.userPin.group,
        occupants: this.props.userPin.occupants,
        hall: this.props.cardHall,
        room: this.props.cardRoom,
        tags: this.props.userPin.tags
      };
      console.log(newUserPin);
      this.props.setPin(newUserPin);
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