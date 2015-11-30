var React = require('react');

var HomeButton = React.createClass({
    handleClick: function() {
        console.log('HOME');
    },

    render: function() {
        return (
            <div 
                id="homeButton"
                className="nohighlight menuButton" 
                onClick={this.handleClick}>

                <span className="menuButtonText">
                    Home
                </span>
            </div>
        );
    }
});

module.exports = HomeButton