var React = require('react');
var CompareButton = require('./buttons/compare_button.jsx');
var ContactButton = require('./buttons/contact_button.jsx');
var PlacePinButton = require('./buttons/place_pin_button.jsx');

var PreviewCard = React.createClass({

  getInitialState: function() {
    return {
      contactInfoShown: false,
      confirmationInProgress: false
    }
  },

  setContactInfoShown: function() {
    this.setState({
      contactInfoShown: !this.state.contactInfoShown
    });
  },

  setConfirmationInProgress: function() {
    this.setState({
      confirmationInProgress: !this.state.confirmationInProgress
    });
  },

  render: function() {
    var contactInfoShown = this.state.contactInfoShown ? "visible" : "hidden";
    var secondaryButtonsShown =
        this.state.confirmationInProgress ? "visible" : "hidden";
    var roomNumber = (this.props.previewPin.hall ? 'East Hall' : 'West Hall') +
        ' ' + this.props.previewPin.roomNumber;
    var occupants = '';
    var occupantsLength = this.props.previewPin.occupants.length;
    for (i = 0; i < (occupantsLength - 1); i++) {
      occupants = occupants + this.props.previewPin.occupants[i].firstName +
          ' ' + this.props.previewPin.occupants[i].lastName + ', ';
    }
    occupants = occupants + '& '
        this.props.previewPin.occupants[occupantsLength - 1].firstName + ' ' + 
        this.props.previewPin.occupants[occupantsLength - 1].lastName;
    return (
      <div id="preview-card">
        <div id="preview-info-container">
          <div className="preview-occupant-info">
            {roomNumber}
            {occupants}
          </div>
          <div className="preview-group">
            {'Group ' + this.props.previewPin.group}
          </div>
        </div>
        <div id="preview-contact-info" className={contactInfoShown}>
        </div>

        <div id="preview-button-container">
          <div 
            id="secondary-preview-button-container" 
            className={secondaryButtonsShown}>
            <CompareButton
              setCompare={this.props.setCompare}
              isComparing={this.props.isComparing}
            />
            <ContactButton
              setContactInfoShown={this.setContactInfoShown}
            />
          </div>
          <div
            id="confirmation-text"
            className={!secondaryButtonsShown}>
            [Are you sure?]
          </div>
          <PlacePinButton
            setPin={this.props.setPin}
            setConfirm={this.setConfirmationInProgress}
            inProgress={this.confirmationInProgress}
          />
        </div>
      </div>
    );
  }
});

module.exports = PreviewCard