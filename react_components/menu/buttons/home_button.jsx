var React = require('react');

var HomeButton = React.createClass({
    handleClick: function() {
        var x = ((this.props.userPin.hall ? 4 : 0) +
            Math.floor(this.props.userPin.room / 100) - 1);
        this.props.setFloor(
            ((this.props.userPin.hall ? 4 : 0) +
            Math.floor(this.props.userPin.room / 100) - 1)
        );
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