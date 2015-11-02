var React = require('react');

var FloorButton = React.createClass({
    handleClick: function() {
        console.log('click:',this.props.floorNumber);
        this.props.setFloor(
            this.props.floorNumber
        );
    },

    render: function() {
        var buttonClass = "nohighlight menuButton";
        if (this.props.floorNumber == this.props.currentFloor) {
            buttonClass = buttonClass + " menuButtonSelected";
        }

        return (
            <div className={buttonClass} onClick={this.handleClick}>
                <span className="menuButtonText">
                    {this.props.floorName}
                </span>
            </div>
        );
    }
});

module.exports = FloorButton
