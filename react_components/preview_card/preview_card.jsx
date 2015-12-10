var React = require('react');
var PreviewCardButton = require('./preview_card_button.jsx');

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

  setCompare: function(previewPin) {
    if(this.props.isPreviewing){
      this.props.updateCompare(previewPin);
    } else {
      this.props.updateCompare(null);
    }
  },

  setPin: function() {
    this.setConfirmationInProgress();
  },

  confirmPin: function() {
    if (this.state.confirmationInProgress) {
      newUserPin = {
        group: this.props.userPin.group,
        occupants: this.props.userPin.occupants,
        hall: this.props.previewPin[0].hall,
        room: this.props.previewPin[0].room,
        tags: this.props.userPin.tags
      };
      this.props.setPin(newUserPin);
    }
    this.setConfirmationInProgress();
  },

  abortPin: function() {
    this.setConfirmationInProgress();
  },

  render: function() {
    if (!this.props.isPreviewing) {
      this.state.confirmationInProgress = false;
    }
    var contactInfoShown = this.state.contactInfoShown ? "visible" : "hidden";
    var secondaryButtonsShown =
        this.state.confirmationInProgress ?  "hidden" : "visible";
    var confirmationTextShown =
        this.state.confirmationInProgress ? "visible" : "hidden";
    var roomNumber = (this.props.previewPin[0].hall ? 'East Hall' : 'West Hall') +
        ' ' + this.props.previewPin[0].room;
    var displayRoommateContainer = this.props.isPreviewing && this.props.previewPin[0].occupants.length > 0;
    var roommateContainer = [];
    if (displayRoommateContainer) {
      for (i = 0; i < this.props.previewPin.length; i++) {
        var occupantInfo = [];
        for (j = 0; j < this.props.previewPin[i].occupants.length; j++) {
          occupantInfo.push(
              <div className="occupantName">
              {this.props.previewPin[i].occupants[j].firstName +
              ' ' + this.props.previewPin[i].occupants[j].lastName}</div>
              );
          if (this.state.contactInfoShown) {
            for (k = 0; k < this.props.previewPin[i].occupants[j].contactMethods.length; k++) {
              occupantInfo.push(
                  <div className="occupantContactMethod preview-contact-block">
                  {this.props.previewPin[i].occupants[j].contactMethods[k]}</div>
                  );
              occupantInfo.push(
                  <div className="occupantContactValue preview-contact-block">
                  {this.props.previewPin[i].occupants[j].contactValues[k]}</div>
                  );
            }
          }
        }
        roommateContainer.push(<div className="roommate-container">
              <PreviewCardButton
                  title="Compare tags"
                  icon="thumbs_up_down"
                  clickFunction={this.setCompare.bind(this, this.props.previewPin[i])}
              />
              <div id="preview-group">
                {'Group ' + this.props.previewPin[i].group}
              </div>
              {occupantInfo}
            </div>);
      }
    }
    return (
      <div id="preview-card">
        <div id="preview-header">
          <div id="preview-room-number">
              {this.props.isPreviewing ? roomNumber : '[No Room Selected]'}
          </div>
          <div id="preview-button-container">
            <PreviewCardButton
              title="Show contact info"
              icon="contact_mail"
              clickFunction={this.setContactInfoShown}
            />
            <PreviewCardButton
              title="Place pin"
              icon="pin_drop"
              clickFunction={this.setPin}
            />
          </div>
        </div>
        <div id="preview-confirm-container"
            className={this.state.confirmationInProgress ? "" : "hidden"}>
          <div id="confirmation-text">
            Are you sure?
          </div>
          <PreviewCardButton
              title="Abort pin placement"
              icon="cancel"
              clickFunction={this.abortPin}
          />
          <PreviewCardButton
              title="Confirm pin placement"
              icon="check_circle"
              clickFunction={this.confirmPin}
          />
        </div>
        {displayRoommateContainer ? roommateContainer : ''}
        <div id="preview-info-comments" className="preview-info-container">
          {this.props.isPreviewing && this.props.previewPin[0].occupants.length == 0 ? '[empty room]' : ''}
          {this.props.isPreviewing ? '' : '[click a room to preview]'}
        </div>
      </div>
    );
  }
});

module.exports = PreviewCard
