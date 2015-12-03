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
        this.state.confirmationInProgress ?  "hidden" : "visible";
    var confirmationTextShown =
        this.state.confirmationInProgress ? "visible" : "hidden";
    var roomNumber = (this.props.previewPin.hall ? 'East Hall' : 'West Hall') +
        ' ' + this.props.previewPin.room;

    var occupantInfo = [];
    for (i = 0; i < this.props.previewPin.occupants.length; i++) {
      occupantInfo.push(
          <div className="occupantName preview-info-block">
          {this.props.previewPin.occupants[i].firstName +
          ' ' + this.props.previewPin.occupants[i].lastName}</div>
          );
      if (this.state.contactInfoShown) {
        for (j = 0; j < this.props.previewPin.occupants[i].contactMethods.length; j++) {
          occupantInfo.push(
              <div className="occupantContactMethod preview-info-block">
              {this.props.previewPin.occupants[i].contactMethods[j]}</div>
              );
          occupantInfo.push(
              <div className="occupantContactValue preview-info-block">
              {this.props.previewPin.occupants[i].contactValues[j]}</div>
              );
        }
      }
    }
    return (
      <div id="preview-card">
        <div id="preview-info-container">
          <div id="preview-room-number">
            {this.props.isPreviewing ? roomNumber : '[No Room Selected]'}
          </div>
          <div id="preview-group">
            {this.props.isPreviewing ? 'Group ' + this.props.previewPin.group : ''}
          </div>
        </div>
        <div id="preview-occupant-info">
          {this.props.isPreviewing ? occupantInfo : ''}
        </div>
        <div id="preview-button-container">
          <div
            id="secondary-preview-button-container"
            className={secondaryButtonsShown}>
            <CompareButton
              setCompare={this.props.setCompare}
              previewPin={this.props.previewPin}
              isPreviewing={this.props.isPreviewing}
            />
            <ContactButton
              setContactInfoShown={this.setContactInfoShown}
            />
          </div>
          <div
            id="confirmation-text"
            className={confirmationTextShown}>
            <span>[Are you sure?]</span>
          </div>
          <PlacePinButton
            setPin={this.props.setPin}
            setConfirm={this.setConfirmationInProgress}
            inProgress={this.state.confirmationInProgress}
            userPin = {this.props.userPin}
            cardHall = {this.props.previewPin.hall}
            cardRoom = {this.props.previewPin.room}
          />
        </div>
      </div>
    );
  }
});

module.exports = PreviewCard
