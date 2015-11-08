var React = require('react');

var LogoutButton = React.createClass({
    handleClick: function() {
        console.log('LOGOUT');
    },

    render: function() {
        return (
            <div
                id="logoutButton"
                className="nohighlight menuButton" 
                onClick={this.handleClick}>

                <span className="menuButtonText">
                    Logout
                </span>
            </div>
        );
    }
});

module.exports = LogoutButton


