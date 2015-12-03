var React = require('react');
var PinTab = require('./tabs/pinTab.jsx')
var NotificationsTab = require('./tabs/notificationsTab.jsx')
var SettingsTab = require('./tabs/settingsTab.jsx')
var MenuBar = require('./menuBar.jsx')

Sidebar = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: "dashboard",
        };
    },

    onMenuClick: function(tab) {
        this.setState({
            selectedTab: tab
        });
    },

    render: function(){
        if(this.state.selectedTab === "dashboard"){
            var currentTab = <PinTab
                                pin={this.props.pin}
                                onPinUpdate={this.props.onPinUpdate}
                                tags={this.props.tags}
                                onTagAdd={this.props.onTagAdd}
                                comparing={this.props.comparing}
                             />
        } else if(this.state.selectedTab === "notifications"){
            var currentTab = <NotificationsTab
                                messages={this.props.user.messages}
                             />
        } else {
            var currentTab = <SettingsTab
                             />
        }

        return (
            <div className="sidebar">
                <MenuBar
                    onMenuClick={this.onMenuClick}
                    selectedTab={this.state.selectedTab}
                />
                {currentTab}
            </div>
        )
    }
});

module.exports = Sidebar;
