var React = require('react');
var MenuButton = require("./menuButton.jsx");

MenuBar = React.createClass({
    render: function(){
        return (
            <div className="menuBar">
                <MenuButton
                    name= "pin"
                    selectedTab= {this.props.selectedTab}
                    onMenuClick= {this.props.onMenuClick}
                />
                <MenuButton
                    name= "notifications"
                    selectedTab= {this.props.selectedTab}
                    onMenuClick= {this.props.onMenuClick}
                />
                <MenuButton
                    name= "settings"
                    selectedTab= {this.props.selectedTab}
                    onMenuClick= {this.props.onMenuClick}
                />
            </div>
        )
    }
});

module.exports = MenuBar;
