var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./menu/menu.jsx');
var PreviewCard = require('./preview_card/preview_card.jsx')
var Sidebar = require("./sidebar/sidebar.jsx");
var DormMap = require('./map/dormmap.jsx');

//Mocked data
var currentUserPinData = require('./mocks/pin.jsx');
var pinData = require('./mocks/pinData.jsx');
var sampleUser = require('./mocks/user.jsx');
var sampleTags = require('./mocks/tags.jsx');
var messages = require('./mocks/messages.jsx');

sampleUser.pin = pinData;
sampleUser.messages = messages;

var Main = React.createClass({

    getInitialState: function() {
        return {
            currentFloor: 0,
            userPin: currentUserPinData,
            previewPin: currentUserPinData,
            isComparing: false,
            user: sampleUser,
            tags: sampleTags
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

    setCompare: function() {
        this.setState({
          isComparing: !this.state.isComparing
        });
    },

    isComparing: function() {
        return this.state.isComparing;
    },

    setPin: function(pin) {
        console.log('Preview Pin Set');
        console.log("pin");
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

    render: function() {
        return (
            <div className="Main">
                <Menu
                    setFloor={this.setFloor}
                    currentFloor={this.state.currentFloor}
                />
                <div className="home">
                    <Sidebar
                        pin={this.state.userPin}
                        user={this.state.user}
                        tags={this.state.tags}
                        onPinUpdate={this.onPinUpdate}
                        onTagAdd= {this.onTagAdd}
                    />
                    <DormMap
                      width={700}
                      height={700}
                      // Update this to be west hall when we have that map working
                      dorm = {this.state.currentFloor >= 4? "EH" : "EH"}
                      floor = {(this.state.currentFloor % 4) + 1}
                      margin = {100}
                      pinData = {pinData}
                      currentUserPinData = {this.state.userPin}
                      setPreviewPin = {this.setPreviewPin}
                    />
                    <PreviewCard
                        previewPin={this.state.previewPin}
                        setCompare={this.setCompare}
                        isComparing={this.isComparing}
                        setPin={this.setPin}
                        userPin = {this.state.userPin}
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
