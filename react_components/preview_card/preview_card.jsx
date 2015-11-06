var React = require('react');
// var CompareButton = require('./compare_button.jsx');
// var ContactButton = require('./contact_button.jsx');
// var PlacePinButton = require('./place_pin_button.jsx');

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
    return (
      <div id="preview-card">
        <div id="preview-info-container">
          <div className="preview-occupant-info">
            {this.props.previewRoom.room}
            {this.props.previewRoom.occupants[0] + " & " + 
                this.props.previewRoom.occupants[1]}
          </div>
          <div className="preview-group">
          </div>
        </div>
        <div id="preview-contact-info" className={contactInfoShown}>
        </div>
      </div>
        // <div id="preview-button-container">
        //   <div 
        //     id="secondary-preview-button-container" 
        //     className={secondaryButtonsShown}>
        //     <CompareButton
        //       setCompare={this.props.setCompare}
        //       isComparing={this.props.isComparing}
        //     />
        //     <ContactButton
        //       setContactInfoShown={this.setContactInfoShown}
        //     />
        //   </div>
        //   <div
        //     id="confirmation-text"
        //     className={!secondaryButtonsShown}>
        //     [Are you sure?]
        //   </div>
        //   <PlacePinButton
        //     setPin={this.props.setPin}
        //     setConfirm={this.setConfirmationInProgress}
        //   />
        // </div>
      
    );
  }
});

module.exports = PreviewCard