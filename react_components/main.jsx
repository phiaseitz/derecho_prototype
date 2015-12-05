var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./menu/menu.jsx');
var PreviewCard = require('./preview_card/preview_card.jsx')
var Sidebar = require("./sidebar/sidebar.jsx");
var DormMap = require('./map/dormmap.jsx');

//Mocked data
var currentUserPinData = require('./mocks/pin.jsx');
var allUserPinData = require('./mocks/pinData.jsx');
var sampleUser = require('./mocks/user.jsx');
var sampleTags = require('./mocks/tags.jsx');
var messages = require('./mocks/messages.jsx');

sampleUser.pin = currentUserPinData;
sampleUser.messages = messages;

var Main = React.createClass({

    getInitialState: function() {
        return {
            currentFloor: 7,
            userPin: sampleUser.pin,
            previewPin: currentUserPinData,
            comparing: null,
            user: sampleUser,
            tags: sampleTags,
            isPreviewing: false,
        }
    },

    setFloor: function(floor) {
        console.log('A')
        this.setState({
          currentFloor: floor
        });
    },

    setPreviewPin: function(pin){
      console.log('Preview Pin Set')
      this.setState({
        previewPin: pin
      });
    },

    setCompare: function(comparePin) {
        if(comparePin == this.state.comparing){
            comparePin = null;
        }

        this.setState({
          comparing: comparePin
        });
    },

    setPin: function(pin) {
        this.setState({
          userPin: pin,
          previewPin: pin
        });
    },
    onPinUpdate: function(pin){
        this.setState({
            pin:pin
        })
    },

    onTagAdd: function(tag){
        this.state.tags.push(tag)
        this.setState({
            tags:this.state.tags
        })
    },

    setPreview: function(isPreviewing) {
      this.setState({
        isPreviewing: isPreviewing
      });
    },

    render: function() {
        return (
            <div className="Main">
                <Menu
                    userPin = {this.state.userPin}
                    setFloor={this.setFloor}
                    currentFloor={this.state.currentFloor}
                />
                <div className="home">
                    <Sidebar
                        pin={this.state.userPin}
                        user={this.state.user}
                        tags={this.state.tags}
                        comparing={this.state.comparing}
                        onPinUpdate={this.onPinUpdate}
                        onTagAdd= {this.onTagAdd}
                    />
                    <DormMap
                      width={700}
                      height={700}
                      dorm = {this.state.currentFloor >= 4? "EH" : "WH"}
                      floor = {(this.state.currentFloor % 4) + 1}
                      margin = {100}
                      pinData = {allUserPinData}
                      currentUserPinData = {this.state.userPin}
                      setPreviewPin = {this.setPreviewPin}
                      setPreview = {this.setPreview}
                    />
                    <PreviewCard
                        previewPin={this.state.previewPin}
                        setCompare={this.setCompare}
                        setPin={this.setPin}
                        userPin = {this.state.userPin}
                        isPreviewing = {this.state.isPreviewing}
                    />
                </div>
            </div>
        );
    }
});



function run() {
    ReactDOM.render(<Main />, document.getElementById("target"));
}

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}
