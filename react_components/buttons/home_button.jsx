var React = require('react');

var HomeButton = React.createClass({
    handleClick: function() {
        console.log('HomeButton');
    },

    render: function() {
        var buttonClass = "noselect homeButton";
        return (
            <div className={buttonClass} onClick={this.handleClick}>
                <span className="menuButtonText">
                    Home
                </span>
            </div>
        );
    }
});

module.exports = HomeButton