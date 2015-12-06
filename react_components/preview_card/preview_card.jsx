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

  setPin: function() {
    if (this.state.confirmationInProgress) {
      newUserPin = {
        group: this.props.userPin.group,
        occupants: this.props.userPin.occupants,
        hall: this.props.previewPin.hall,
        room: this.props.previewPin.room,
        tags: this.props.userPin.tags
      };
      console.log(newUserPin);
      this.props.setPin(newUserPin);
    }
    this.setConfirmationInProgress();
  },


  render: function() {
    console.log(this.state.contactInfoShown);
    var contactInfoShown = this.state.contactInfoShown ? "visible" : "hidden";
    var secondaryButtonsShown =
        this.state.confirmationInProgress ?  "hidden" : "visible";
    var confirmationTextShown =
        this.state.confirmationInProgress ? "visible" : "hidden";
    var roomNumber = (this.props.previewPin.hall ? 'East Hall' : 'West Hall') +
        ' ' + this.props.previewPin.room;

    var displayRoommateContainer = this.props.isPreviewing && this.props.previewPin.group != "";
    var roommateContainer;
    if (displayRoommateContainer) {
      var occupantInfo = [];
      for (i = 0; i < this.props.previewPin.occupants.length; i++) {
        occupantInfo.push(
            <div className="occupantName"> 
            {this.props.previewPin.occupants[i].firstName +
            ' ' + this.props.previewPin.occupants[i].lastName}</div>
            );
        if (this.state.contactInfoShown) {
          for (j = 0; j < this.props.previewPin.occupants[i].contactMethods.length; j++) {
            occupantInfo.push(
                <div className="occupantContactMethod preview-contact-block"> 
                {this.props.previewPin.occupants[i].contactMethods[j]}</div>
                );
            occupantInfo.push(
                <div className="occupantContactValue preview-contact-block"> 
                {this.props.previewPin.occupants[i].contactValues[j]}</div>
                );
          }
        }
      }
      roommateContainer = <div className="roommate-container">
            <PreviewCardButton
                title="Compare tags"
                icon="thumbs_up_down"
                clickFunction={this.props.setCompare}
            />
            <div id="preview-group">
              {'Group ' + this.props.previewPin.group}
            </div>
            {occupantInfo}
          </div>;
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
        {displayRoommateContainer ? roommateContainer : ''}
        <div id="preview-info-comments" className="preview-info-container">
          {this.props.isPreviewing && this.props.previewPin.group == "" ? '[empty room]' : ''}
          {this.props.isPreviewing ? '' : '[click a room to preview]'}
        </div>
        <div id="preview-confirm-container">

        </div>
      </div>
    );
  }
});

module.exports = PreviewCard