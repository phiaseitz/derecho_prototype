var React = require('react');

var LogoutButton = React.createClass({
    handleClick: function() {
        console.log('LOGOUT');
    },

    render: function() {
        var buttonClass = "noselect logoutButton";
        return (
            <div className={buttonClass} onClick={this.handleClick}>
                <span className="menuButtonText">
                    Logout
                </span>
            </div>
        );
    }
});

module.exports = LogoutButton