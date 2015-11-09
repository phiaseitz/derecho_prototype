var React = require('react');

var LogoutButton = React.createClass({
    handleClick: function() {
        console.log('hello');
    },

    render: function() {
  return <a id="logoutButton"
                className="nohighlight menuButton" href="/logout"
            onClick={this.handleClick}>

                    <span className="menuButtonText">
                            Logout
                    </span>
        </a>;
}

});

module.exports = LogoutButton


